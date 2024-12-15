<script lang="ts">
	import { cn } from '$lib/utils';
	import { isLoading } from './state';
</script>

<div
	class={cn(
		'fixed bottom-0 left-0 right-0 top-0 z-[100] flex-col items-center justify-center gap-3 bg-white',
		$isLoading ? 'flex' : 'hidden'
	)}
>
	<div class="flex h-[4rem] items-center gap-4">
		<span
			class="h-[0.75rem] w-[0.75rem] animate-loading rounded-full bg-primary [animation-delay:_0]"
		></span>
		<span
			class="h-[0.75rem] w-[0.75rem] animate-loading rounded-full bg-primary [animation-delay:_200ms]"
		></span>
		<span
			class="h-[0.75rem] w-[0.75rem] animate-loading rounded-full bg-primary [animation-delay:_400ms]"
		></span>
		<span
			class="h-[0.75rem] w-[0.75rem] animate-loading rounded-full bg-primary [animation-delay:_600ms]"
		></span>
	</div>

	<span class="text-xl">Mohon tunggu...</span>
</div>
