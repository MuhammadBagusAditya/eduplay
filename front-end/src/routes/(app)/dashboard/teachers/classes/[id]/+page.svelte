<script lang="ts">
	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Button } from '$lib/components/ui/button';
	import StatsCard from './(components)/stats-card.svelte';
	import MemberCards from './(components)/member-cards.svelte';
	import MaterialCards from './(components)/material-cards.svelte';
	import AssignmentCards from './(components)/assignment-cards.svelte';
	import QuizCards from './(components)/quiz-cards.svelte';
	import Icon from '@iconify/svelte';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import * as Dialog from '$lib/components/ui/dialog';

	// import data types
	import type { PageData } from './$types';

	// import libraries
	import { pb } from '$lib/pb';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';

	const { data }: { data: PageData } = $props();

	const stats = $derived({
		materials: data.materials.length,
		assignments: data.assignments.length,
		quizzes: data.quizzes.length,
		members: data.members.length
	});

	let isCopied = $state(false);

	$effect(() => {
		if (isCopied) {
			setTimeout(() => {
				isCopied = false;
			}, 5000);
		}
	});

	async function deleteClass() {
		try {
			const response = await fetch('/dashboard/teachers/classes/' + data.classroom.id, {
				method: 'delete'
			});

			if (response.status > 399) throw new Error('');

			goto('/dashboard/teachers/classes');
		} catch (e) {
			toast.error('Alert', {
				description: 'Kelas gagal untuk dihapus',
				dismissable: true
			});
		}
	}
</script>

<svelte:head>
	<title>Eduplay - Kelas {data.classroom.name}</title>
</svelte:head>

<div
	class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[40%,_1fr]"
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
				<Breadcrumb.Page class="capitalize">{data.classroom.name}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<header
		class="relative z-0 min-h-[12rem] overflow-hidden rounded-xl bg-transparent px-6 py-4 shadow shadow-slate-900/20"
	>
		<div
			class="absolute left-0 top-0 z-[-1] block h-full w-full object-cover object-center after:absolute after:left-0 after:top-0 after:z-[10] after:block after:h-full after:w-full after:bg-primary/60"
		>
			<img
				src={pb.files.getURL(data.classroom, data.classroom.thumbnail)}
				alt="banner"
				class="h-full w-full object-cover object-center"
			/>
		</div>

		<div class=" left-0 top-0 z-[3] flex h-full w-full flex-col items-center justify-center">
			<h1
				class="mb-3 text-center text-xl font-bold capitalize text-slate-100 drop-shadow sm:text-3xl"
			>
				{data.classroom.name}
			</h1>

			<span
				class="inline-flex items-center gap-2 text-center text-sm capitalize text-slate-100 drop-shadow sm:text-base"
			>
				{data.classroom.description}
			</span>
		</div>

		<Dialog.Root>
			<!-- Dropdown -->
			<Dropdown.Root>
				<Dropdown.Trigger class="absolute right-3 top-3">
					<Icon icon="mdi:dots-horizontal" class="text-3xl text-slate-300" />
				</Dropdown.Trigger>

				<Dropdown.Content class="w-56">
					<Dropdown.Group>
						<Dropdown.GroupHeading>Aksi</Dropdown.GroupHeading>

						<Dropdown.Separator />

						<Dropdown.Group>
							{#if isCopied}
								<Dropdown.Item closeOnSelect={false}>
									<Icon icon="mdi:clipboard-check-outline" />
									ID berhasil disalin
								</Dropdown.Item>
							{:else}
								<Dropdown.Item
									onclick={async () =>
										navigator.clipboard.writeText(data.classroom.id).then(() => (isCopied = true))}
									closeOnSelect={false}
								>
									<Icon icon="mdi:clipboard-outline" />
									Salin ID Kelas
								</Dropdown.Item>
							{/if}

							<Dropdown.Item>
								<Icon icon="mdi:pencil-outline" class="" />
								<a
									href={'/dashboard/teachers/classes/' + data.classroom.id + '/edit'}
									class="text-sm">Edit kelas</a
								>
							</Dropdown.Item>

							<Dropdown.Item>
								<Icon icon="mdi:trash-can-outline" class="text-destructive" />
								<Dialog.Trigger class="w-full text-left text-sm text-destructive">
									Hapus kelas
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
					<Dialog.Description>Apakah yakin ingin menghapus kelas ini?</Dialog.Description>
				</Dialog.Header>

				<Dialog.Footer>
					<Button variant="destructive" onclick={deleteClass}>Iya</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</header>

	<StatsCard {stats} />

	<Tabs.Root value="material" class="col-span-1 xl:col-span-2">
		<Tabs.List class="grid w-full grid-cols-4">
			<Tabs.Trigger value="material">
				<span class="hidden sm:block">Materi</span>
				<Icon icon="mdi:file-document-outline" class="block text-xl sm:hidden" />
			</Tabs.Trigger>

			<Tabs.Trigger value="assignment">
				<span class="hidden sm:block">Tugas</span>
				<Icon icon="mdi:clipboard-text-outline" class="block text-xl sm:hidden" />
			</Tabs.Trigger>

			<Tabs.Trigger value="quiz">
				<span class="hidden sm:block">Kuis</span>
				<Icon icon="mdi:help-box-outline" class="block text-xl sm:hidden" />
			</Tabs.Trigger>

			<Tabs.Trigger value="members">
				<span class="hidden sm:block">Anggota</span>
				<Icon icon="mdi:account-outline" class="block text-xl sm:hidden" />
			</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="material">
			<MaterialCards materials={data.materials} classroomId={data.classroom.id} />
		</Tabs.Content>

		<Tabs.Content value="assignment">
			<AssignmentCards assignments={data.assignments} classroomId={data.classroom.id} />
		</Tabs.Content>

		<Tabs.Content value="quiz">
			<QuizCards quizzes={data.quizzes} classroomId={data.classroom.id} />
		</Tabs.Content>

		<Tabs.Content value="members">
			<MemberCards members={data.members} classroomId={data.classroom.id} />
		</Tabs.Content>
	</Tabs.Root>
</div>
