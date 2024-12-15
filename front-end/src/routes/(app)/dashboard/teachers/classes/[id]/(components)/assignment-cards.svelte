<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button/';

	import type { RecordModel } from 'pocketbase';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	const { assignments, classroomId }: { assignments: RecordModel[]; classroomId: string } =
		$props();
</script>

<Card.Root>
	<Card.Content>
		<div class="mb-6 flex items-center justify-between">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">
				<Icon icon="mdi:clipboard-text-outline" class="hidden text-4xl sm:block" />
				Tugas
			</h3>

			<Button href={'/dashboard/teachers/assignments/create?classroom=' + classroomId} size="sm">
				<Icon icon="mdi:plus" />
				<span class="hidden text-sm sm:block"> Buat tugas </span>
			</Button>
		</div>

		<div class="flex flex-col gap-3">
			{#if assignments.length}
				{#each assignments as assignment}
					<div class="flex flex-col justify-between gap-3 sm:flex-row">
						<a href={'/dashboard/teachers/assignments/' + assignment.id}>
							<h6 class="capitalize text-slate-700">{assignment.name}</h6>
						</a>
					</div>
					<Separator class="bg-slate-300 last:hidden" />
				{/each}
			{:else}
				<p class="text-center text-slate-700">Tidak ada data</p>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
