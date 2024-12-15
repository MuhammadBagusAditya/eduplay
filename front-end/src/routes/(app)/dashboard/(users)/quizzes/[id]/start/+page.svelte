<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import type { PageData, ActionData } from './$types';
	import { DateTime } from 'luxon';
	import { toast } from 'svelte-sonner';
	import { invalidate } from '$app/navigation';
	import type { RecordModel } from 'pocketbase';
	import { cn } from '$lib/utils';
	import { untrack } from 'svelte';

	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	let currentQuestionIdx = $state(0);

	let currentQuestion = $derived(data.quiz.expand?.questions_via_quiz[currentQuestionIdx]);

	let timer = $state('00:00:00');

	let submitForm: HTMLFormElement | undefined = $state();

	let lastAnswerIds: Record<string, string> = {};

	let answerIds: Record<string, string> = $state({});

	let jsonAnswerIds = $derived(JSON.stringify(answerIds));

	async function save() {
		try {
			const res = await fetch('/dashboard/quizzes/' + data.quiz.id + '/start', {
				method: 'POST',
				body: JSON.stringify({ answerIds }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const jsonData = await res.json();

			if (res.status > 399) throw new Error(jsonData.message);

			return true;
		} catch (e) {
			toast.error('Alert', {
				description: (e as Error).message,
				dismissable: true
			});

			return false;
		}
	}

	async function setCurrentQuestionIdx(idx: number) {
		currentQuestionIdx = idx;

		if (
			Object.keys(answerIds).length === 0 ||
			JSON.stringify(answerIds) === JSON.stringify(lastAnswerIds)
		)
			return;

		if (await save()) {
			await invalidate('userQuiz');
			lastAnswerIds = { ...answerIds };
		}
	}

	$effect(() => {
		untrack(() => {
			data.quiz.expand?.questions_via_quiz.forEach((question: RecordModel) => {
				const answers = data.userQuiz.answers;

				for (const answer of answers) {
					if (
						question.expand?.answers_via_question
							.reduce(
								(allAnswers: string[], current: RecordModel) => [...allAnswers, current.id],
								[]
							)
							.includes(answer)
					) {
						answerIds[question.id] = answer;
					}
				}
			});

			lastAnswerIds = { ...answerIds };
		});

		const id = setInterval(async () => {
			const now = DateTime.now();
			const futureTime = DateTime.fromMillis(data.userQuiz.endTime);
			timer = futureTime.diff(now, ['hours', 'minutes', 'seconds']).toFormat('hh:mm:ss');

			if (futureTime.diff(now).toMillis() < 0) {
				await save();

				submitForm?.submit();
			}
		}, 1000);

		return () => {
			clearInterval(id);
		};
	});
</script>

<svelte:head>
	<title>Eduplay - Kuis {data.quiz.name}</title>
</svelte:head>

<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6">
	<Breadcrumb.Root class="">
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard">Dashboard</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link
					href={'/dashboard/classes/' + data.userQuiz.expand?.quiz.classroom}
					class="capitalize"
				>
					{data.userQuiz.expand?.quiz.expand?.classroom.name}
				</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/quizzes">Kuis</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page class="capitalize">
					{data.userQuiz.expand?.quiz.name}
				</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<Card.Root>
		<Card.Content>
			<h2
				class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl"
			>
				Soal

				<span
					class="inline-flex items-center gap-2 text-sm font-normal text-slate-600 sm:text-base"
				>
					<Icon icon="mdi:clock" class="text-lg" />
					Sisa {timer}
				</span>
			</h2>

			<div class="mb-4 flex flex-col gap-3 text-sm text-slate-700 sm:text-base">
				{`${currentQuestion.order}. ${currentQuestion.name}`}
			</div>

			<div class="mb-4 flex flex-col gap-3">
				{#each currentQuestion.expand?.answers_via_question as answer}
					{#if answerIds[currentQuestion.id] === answer.id}
						<span class={cn(buttonVariants({ variant: 'default' }), 'justify-start')}>
							{answer.text}
						</span>
					{:else}
						<Button
							class="justify-start"
							variant="outline"
							onclick={() => (answerIds[currentQuestion.id] = answer.id)}
						>
							{answer.text}
						</Button>
					{/if}
				{/each}
			</div>

			<div class="flex justify-between gap-4">
				<div class="flex gap-4">
					<Button
						variant="outline"
						onclick={() => setCurrentQuestionIdx(currentQuestionIdx - 1)}
						disabled={currentQuestionIdx === 0}
					>
						<Icon icon="mdi:arrow-left" />
					</Button>

					<Button
						variant="outline"
						onclick={() => setCurrentQuestionIdx(currentQuestionIdx + 1)}
						disabled={currentQuestionIdx === data.quiz.expand?.questions_via_quiz.length - 1}
					>
						<Icon icon="mdi:arrow-right" />
					</Button>
				</div>

				<form method="post" bind:this={submitForm}>
					<input type="hidden" name="answers" value={jsonAnswerIds} />

					<Button type="submit">
						<span class="hidden sm:block">Submit</span>
						<Icon icon="mdi:send" />
					</Button>
				</form>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Content>
			<h2
				class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl"
			>
				Pergi ke
			</h2>

			<div class="grid grid-cols-5 gap-3 sm:grid-cols-10">
				{#each data.quiz.expand?.questions_via_quiz as question, i}
					{#if currentQuestionIdx === i}
						<Button>
							{question.order}
						</Button>
					{:else}
						<Button
							variant="outline"
							class="text-slate-700"
							onclick={() => setCurrentQuestionIdx(i)}
						>
							{question.order}
						</Button>
					{/if}
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
</div>
