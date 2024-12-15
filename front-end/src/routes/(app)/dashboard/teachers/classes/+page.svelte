<script lang="ts">
	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import Icon from '@iconify/svelte';
	import * as Card from '$lib/components/ui/card';
	import ClassCard from './(components)/class-card.svelte';

	// import data types
	import type { PageData } from './$types';

	// import library
	import { DateTime } from 'luxon';

	const { data }: { data: PageData } = $props();

	const currentDay = DateTime.now().weekday;

	const classes = data.classes;

	const todayClasses = data.classes.filter((classroom) =>
		classroom.schedules.includes('' + currentDay)
	);
</script>

<svelte:head>
	<title>Eduplay - Daftar Kelas</title>
</svelte:head>

<main class="grid grid-cols-1 gap-6">
	<h1 class="text-3xl font-bold text-slate-800">Daftar Kelas</h1>

	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard">Dashboard</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page>Kelas</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<div>
		<h3 class="mb-4 text-lg font-bold text-slate-700">Kelas hari ini</h3>

		{#if todayClasses.length > 0}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
				{#each todayClasses as classroom}
					<ClassCard {classroom} />
				{/each}
			</div>
		{:else}
			<div class="flex w-full flex-col items-center gap-3">
				<img src="/not-class.svg" alt="not found" class="w-[12rem]" />
				<h4 class="text-xl text-slate-700">Tidak ada kelas hari ini</h4>
			</div>
		{/if}
	</div>

	<div>
		<h3 class="mb-4 text-lg font-bold text-slate-700">Semua kelas</h3>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each classes as classroom}
				<ClassCard {classroom} />
			{/each}

			<a href="/dashboard/teachers/classes/create">
				<Card.Root class="h-full min-h-40">
					<Card.Content class="flex h-full flex-col items-center justify-center p-0">
						<Icon icon="mdi:plus" class="mb- text-6xl text-slate-700" />
						<span class="text-slate-700">Tambah kelas baru</span>
					</Card.Content>
				</Card.Root>
			</a>
		</div>
	</div>
</main>
