<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const { variant, children }: { variant: 'primary' | 'destructive'; children: any } = $props();
</script>

<div
	class={cn('w-full rounded-lg border bg-card/60 px-4 py-2 drop-shadow', {
		'border-primary text-primary': variant === 'primary',
		'border-destructive text-destructive': variant === 'destructive'
	})}
	role="alert"
>
	<h5
		class={cn('flex items-center gap-2 text-lg font-bold', {
			'text-primary': variant === 'primary',
			'text-destructive': variant === 'destructive'
		})}
	>
		<Icon icon="mdi:console-line" />
		Alert
	</h5>

	<div class="pl-[1.5rem]">
		{@render children()}
	</div>
</div>
