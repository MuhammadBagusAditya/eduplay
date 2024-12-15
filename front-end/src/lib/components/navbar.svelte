<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button } from '$lib/components/ui/button';
	import Sidebar from '$lib/components/sidebar';

	function toggleSidebar(e: Event) {
		e.preventDefault();

		Sidebar.isAppear.update((val) => !val);
	}
</script>

<nav class="sticky left-0 top-0 z-[4] mb-8 w-full bg-white py-4 shadow">
	<div class="container mx-auto flex items-center">
		<a href="/" class="text-2xl font-bold text-primary">Eduplay</a>

		<div class="flex-1"></div>

		<Button variant="ghost" class="block lg:hidden [&_svg]:size-auto" onclick={toggleSidebar}>
			<Icon icon="mdi:menu" class="text-xl text-slate-700" />
		</Button>
	</div>
</nav>
