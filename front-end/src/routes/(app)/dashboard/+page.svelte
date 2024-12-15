<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import ClassCard from './(components)/class-card.svelte';

	import type { PageData } from './$types';
	import { pb } from '$lib/pb';
	import Icon from '@iconify/svelte';
	import { DateTime } from 'luxon';

	const { data }: { data: PageData } = $props();

	let isCopied = $state(false);

	$effect(() => {
		if (isCopied) {
			setTimeout(() => {
				isCopied = false;
			}, 5000);
		}
	});

	const currentDay = DateTime.now().weekday;

	const todayClasses = data.classes.filter((classroom) =>
		classroom.schedules.includes('' + currentDay)
	);
</script>

<svelte:head>
	<title>Eduplay - Dashboard</title>
</svelte:head>

<main class="grid grid-cols-1 gap-6 xl:grid-cols-2">
	<Card.Root>
		<Card.Content class="relative">
			<div class="grid grid-cols-1 items-center gap-6 sm:grid-cols-[6rem,_1fr]">
				<div class="relative mx-auto aspect-square w-full max-w-[8rem]">
					<Avatar.Root class="aspect-square h-full max-h-[8rem] w-full">
						<Avatar.Image
							src={data.user?.avatar
								? pb.files.getURL(data.user, data.user?.avatar)
								: '/unknown.jpg'}
							class="aspect-square w-full object-cover object-center"
						/>

						<Avatar.Fallback>ED</Avatar.Fallback>
					</Avatar.Root>

					<Button
						class="absolute bottom-0 right-0 rounded-full shadow shadow-slate-900/20"
						href="/dashboard/profile/edit"
						variant="outline"
						size="icon"
					>
						<Icon icon="mdi:pencil" />
					</Button>
				</div>

				<div class="flex flex-col">
					<h1 class="text-center text-2xl font-bold text-primary sm:text-left">Selamat Datang</h1>
					<h3 class="mb-1 text-center text-lg text-slate-800 sm:text-left">{data.user.name}</h3>

					<p class="text-center text-sm text-slate-700 sm:text-left">{'@' + data.user.username}</p>
				</div>
			</div>

			<!-- Dropdown -->
			<Dropdown.Root>
				<Dropdown.Trigger class="absolute right-3 top-3">
					<Icon icon="mdi:dots-vertical" class="text-2xl text-slate-700" />
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
										navigator.clipboard.writeText(data.user.id).then(() => (isCopied = true))}
									closeOnSelect={false}
								>
									<Icon icon="mdi:clipboard-outline" />
									Salin ID User
								</Dropdown.Item>
							{/if}
						</Dropdown.Group>
					</Dropdown.Group>
				</Dropdown.Content>
			</Dropdown.Root>
			<!-- End Dropdown -->
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Content>
			<h2 class="mb-3 text-xl font-bold text-primary sm:text-2xl">Bio</h2>
			<p class="text-sm text-slate-700">{data.user.bio}</p>
		</Card.Content>
	</Card.Root>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<h2 class="mb-3 text-xl font-bold text-primary sm:text-2xl">Statistik</h2>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r">
					<h3 class="font-semibold text-slate-800">Kelas</h3>

					<div class="grid grid-cols-[1fr,_auto] text-slate-700">
						<span class="text-5xl">
							{data.classes.length}
						</span>

						<Icon icon="mdi:school" class="text-5xl" />
					</div>
				</div>

				<div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r">
					<h3 class="font-semibold text-red-700">Materi</h3>

					<div class="grid grid-cols-[1fr,_auto] text-red-600">
						<span class="text-5xl"> {data.dataCount.materials} </span>

						<Icon icon="mdi:file-document" class="text-5xl" />
					</div>
				</div>

				<div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r">
					<h3 class="font-semibold text-blue-700">Tugas</h3>

					<div class="grid grid-cols-[1fr,_auto] text-blue-600">
						<span class="text-5xl"> {data.dataCount.assignments} </span>

						<Icon icon="mdi:clipboard-text" class="text-5xl" />
					</div>
				</div>

				<div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r">
					<h3 class="font-semibold text-yellow-700">Kuis</h3>

					<div class="grid grid-cols-[1fr,_auto] text-yellow-600">
						<span class="text-5xl"> {data.dataCount.quizzes} </span>

						<Icon icon="mdi:help-box" class="text-5xl" />
					</div>
				</div>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root class="xl:col-span-2">
		<Card.Content>
			<h2 class="mb-3 text-xl font-bold text-primary sm:text-2xl">Kelas hari ini</h2>

			{#if todayClasses.length > 0}
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
					{#each todayClasses as classroom}
						<ClassCard {classroom} />
					{/each}
				</div>
			{:else}
				<div class="flex w-full flex-col items-center gap-3">
					<img src="/not-class.svg" alt="not found" class="w-[12rem]" />
					<h4 class="text-xl text-slate-700">Tidak ada kelas hari ini</h4>
				</div>
			{/if}
		</Card.Content>
	</Card.Root>
</main>
