<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';

	import type { RecordModel } from 'pocketbase';
	import { cn } from '$lib/utils';
	import { pb } from '$lib/pb';
	import { toast } from 'svelte-sonner';
	import { goto, invalidateAll } from '$app/navigation';

	const {
		members,
		classroomId,
		user,
		creator
	}: { members: RecordModel[]; classroomId: string; user: RecordModel; creator: RecordModel } =
		$props();

	async function deleteMember(id: string, userId: string) {
		try {
			const res = await fetch('/dashboard/classes/' + classroomId + '/members', {
				method: 'delete',
				body: JSON.stringify({
					id,
					userId
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (res.status > 399) throw new Error();

			toast.success('Alert', {
				description: 'Anda berhasil keluar dari kelas',
				dismissable: true
			});

			goto('/dashboard/classes');
		} catch (e) {
			toast.error('Alert', {
				description: 'Anda gagal keluar dari kelas',
				dismissable: true
			});
		}
	}
</script>

<Card.Root>
	<Card.Content>
		<div class="mb-6 flex items-center justify-between">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">
				<Icon icon="mdi:account-outline" class="hidden text-4xl sm:block" />
				Anggota
			</h3>
		</div>

		<div class="flex flex-col gap-3">
			<div class="flex flex-col justify-between gap-3 sm:flex-row">
				<h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700">
					{creator.name}

					<Badge class="ml-3">Guru</Badge>
				</h6>
			</div>
			<Separator class="bg-slate-300 last:hidden" />

			{#if members.length}
				{#each members as member}
					<div class="flex flex-col justify-between gap-3 sm:flex-row">
						<h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700">
							{member.expand?.user.name}
						</h6>

						{#if member.expand?.user.id === user.id}
							<Dialog.Root>
								<Dialog.Trigger class={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}>
									<Icon icon="mdi:logout" class="text-destructive" />
								</Dialog.Trigger>

								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title>Alert</Dialog.Title>

										<Dialog.Description>Yakin keluar dari kelas ini?</Dialog.Description>
									</Dialog.Header>

									<Dialog.Footer>
										<Button
											variant="destructive"
											onclick={() => deleteMember(member.id, member.expand?.user.id)}>Iya</Button
										>
									</Dialog.Footer>
								</Dialog.Content>
							</Dialog.Root>
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
