<script lang="ts">
	// import components
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import * as Form from '$lib/components/ui/form';
	import { buttonVariants, Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';

	// import data types
	import type { ActionData, PageData } from './$types';
	import { fileProxy, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addAttachmentSchema } from '$lib/schema/teachers/materials';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { pb } from '$lib/pb';
	import { goto } from '$app/navigation';

	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	const attachmentForm = superForm(data.attachmentForm, {
		validators: zodClient(addAttachmentSchema)
	});

	const attachment = fileProxy(attachmentForm, 'attachment');

	// delete material function
	async function deleteMaterial() {
		try {
			const response = await fetch('/dashboard/teachers/materials/' + data.material.id, {
				method: 'delete'
			});

			if (response.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'Materi berhasil dihapus',
				dismissable: true
			});

			goto('/dashboard/teachers/classes/' + data.material.classroom);
		} catch (e) {
			toast.error('Alert', {
				description: 'Anda tidak memiliki akses untuk menghapus',
				dismissable: true
			});
		}
	}

	// delete attachments function
	async function deleteAttachment(id: string) {
		try {
			const response = await fetch('/dashboard/teachers/attachments/' + id, {
				method: 'delete'
			});

			if (response.status > 399) throw new Error('');

			toast.success('Alert', {
				description: 'File berhasil dihapus',
				dismissable: true
			});

			goto('/dashboard/teachers/materials/' + data.material.id, {
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
	<title>Eduplay - Materi {data.material.name}</title>
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
				<Breadcrumb.Link href="/dashboard/teachers/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link
					href={'/dashboard/teachers/classes/' + data.material.expand?.classroom.id}
					class="capitalize">{data.material.expand?.classroom.name}</Breadcrumb.Link
				>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/teachers/materials">Materi</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page class="capitalize">{data.material.name}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<header
		class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"
	>
		<div class=" flex flex-wrap items-center justify-between gap-4">
			<h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">{data.material.name}</h1>

			<Dialog.Root>
				<!-- Dropdown -->
				<Dropdown.Root>
					<Dropdown.Trigger>
						<Icon icon="mdi:dots-vertical" class="text-3xl text-slate-300" />
					</Dropdown.Trigger>

					<Dropdown.Content class="w-56">
						<Dropdown.Group>
							<Dropdown.GroupHeading>Aksi</Dropdown.GroupHeading>

							<Dropdown.Separator />

							<Dropdown.Group>
								<Dropdown.Item>
									<Icon icon="mdi:pencil-outline" class="" />
									<a
										href={'/dashboard/teachers/materials/' + data.material.id + '/edit'}
										class="text-sm">Edit materi</a
									>
								</Dropdown.Item>

								<Dropdown.Item>
									<Icon icon="mdi:trash-can-outline" class="text-destructive" />
									<Dialog.Trigger class="w-full text-left text-sm text-destructive">
										Hapus materi
									</Dialog.Trigger>
								</Dropdown.Item>
							</Dropdown.Group>
						</Dropdown.Group>
					</Dropdown.Content>
				</Dropdown.Root>
				<!-- End Dropdown -->

				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>Alert</Dialog.Title>
						<Dialog.Description>Apakah yakin ingin menghapus materi ini?</Dialog.Description>
					</Dialog.Header>

					<Dialog.Footer>
						<Button variant="destructive" onclick={deleteMaterial}>Iya</Button>
					</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</header>

	<Card.Root>
		<Card.Content>
			<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Deskripsi materi</h2>

			<p class="text-sm text-slate-700">
				{data.material.description}
			</p>
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Content>
			<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran materi</h2>

			<div class="flex flex-col gap-3">
				{#each data.material.expand?.attachments as attachment}
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

				<Dialog.Root>
					<Dialog.Trigger class={cn(buttonVariants({ variant: 'default' }))}>
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
