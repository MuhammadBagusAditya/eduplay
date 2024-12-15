<script lang="ts">
	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import Icon from '@iconify/svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	// import data types
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Eduplay - Daftar Kuis</title>
</svelte:head>

<main class="grid grid-cols-1 gap-6">
	<h1 class="text-3xl font-bold text-slate-800">Daftar Kuis</h1>

	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard">Dashboard</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page>Kuis</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	{#if data.classes.length}
		{#each data.classes as classroom}
			<Card.Root>
				<Card.Header>
					<Card.Title class="text-lg capitalize text-primary">
						{classroom.name}
					</Card.Title>
				</Card.Header>

				<Card.Content class="flex flex-col gap-3">
					{#if classroom.expand?.quizzes_via_classroom.length > 0}
						{#each classroom.expand?.quizzes_via_classroom as quiz}
							<div class="flex w-full items-center justify-between gap-3">
								<a
									class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap capitalize"
									href={'/dashboard/quizzes/' + quiz.id}
								>
									{quiz.name}
								</a>

								{#if quiz.status === 'open'}
									<Badge>Dibuka</Badge>
								{:else}
									<Badge variant="destructive">Ditutup</Badge>
								{/if}
							</div>

							<Separator class="last:hidden" />
						{/each}
					{:else}
						<p class="text-center text-slate-700">Tidak ada data</p>
					{/if}
				</Card.Content>
			</Card.Root>
		{/each}
	{:else}
		<div class="flex w-full flex-col items-center gap-3">
			<img src="/not-class.svg" alt="not found" class="w-[12rem]" />
			<h4 class="text-xl text-slate-700">Tidak ada kuis saat ini</h4>
		</div>
	{/if}
</main>
