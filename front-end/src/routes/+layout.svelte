<script lang="ts">
	// import css and types
	import '../app.css';
	import type { LayoutData } from './$types';

	// import components
	import Loader from '$lib/components/loader';
	import Sidebar from '$lib/components/sidebar';
	import { Toaster } from '$lib/components/ui/sonner';

	// import navigation hooks
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let { children, data }: { children: any; data: LayoutData } = $props();

	beforeNavigate(() => {
		Loader.isLoading.set(true);
		Sidebar.isAppear.set(false);
	});

	afterNavigate(() => {
		Loader.isLoading.set(false);
	});
</script>

<Loader.Root />

<Toaster />

{@render children()}
