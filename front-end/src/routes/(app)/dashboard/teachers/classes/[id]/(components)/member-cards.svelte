<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	import type { RecordModel } from 'pocketbase';
	import { cn } from '$lib/utils';
	import { pb } from '$lib/pb';
	import { toast } from 'svelte-sonner';
	import { invalidateAll } from '$app/navigation';

	const { members, classroomId }: { members: RecordModel[]; classroomId: string } = $props();

	let newMember = $state('');

	async function addMember(e: Event) {
		e.preventDefault();

		try {
			const res = await fetch('/dashboard/teachers/classes/' + classroomId + '/members', {
				method: 'post',
				body: JSON.stringify({
					id: newMember
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (res.status > 399) throw new Error('');

			newMember = '';

			toast.success('Alert', {
				description: 'Anggota baru berhasil ditambahkan',
				dismissable: true
			});

			await invalidateAll();
		} catch (e) {
			toast.error('Alert', {
				description: 'Anggota baru gagal ditambahkan',
				dismissable: true
			});
		}
	}

	async function deleteMember(id: string) {
		try {
			const res = await fetch('/dashboard/teachers/classes/' + classroomId + '/members', {
				body: JSON.stringify({
					id
				}),
				method: 'delete',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (res.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'Anggota berhasil dihapus',
				dismissable: true
			});

			await invalidateAll();
		} catch (e) {
			toast.error('Alert', {
				description: 'Anggota gagal dihapus',
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

			<Dialog.Root>
				<Dialog.Trigger class={cn(buttonVariants({ size: 'sm' }))}>
					<Icon icon="mdi:plus" />
					<span class="hidden text-sm sm:block"> Tambah anggota </span>
				</Dialog.Trigger>

				<Dialog.Content>
					<form onsubmit={addMember} class="flex flex-col gap-3">
						<Dialog.Header>
							<Dialog.Title>Tambah anggota</Dialog.Title>
						</Dialog.Header>

						<Input name="member" bind:value={newMember} placeholder="Masukkan id murid" />

						<Dialog.Footer>
							<Button type="submit">Submit</Button>
						</Dialog.Footer>
					</form>
				</Dialog.Content>
			</Dialog.Root>
		</div>

		<div class="flex flex-col gap-3">
			{#if members.length}
				{#each members as member}
					<div class="flex flex-col justify-between gap-3 sm:flex-row">
						<h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700">
							{member.expand?.user.name}
						</h6>

						<Dialog.Root>
							<Dialog.Trigger class={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}>
								<Icon icon="mdi:trash-can-outline" class="text-destructive" />
							</Dialog.Trigger>

							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Alert</Dialog.Title>

									<Dialog.Description>Yakin menghapus anggota ini?</Dialog.Description>
								</Dialog.Header>

								<Dialog.Footer>
									<Button variant="destructive" onclick={() => deleteMember(member.id)}>Iya</Button>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					</div>
					<Separator class="bg-slate-300 last:hidden" />
				{/each}
			{:else}
				<p class="text-center text-slate-700">Tidak ada data</p>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
