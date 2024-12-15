<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as Card from '$lib/components/ui/card';

	const {
		stats
	}: {
		stats: {
			materials: number;
			assignments: number;
			quizzes: number;
			members: number;
		};
	} = $props();
</script>

<Card.Root>
	<Card.Content>
		<h2 class="mb-4 text-xl font-bold text-primary sm:text-2xl">Statistik</h2>

		<div class="grid gap-4 md:grid-cols-2">
			<div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4">
				<span class="flex items-center gap-1 text-lg font-semibold text-primary sm:text-xl">
					<Icon icon="mdi:account" class="text-3xl" />
					{stats.members}
				</span>

				<h4 class="text-center text-sm text-slate-600">Total anggota</h4>
			</div>

			<div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4">
				<span class="flex items-center gap-1 text-lg font-semibold text-slate-700 sm:text-xl">
					<Icon icon="mdi:file-document" class="text-3xl" />
					{stats.materials}
				</span>

				<h4 class="text-center text-sm text-slate-600">Materi yang anda buat</h4>
			</div>

			<div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4">
				<span class="flex items-center gap-1 text-lg font-semibold text-red-600 sm:text-xl">
					<Icon icon="mdi:clipboard-text" class="text-3xl" />
					{stats.assignments}
				</span>

				<h4 class="text-center text-sm text-slate-600">Tugas yang anda buat</h4>
			</div>

			<div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4">
				<span class="flex items-center gap-1 text-lg font-semibold text-yellow-600 sm:text-xl">
					<Icon icon="mdi:help-box" class="text-3xl" />
					{stats.quizzes}
				</span>

				<span class="text-center text-sm text-slate-600">Kuis yang anda buat</span>
			</div>
		</div>
	</Card.Content>
</Card.Root>
