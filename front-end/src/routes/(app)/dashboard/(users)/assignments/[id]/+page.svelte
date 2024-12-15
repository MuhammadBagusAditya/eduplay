<script lang="ts">
	// import components
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import * as Form from '$lib/components/ui/form';
	import { buttonVariants, Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import Icon from '@iconify/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';

	// import data types
	import type { ActionData, PageData } from './$types';
	import { fileProxy, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addAttachmentSchema } from '$lib/schema/teachers/assignments';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { pb } from '$lib/pb';
	import { goto, invalidateAll } from '$app/navigation';

	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	const attachmentForm = superForm(data.attachmentForm, {
		validators: zodClient(addAttachmentSchema)
	});

	const attachment = fileProxy(attachmentForm, 'attachment');

	// delete user attachments function
	async function deleteAttachment(id: string) {
		try {
			const response = await fetch('/dashboard/attachments/' + id + '/assignments', {
				method: 'delete',
				body: JSON.stringify({
					userAssignment: data.userAssignment.id
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'File berhasil dihapus',
				dismissable: true
			});

			goto('/dashboard/assignments/' + data.assignment.id, {
				invalidateAll: true
			});
		} catch (e) {
			toast.error('Alert', {
				description: 'Anda tidak memiliki akses untuk menghapus',
				dismissable: true
			});
		}
	}

	$effect(() => {
		if (formAction?.message) {
			if (formAction?.message?.variant === 'primary') {
				toast.success('Alert', {
					description: formAction.message.text,
					dismissable: true
				});
			} else {
				toast.error('Alert', {
					description: formAction.message.text,
					dismissable: true
				});
			}
		}
	});
</script>

<svelte:head>
	<title>Eduplay - Tugas {data.assignment.name}</title>
</svelte:head>

<div
	class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[1fr,_40%]"
>
	<Breadcrumb.Root class="xl:col-span-2">
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard">Dashboard</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link
					href={'/dashboard/classes/' + data.assignment.classroom}
					class="capitalize"
				>
					{data.assignment.expand?.classroom.name}
				</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/assignments">Tugas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page class="capitalize">
					{data.assignment.name}
				</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<header
		class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"
	>
		<div class=" flex flex-wrap items-center justify-between gap-4">
			<h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">
				{data.assignment.name}
			</h1>
		</div>
	</header>

	<Card.Root>
		<Card.Content>
			<h2
				class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl"
			>
				Deskripsi tugas

				<span class="text-sm text-slate-700">
					{(data.userAssignment.grade > 0 ? data.userAssignment.grade : '?') + '/100'}
				</span>
			</h2>

			<p class="mb-4 text-sm text-slate-700">
				{data.assignment.description}
			</p>

			{#if data.assignment.status === 'open'}
				<Badge>Dibuka</Badge>
			{:else}
				<Badge variant="destructive">Ditutup</Badge>
			{/if}
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Content>
			<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran tugas</h2>

			<div class="flex flex-col gap-3">
				{#each data.assignment.expand?.attachments as attachment}
					<div class="flex items-center gap-2">
						<Icon
							icon={attachment.type === 'application'
								? 'mdi:file'
								: attachment.type === 'image'
									? 'mdi:file-image'
									: attachment.type === 'video'
										? 'mdi:file-video'
										: 'mdi:file-document-alert'}
							class="text-4xl text-slate-700"
						/>

						<a
							class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-slate-700 underline"
							href={pb.files.getURL(attachment, attachment.file)}>{attachment.name}</a
						>
					</div>

					<Separator class="last:hidden" />
				{/each}
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran tugas</h2>

			<div class="flex flex-col gap-3">
				{#if data.userAssignment.expand?.attachments.length > 0}
					{#each data.userAssignment.expand?.attachments as attachment}
						<div class="flex items-center gap-2">
							<Icon
								icon={attachment.type === 'application'
									? 'mdi:file'
									: attachment.type === 'image'
										? 'mdi:file-image'
										: attachment.type === 'video'
											? 'mdi:file-video'
											: 'mdi:file-document-alert'}
								class="text-4xl text-slate-700"
							/>

							<a
								class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-slate-700 underline"
								href={pb.files.getURL(attachment, attachment.file)}>{attachment.name}</a
							>

							<Dialog.Root>
								<Dialog.Trigger class={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}>
									<Icon icon="mdi:trash-can-outline" class="text-destructive" />
								</Dialog.Trigger>

								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title>Alert</Dialog.Title>

										<Dialog.Description>Yakin menghapus file?</Dialog.Description>
									</Dialog.Header>

									<Dialog.Footer>
										<Button variant="destructive" onclick={() => deleteAttachment(attachment.id)}
											>Iya</Button
										>
									</Dialog.Footer>
								</Dialog.Content>
							</Dialog.Root>
						</div>

						<Separator class="last:hidden" />
					{/each}
				{:else}
					<p class="text-center text-slate-700">Tidak ada data</p>
				{/if}

				<Dialog.Root>
					<Dialog.Trigger class={cn(buttonVariants({ variant: 'default' }), 'ml-auto w-fit')}>
						<Icon icon="mdi:plus" class="text-xl" />
						Upload file
					</Dialog.Trigger>

					<Dialog.Content>
						<form action="?/upload-attachment" method="post" enctype="multipart/form-data">
							<Dialog.Header>
								<Dialog.Title>Tambah file</Dialog.Title>
							</Dialog.Header>

							<Form.Field form={attachmentForm} name="attachment">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label>File</Form.Label>
										<input
											{...props}
											type="file"
											bind:files={$attachment}
											class={cn(
												'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
											)}
										/>
									{/snippet}
								</Form.Control>
								<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
							</Form.Field>

							<input type="hidden" name="userAssignment" bind:value={data.userAssignment.id} />

							<Dialog.Footer>
								<Button type="submit">Submit</Button>
							</Dialog.Footer>
						</form>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</Card.Content>
	</Card.Root>
</div>
