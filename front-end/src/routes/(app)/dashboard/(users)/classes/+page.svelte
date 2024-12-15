<script lang="ts">
	// import library
	import Icon from '@iconify/svelte';

	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import ClassCard from './(components)/class-card.svelte';

	// import data types
	import type { ActionData, PageData } from './$types';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';

	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	const classes = $derived(data.classes);
	const todayClasses = $derived(data.todayClasses);

	$effect(() => {
		if (formAction?.message) {
			if (formAction.message.variant === 'primary') {
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

	<form method="post" class="flex flex-col gap-3 sm:flex-row sm:gap-0" use:enhance>
		<Input class="w-full sm:rounded-r-none" name="classroom" placeholder="Masukkan kode kelas" />

		<Button class="sm:rounded-l-none" type="submit">
			Join
			<Icon icon="mdi:send" class="text-xl" />
		</Button>
	</form>

	{#if classes}
		<div>
			<h3 class="mb-4 text-lg font-bold text-slate-700">Kelas hari ini</h3>

			{#if todayClasses !== null && todayClasses.length > 0}
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
	{/if}

	<div>
		<h3 class="mb-4 text-lg font-bold text-slate-700">Semua kelas</h3>

		{#if classes}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
				{#each classes as classroom}
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
</main>
