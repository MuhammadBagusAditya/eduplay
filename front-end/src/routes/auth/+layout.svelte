<script lang="ts">
	const { children } = $props();
</script>

<main class="relative">
	<img
		src="/auth-banner.jpeg"
		alt="banner"
		class="sticky left-0 top-0 z-[-1] h-screen w-full object-cover object-center"
		role="banner"
	/>

	<div
		class="absolute left-0 top-0 z-[2] flex h-screen w-full flex-wrap items-center justify-center overflow-y-auto bg-slate-900/10 py-8 lg:justify-end"
	>
		{@render children()}
	</div>
</main>
