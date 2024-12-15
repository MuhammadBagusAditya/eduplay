<script lang="ts">
	// import components
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import * as Form from '$lib/components/ui/form';
	import { buttonVariants, Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import * as Sheet from '$lib/components/ui/sheet';

	// import data types
	import type { ActionData, PageData } from './$types';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { pb } from '$lib/pb';
	import { goto, invalidateAll } from '$app/navigation';
	import { addQuestionSchema } from '$lib/schema/teachers/quizzes';

	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	let currentQuestionIdx = $state(0);

	let correctAnswer = $state('');

	const timer = $derived({
		hours: Math.floor(data.quiz.time / 3600),
		minutes: Math.floor((data.quiz.time % 3600) / 60),
		seconds: data.quiz.time % 60
	});

	const addQuestionForm = superForm(data.addQuestionForm, {
		validators: zodClient(addQuestionSchema)
	});

	const { form: questionFormData, enhance } = addQuestionForm;

	// delete quiz function
	async function deleteQuiz() {
		try {
			const response = await fetch('/dashboard/teachers/quizzes/' + data.quiz.id, {
				method: 'delete'
			});

			if (response.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'Tugas berhasil dihapus',
				dismissable: true
			});

			goto('/dashboard/teachers/classes/' + data.quiz.classroom);
		} catch (e) {
			toast.error('Alert', {
				description: 'Anda tidak memiliki akses untuk menghapus',
				dismissable: true
			});
		}
	}

	async function deleteQuestion() {
		const id = data.quiz.expand?.questions_via_quiz[currentQuestionIdx].id;

		try {
			const response = await fetch('/dashboard/teachers/quizzes/' + data.quiz.id + '/questions', {
				method: 'delete',
				body: JSON.stringify({
					id
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'Pertanyaan berhasil dihapus',
				dismissable: true
			});

			await invalidateAll();
		} catch (e) {
			toast.error('Alert', {
				description: 'Pertanyaan gagal dihapus',
				dismissable: true
			});
		}
	}

	async function updateQuestion(e: Event) {
		e.preventDefault();

		const question = data.quiz.expand?.questions_via_quiz[currentQuestionIdx];

		const answers = question.expand?.answers_via_question;

		try {
			const response = await fetch('/dashboard/teachers/quizzes/' + data.quiz.id + '/questions', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					answers,
					correctAnswer,
					question
				})
			});

			if (response.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'Pertanyaan berhasil diubah',
				dismissable: true
			});

			await invalidateAll();
		} catch (e) {
			toast.error('Alert', {
				description: 'Pertanyaan gagal diubah',
				dismissable: true
			});
		}
	}

	$effect(() => {
		if (formAction?.message) {
			if (formAction?.message?.variant === 'primary') {
				toast.success('Alert', {
					description: formAction.message.text,
					dismissable: true
				});
			} else {
				toast.error('Alert', {
					description: formAction.message.text,
					dismissable: true
				});
			}
		}
	});
</script>

<svelte:head>
	<title>Eduplay - Kuis {data.quiz.name}</title>
</svelte:head>

<div
	class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[1fr,_40%]"
