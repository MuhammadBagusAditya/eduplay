<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button/';

	import type { RecordModel } from 'pocketbase';

	const { materials, classroomId }: { materials: RecordModel[]; classroomId: string } = $props();
</script>

<Card.Root>
	<Card.Content>
		<div class="mb-6 flex items-center justify-between">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">
				<Icon icon="mdi:file-document-outline" class="hidden text-4xl sm:block" />
				Materi
			</h3>
		</div>

		<div class="flex flex-col gap-3">
			{#if materials.length}
				{#each materials as material}
					<div class="flex flex-col justify-between gap-3 sm:flex-row">
						<a href={'/dashboard/materials/' + material.id}>
							<h6 class="capitalize text-slate-700">{material.name}</h6>
						</a>

						<span class="text-primary">{`${material.attachments.length} Lampiran`}</span>
					</div>
					<Separator class="bg-slate-300 last:hidden" />
				{/each}
			{:else}
				<p class="text-center text-slate-700">Tidak ada data</p>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
