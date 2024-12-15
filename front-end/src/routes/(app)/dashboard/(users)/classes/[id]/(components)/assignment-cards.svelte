<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button/';
	import { Badge } from '$lib/components/ui/badge';

	import type { RecordModel } from 'pocketbase';

	const {
		assignments,
		classroomId,
		assignmentGrades
	}: {
		assignments: RecordModel[];
		classroomId: string;
		assignmentGrades: Record<string, number>;
	} = $props();
</script>

<Card.Root>
	<Card.Content>
		<div class="mb-6 flex items-center justify-between">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">
				<Icon icon="mdi:clipboard-text-outline" class="hidden text-4xl sm:block" />
				Tugas
			</h3>
		</div>

		<div class="flex flex-col gap-3">
			{#if assignments.length}
				{#each assignments as assignment}
					<div class="flex flex-col justify-between gap-3 sm:flex-row">
						<a href={'/dashboard/assignments/' + assignment.id}>
							<h6 class="capitalize text-slate-700">{assignment.name}</h6>
						</a>

						{#if assignmentGrades[assignment.id]}
							{#if assignmentGrades[assignment.id] > 50}
								<Badge>
									{assignmentGrades[assignment.id]}/100
								</Badge>
							{:else}
								<Badge variant="destructive">
									{assignmentGrades[assignment.id]}/100
								</Badge>
							{/if}
						{:else}
							<Badge variant="destructive">?/100</Badge>
						{/if}
					</div>
					<Separator class="bg-slate-300 last:hidden" />
				{/each}
			{:else}
				<p class="text-center text-slate-700">Tidak ada data</p>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