>
	<Breadcrumb.Root class="xl:col-span-2">
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard">Dashboard</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/teachers/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link
					href={'/dashboard/teachers/classes/' + data.quiz.expand?.classroom.id}
					class="capitalize">{data.quiz.expand?.classroom.name}</Breadcrumb.Link
				>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/teachers/quizzes">Kuis</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page class="capitalize">{data.quiz.name}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<header
		class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"
	>
		<div class=" flex flex-wrap items-center justify-between gap-4">
			<h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">
				{data.quiz.name}
			</h1>

			<Dialog.Root>
				<!-- Dropdown -->
				<Dropdown.Root>
					<Dropdown.Trigger>
						<Icon icon="mdi:dots-vertical" class="text-3xl text-slate-300" />
					</Dropdown.Trigger>

					<Dropdown.Content class="w-56">
						<Dropdown.Group>
							<Dropdown.GroupHeading>Aksi</Dropdown.GroupHeading>

							<Dropdown.Separator />

							<Dropdown.Group>
								<Dropdown.Item>
									<Icon icon="mdi:pencil-outline" class="" />
									<a href={'/dashboard/teachers/quizzes/' + data.quiz.id + '/edit'} class="text-sm"
										>Edit kuis</a
									>
								</Dropdown.Item>

								<Dropdown.Item>
									<Icon icon="mdi:trash-can-outline" class="text-destructive" />
									<Dialog.Trigger class="w-full text-left text-sm text-destructive">
										Hapus kuis
									</Dialog.Trigger>
								</Dropdown.Item>
							</Dropdown.Group>
						</Dropdown.Group>
					</Dropdown.Content>
				</Dropdown.Root>
				<!-- End Dropdown -->

				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>Alert</Dialog.Title>
						<Dialog.Description>Apakah yakin ingin menghapus kuis ini?</Dialog.Description>
					</Dialog.Header>

					<Dialog.Footer>
						<Button variant="destructive" onclick={deleteQuiz}>Iya</Button>
					</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</header>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Deskripsi kuis</h2>

			<p class="mb-3 text-sm text-slate-700">
				{data.quiz.description}
			</p>

			<div class="flex gap-3">
				<Badge variant="outline">
					{`${timer.hours} Jam, ${timer.minutes} Menit, ${timer.seconds} Detik`}
				</Badge>

				{#if data.quiz.status === 'open'}
					<Badge>Dibuka</Badge>
				{:else}
					<Badge variant="destructive">Ditutup</Badge>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Nilai kuis</h2>

			{#if data.quizGrades.length > 0}
				<div class="flex flex-col gap-3">
					{#each data.quizGrades as quizGrade}
						<div class="flex items-center justify-between gap-3">
							<span>{quizGrade.user_name}</span>

							<Badge>
								{parseFloat(quizGrade.grade).toFixed(2)}/100
							</Badge>
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-center text-slate-700">Tidak ada data</p>
			{/if}
		</Card.Content>
	</Card.Root>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<div class="mb-4 flex items-center justify-between gap-3">
				<h2 class="text-lg font-bold text-primary sm:text-xl">Daftar pertanyaan</h2>

				<Dialog.Root>
					<Dialog.Trigger class={cn(buttonVariants({ variant: 'default', size: 'sm' }))}>
						<Icon icon="mdi:plus" />
						<span class="hidden text-sm md:block">Tambah pertanyaan</span>
					</Dialog.Trigger>

					<Dialog.Content>
						<form action="?/add-question" method="post" use:enhance class="flex flex-col gap-3">
							<Dialog.Header>
								<Dialog.Title>Tambah pertanyaan</Dialog.Title>
							</Dialog.Header>

							<!-- Order input field -->
							<Form.Field form={addQuestionForm} name="order">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label>Nomor</Form.Label>
										<Input
											{...props}
											class="border-slate-300"
											bind:value={$questionFormData.order}
											placeholder="Masukkan nomor"
											type="number"
											min={1}
										/>
									{/snippet}
								</Form.Control>
								<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
							</Form.Field>
							<!-- End Order input field -->

							<!-- Question input field -->
							<Form.Field form={addQuestionForm} name="name">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label>Pertanyaan</Form.Label>
										<Input
											{...props}
											class="border-slate-300"
											bind:value={$questionFormData.name}
											placeholder="Masukkan pertanyaan"
										/>
									{/snippet}
								</Form.Control>
								<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
							</Form.Field>
							<!-- End Question input field -->

							<input type="hidden" bind:value={$questionFormData.quiz} name="quiz" />

							<Dialog.Footer>
								<Button type="submit">Submit</Button>
							</Dialog.Footer>
						</form>
					</Dialog.Content>
				</Dialog.Root>
			</div>

			{#if data.quiz.expand?.questions_via_quiz}
				<div class="grid grid-cols-5 gap-3 md:grid-cols-10">
					{#each data.quiz.expand?.questions_via_quiz as question, i}
						{#if currentQuestionIdx === i}
							<Button variant="default" onclick={() => (currentQuestionIdx = i)}>
								{question.order}
							</Button>
						{:else}
							<Button variant="outline" onclick={() => (currentQuestionIdx = i)}>
								{question.order}
							</Button>
						{/if}
					{/each}
				</div>
			{:else}
				<p class="text-center text-slate-700">Tidak ada data</p>
			{/if}
		</Card.Content>
	</Card.Root>

	{#if data.quiz.expand?.questions_via_quiz}
		<Sheet.Root>
			<Card.Root class="xl:col-span-2">
				<Card.Content>
					<div class="mb-4 flex items-center justify-between gap-3">
						<h2 class="text-lg font-bold text-primary sm:text-xl">
							Pertanyaan ke-{currentQuestionIdx + 1}
						</h2>

						<div class="flex items-center gap-3">
							<Dialog.Root>
								<Dialog.Trigger class={cn(buttonVariants({ variant: 'destructive' }))}>
									<Icon icon="mdi:trash-can-outline" />
								</Dialog.Trigger>

								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title>Alert</Dialog.Title>
										<Dialog.Description>Yakin ingin menghapus pertanyaan ini?</Dialog.Description>
									</Dialog.Header>

									<Dialog.Footer>
										<Button variant="destructive" onclick={() => deleteQuestion()}>Iya</Button>
									</Dialog.Footer>
								</Dialog.Content>
							</Dialog.Root>

							<Sheet.Trigger class={cn(buttonVariants({ variant: 'outline' }))}>Edit</Sheet.Trigger>
						</div>
					</div>

					<p class="mb-6 text-slate-700">
						{data.quiz.expand?.questions_via_quiz[currentQuestionIdx].name}
					</p>

					<div class="mb-4 flex flex-col gap-4">
						{#each data.quiz.expand?.questions_via_quiz[currentQuestionIdx].expand?.answers_via_question as answer}
							<div
								class={cn(
									'w-full rounded-lg border border-slate-200 px-4 py-2',
									answer.isCorrect ? 'text-primary' : 'text-slate-700'
								)}
							>
								{answer.text}
							</div>
						{/each}
					</div>

					<div class="flex items-center justify-end gap-3">
						{#if currentQuestionIdx > 0}
							<Button variant="outline" onclick={() => currentQuestionIdx--}>Sebelumnya</Button>
						{/if}

						{#if currentQuestionIdx < data.quiz.expand?.questions_via_quiz.length - 1}
							<Button variant="outline" onclick={() => currentQuestionIdx++}>Selanjutnya</Button>
						{/if}
					</div>
				</Card.Content>
			</Card.Root>

			<Sheet.Content side="right">
				<Sheet.Header>
					<Sheet.Title>Edit pertanyaan</Sheet.Title>
				</Sheet.Header>

				<form onsubmit={updateQuestion} class="mt-4 flex flex-col gap-4">
					<Input
						bind:value={data.quiz.expand.questions_via_quiz[currentQuestionIdx].order}
						type="number"
						placeholder="Nomor"
					/>

					<Input
						bind:value={data.quiz.expand.questions_via_quiz[currentQuestionIdx].name}
						placeholder="Pertanyaan"
					/>

					<RadioGroup.Root bind:value={correctAnswer}>
						{#each data.quiz.expand?.questions_via_quiz[currentQuestionIdx].expand?.answers_via_question as answer}
							<div class="grid grid-cols-[auto_1fr] items-center gap-4">
								<RadioGroup.Item value={answer.id} />
								<Input bind:value={answer.text} />
							</div>
						{/each}
					</RadioGroup.Root>

					<Button type="submit">Submit</Button>
				</form>
			</Sheet.Content>
		</Sheet.Root>
	{/if}
</div>
