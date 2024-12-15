<script lang="ts">
	import type { LayoutData } from './$types';
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar';
	import { isAppear } from '$lib/components/sidebar/state';
	import { cn } from '$lib/utils';

	const { children, data }: { children: any; data: LayoutData } = $props();
</script>

<div
	class="relative grid h-screen grid-rows-1 overflow-hidden bg-background lg:grid-cols-[20vw,_1fr]"
>
	<div
		class={cn(
			'fixed top-0 z-[5] h-full w-full max-w-[24rem] transition-all lg:sticky lg:left-0 lg:block',
			$isAppear ? 'left-0' : 'left-[-100%]'
		)}
	>
		<Sidebar.Root user={data?.user} />
	</div>

	<div class="overflow-y-auto pb-8">
		<Navbar />

		<main class="container">
			{@render children()}
		</main>
	</div>
</div>
