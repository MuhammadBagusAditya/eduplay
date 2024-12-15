<script lang="ts">
	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Tabs from '$lib/components/ui/tabs';
	import StatsCard from './(components)/stats-card.svelte';
	import MaterialCards from './(components)/material-cards.svelte';
	import AssignmentCards from './(components)/assignment-cards.svelte';
	import QuizCards from './(components)/quiz-cards.svelte';
	import Icon from '@iconify/svelte';

	// import data types
	import type { PageData } from './$types';
	import { pb } from '$lib/pb';
	import MemberCards from './(components)/member-cards.svelte';

	const { data }: { data: PageData } = $props();

	const stats = $derived({
		materials: data.materials.length,
		assignments: data.assignments.length,
		quizzes: data.quizzes.length,
		members: data.members.length
	});
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
				<Breadcrumb.Link href="/dashboard/classes">Kelas</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page class="capitalize">{data.classroom.name}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<header
		class="relative z-0 overflow-hidden rounded-xl bg-transparent px-6 py-4 shadow shadow-slate-900/20"
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
			<AssignmentCards
				assignments={data.assignments}
				assignmentGrades={data.assignmentGrades}
				classroomId={data.classroom.id}
			/>
		</Tabs.Content>

		<Tabs.Content value="quiz">
			<QuizCards
				quizzes={data.quizzes}
				classroomId={data.classroom.id}
				quizGrades={data.quizGrades}
			/>
		</Tabs.Content>

		<Tabs.Content value="members">
			<MemberCards
				members={data.members}
				classroomId={data.classroom.id}
				user={data.user}
				creator={data.classroom.expand?.creator}
			/>
		</Tabs.Content>
	</Tabs.Root>
</div>
