<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Separator } from '$lib/components/ui/separator';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import { pb } from '$lib/pb';

	const { data }: { data: PageData } = $props();
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
				<Breadcrumb.Link href="/dashboard/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href={'/dashboard/classes/' + data.material.classroom} class="capitalize">
					{data.material.expand?.classroom.name}
				</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard/materials">Materi</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page class="capitalize">
					{data.material.name}
				</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<header
		class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"
	>
		<div class=" flex flex-wrap items-center justify-between gap-4">
			<h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">
				{data.material.name}
			</h1>
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
				{#if data.material.expand?.attachments !== undefined}
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
						</div>
					{/each}
				{:else}
					<p class="text-center text-slate-700">Tidak ada lampiran</p>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</div>
