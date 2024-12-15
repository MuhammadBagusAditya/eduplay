<script lang="ts">
	// import components
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { buttonVariants, Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { Badge } from '$lib/components/ui/badge';

	// import data types
	import type { ActionData, PageData } from './$types';
	import { cn } from '$lib/utils';

	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	const timer = $derived({
		hours: Math.floor(data.quiz.time / 3600),
		minutes: Math.floor((data.quiz.time % 3600) / 60),
		seconds: data.quiz.time % 60
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
				<Breadcrumb.Link href="/dashboard/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link
					href={'/dashboard/classes/' + data.quiz.expand?.classroom.id}
					class="capitalize">{data.quiz.expand?.classroom.name}</Breadcrumb.Link
				>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/quizzes">Kuis</Breadcrumb.Link>
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
		</div>
	</header>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<h2
				class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl"
			>
				Deskripsi kuis

				<span class="text-sm text-slate-700">
					{(data.quizGrade && data.quizGrade > 0 ? data.quizGrade.toFixed(2) : '?') + '/100'}
				</span>
			</h2>

			<p class="mb-3 text-sm text-slate-700">
				{data.quiz.description}
			</p>

			<div class="mb-4 flex gap-3">
				<Badge variant="outline">
					{`${timer.hours} Jam, ${timer.minutes} Menit, ${timer.seconds} Detik`}
				</Badge>

				{#if data.quiz.status === 'open'}
					<Badge>Dibuka</Badge>
				{:else}
					<Badge variant="destructive">Ditutup</Badge>
				{/if}
			</div>

			<div class="flex justify-end">
				{#if data.userQuiz}
					{#if data.userQuiz.isSubmitted}
						<span class={cn(buttonVariants({ variant: 'outline' }))}> Sudah disubmit </span>
					{:else if !data.userQuiz.isSubmitted && data.quiz.status === 'open'}
						<Button href={'/dashboard/quizzes/' + data.quiz.id + '/start'}>
							<Icon icon="mdi:play" />
							<span>Lanjutkan kuis</span>
						</Button>
					{/if}
				{:else if !data.userQuiz && data.quiz.status === 'open'}
					<Button href={'/dashboard/quizzes/' + data.quiz.id + '/start'}>
						<Icon icon="mdi:play" />
						<span>Mulai kuis</span>
					</Button>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</div>
