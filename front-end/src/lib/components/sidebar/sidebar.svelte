<script lang="ts">
	// import components
	import { Separator } from '$lib/components/ui/separator';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';

	// import states
	import { page } from '$app/stores';
	import { isAppear } from '$lib/components/sidebar/state';
	import { type AuthModel } from 'pocketbase';
	import { pb } from '$lib/pb';

	// get auth user
	const { user }: { user: AuthModel } = $props();

	// all sidebar links
	const links: Array<{
		name: string;
		href: string;
		icon: string;
		activeIcon: string;
		regex?: string;
		role: 'student' | 'teacher' | '(student|teacher)';
	}> = [
		{
			name: 'Beranda',
			href: '/dashboard',
			icon: 'mdi:home-outline',
			activeIcon: 'mdi:home',
			role: '(student|teacher)',
			regex: '/dashboard(/?)$'
		},
		{
			name: 'Daftar Kelas',
			href: '/dashboard/classes',
			icon: 'mdi:school-outline',
			activeIcon: 'mdi:school',
			role: 'student'
		},
		{
			name: 'Daftar Materi',
			href: '/dashboard/materials',
			icon: 'mdi:file-document-outline',
			activeIcon: 'mdi:file-document',
			role: 'student'
		},
		{
			name: 'Daftar Tugas',
			href: '/dashboard/assignments',
			icon: 'mdi:clipboard-text-outline',
			activeIcon: 'mdi:clipboard-text',
			role: 'student'
		},
		{
			name: 'Daftar Kuis',
			href: '/dashboard/quizzes',
			icon: 'mdi:help-box-outline',
			activeIcon: 'mdi:help-box',
			role: 'student'
		},
		{
			name: 'Manajemen Kelas',
			href: '/dashboard/teachers/classes',
			icon: 'mdi:view-dashboard-outline',
			activeIcon: 'mdi:view-dashboard',
			role: 'teacher'
		},
		{
			name: 'Manajemen Materi',
			href: '/dashboard/teachers/materials',
			icon: 'mdi:file-document-outline',
			activeIcon: 'mdi:file-document',
			role: 'teacher'
		},
		{
			name: 'Manajemen Tugas',
			href: '/dashboard/teachers/assignments',
			icon: 'mdi:clipboard-text-outline',
			activeIcon: 'mdi:clipboard-text',
			role: 'teacher'
		},
		{
			name: 'Manajemen Kuis',
			href: '/dashboard/teachers/quizzes',
			icon: 'mdi:help-box-outline',
			activeIcon: 'mdi:help-box',
			role: 'teacher'
		}
	];
</script>

<aside class="flex h-full w-full flex-col bg-primary px-6 py-4">
	<!-- header -->
	<div class="flex gap-3 overflow-hidden">
		<a href="/dashboard/profile/edit">
			<Avatar.Root class="h-[4rem] w-[4rem]">
				<Avatar.Image
					src={user?.avatar ? pb.files.getURL(user, user?.avatar) : '/unknown.jpg'}
					alt="user profile"
					class="h-full w-full object-cover object-center"
				/>
				<Avatar.Fallback>ED</Avatar.Fallback>
			</Avatar.Root>
		</a>

		<div class="grid grid-cols-1 grid-rows-[auto,_auto]">
			<h4 class="flex items-center gap-3">
				<span
					class="overflow-hidden text-ellipsis whitespace-nowrap text-xl text-primary-foreground"
				>
					{user?.name !== '' ? user?.name : user?.username}
				</span>

				<button
					class="block size-4 text-primary-foreground lg:hidden"
					onclick={() => isAppear.set(false)}
				>
					<Icon icon="mdi:close" class="text-xl" />
				</button>
			</h4>

			<p class="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-primary-foreground">
				{`@${user?.username}`}
			</p>

			<!-- <Button
				href="/dashboard/profile"
				variant="outline"
				class="h-fit w-fit px-3 py-1 text-sm text-slate-800">Profile</Button
			> -->
		</div>
	</div>
	<!-- end header -->

	<Separator class="my-3" />

	<!-- links -->
	<div class="flex flex-1 flex-col gap-2">
		{#each links as link}
			{#if link.role.match(user?.role)}
				{#if !$page.url.pathname.match('^' + (link.regex ? link.regex : link.href + '([/]?|[/](.+)?)$'))}
					<a
						href={link.href}
						class="flex w-full items-center justify-start gap-2 overflow-hidden text-nowrap rounded-lg bg-primary px-0 py-2 text-primary-foreground transition-all hover:bg-slate-100 hover:px-4 hover:text-slate-800"
					>
						<Icon icon={link.icon} class="text-2xl" />
						{link.name}
					</a>
				{:else}
					<span
						class="flex w-full items-center justify-start gap-2 overflow-hidden text-nowrap rounded-lg bg-slate-100 px-4 py-2 text-slate-800 transition-all"
					>
						<Icon icon={link.activeIcon} class="text-2xl" />
						{link.name}
					</span>
				{/if}
			{/if}
		{/each}
	</div>
	<!-- end links -->

	<Separator class="my-3" />

	<!-- sign out -->
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>
			<Icon icon="mdi:logout" class="text-2xl" />
			Sign Out
		</Dialog.Trigger>

		<Dialog.Content class="sm:w-80">
			<Dialog.Header>
				<Dialog.Title>Konfirmasi</Dialog.Title>
				<Dialog.Description>Apakah anda yakin untuk sign out?</Dialog.Description>
			</Dialog.Header>

			<Dialog.Footer>
				<form action="/auth/sign-out" method="post" class="flex w-full justify-end">
					<Button type="submit" class="mt-2">
						<Icon icon="mdi:logout" class="text-2xl" />
						Sign Out
					</Button>
				</form>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
	<!-- end sign out -->
</aside>
