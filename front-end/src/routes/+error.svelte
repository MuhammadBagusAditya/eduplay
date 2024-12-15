<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';

	import type { LayoutData } from './$types';

	const { data }: { data: LayoutData } = $props();
</script>

<svelte:head>
	<title>Eduplay - {$page.status}</title>
</svelte:head>

{#if $page.status === 404}
	<main class="flex min-h-screen flex-col items-center justify-center">
		<img src="/not-found.svg" alt="not found" class=" mb-4 w-[90%] sm:max-w-[20rem]" />

		{#if data.user}
			<Button href="/dashboard" class="">Kembali ke dashboard</Button>
		{:else}
			<Button href="/" class="">Kembali ke beranda</Button>
		{/if}
	</main>
{:else}
	<main class="flex min-h-screen flex-col items-center justify-center">
		<h1 class="mb-2 text-3xl text-slate-700 sm:text-4xl lg:text-6xl">{$page.status}</h1>

		<span class="mb-6 text-slate-700">{$page.error?.message}</span>

		{#if data.user}
			<Button href="/dashboard" class="">Kembali ke dashboard</Button>
		{:else}
			<Button href="/" class="">Kembali ke beranda</Button>
		{/if}
	</main>
{/if}
