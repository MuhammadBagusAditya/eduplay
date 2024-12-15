<script lang="ts">
	// import components
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';

	// import library
	import { pb } from '$lib/pb';
	import { days, getDay } from '$lib/time';

	// import data types
	import type { RecordModel } from 'pocketbase';

	const { classroom }: { classroom: RecordModel } = $props();
</script>

<a href={'/dashboard/classes/' + classroom.id}>
	<Card.Root class="overflow-hidden">
		<Card.Header class="p-0 ">
			<img
				src={pb.files.getURL(classroom, classroom.thumbnail)}
				alt="banner"
				class="aspect-video w-full object-cover object-center"
			/>
		</Card.Header>

		<Card.Content>
			<h3 class="mb-4 text-lg capitalize text-slate-700">{classroom.name}</h3>

			<div class="flex flex-wrap gap-2">
				{#each classroom.schedules as schedule}
					<Badge>
						{getDay(schedule)}
					</Badge>
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
</a>
