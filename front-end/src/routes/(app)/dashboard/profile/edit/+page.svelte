<script lang="ts">
	import Icon from '@iconify/svelte';

	// import components
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Form from '$lib/components/ui/form';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Dialog from '$lib/components/ui/dialog';
	import { toast } from 'svelte-sonner';

	// import validation library
	import {
		editAvatarSchema,
		editProfileSchema as formSchema,
		type EditProfileSchema
	} from '$lib/schema/edit-profile';
	import { fileProxy, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	// import data types
	import type { PageData, ActionData } from './$types';

	import { cn } from '$lib/utils';
	import { pb } from '$lib/pb';

	// get page data and form data from +page.server.ts
	let { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	// initialize form schema
	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		resetForm: false
	});

	// initialize avatar form
	const avatarForm = superForm(data.avatarForm, {
		validators: zodClient(editAvatarSchema),
		resetForm: true
	});

	const { form: formData, enhance } = form;

	const { form: avatarData } = avatarForm;

	const avatar = fileProxy(avatarData, 'avatar');

	// checking message
	$effect(() => {
		if (formAction?.message) {
			if (formAction.message.variant === 'primary') {
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
	<title>Eduplay - Edit Profile</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<Breadcrumb.Root class="xl:col-span-2">
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/dashboard">Dashboard</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Link>Profile</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page>Edit</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<!-- Avatar edit form -->
	<Dialog.Root>
		<div
			class="relative mx-auto mb-4 h-[7rem] w-[7rem] rounded-full border border-slate-400 md:h-[8rem] md:w-[8rem]"
		>
			<Avatar.Root class="h-full w-full">
				<Avatar.Image
					src={$avatar.length > 0
						? URL.createObjectURL($avatar[0])
						: data.user.avatar
							? pb.files.getURL(data.user, data.user.avatar)
							: '/unknown.jpg'}
					alt="user profile"
					class="h-full w-full object-cover object-center"
				/>
				<Avatar.Fallback>ED</Avatar.Fallback>
			</Avatar.Root>

			<Dialog.Trigger
				class={cn(
					buttonVariants({ variant: 'outline', size: 'icon' }),
					'absolute bottom-0 right-0  rounded-full px-4 py-2'
				)}
			>
				<Icon icon="mdi:pencil" class="text-2xl" />
			</Dialog.Trigger>
		</div>

		<Dialog.Content>
			<form
				method="post"
				action="?/file-upload"
				class="flex flex-col gap-3"
				enctype="multipart/form-data"
			>
				<Dialog.Header>
					<Dialog.Title>Ganti avatar anda</Dialog.Title>
				</Dialog.Header>

				<!-- Avatar input field -->
				<Form.Field form={avatarForm} name="avatar">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Avatar</Form.Label>
							<input
								{...props}
								type="file"
								bind:files={$avatar}
								class={cn(
									'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
								)}
							/>
						{/snippet}
					</Form.Control>
					<Form.Description>Hanya menerima jpg, jpeg, png, dan webp</Form.Description>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Avatar input field -->

				<Dialog.Footer>
					<Button type="submit">Submit</Button>
				</Dialog.Footer>
			</form>
		</Dialog.Content>
	</Dialog.Root>
	<!-- End Avatar edit form -->

	<!-- Edit Form -->
	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20">
			<h3 class="text-xl font-bold text-primary">Data pribadi</h3>

			<form method="POST" action="?/update" class="flex flex-col gap-3" use:enhance>
				<!-- Username input field -->
				<Form.Field {form} name="username">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Username</Form.Label>
							<Input
								{...props}
								class="border-slate-300"
								bind:value={$formData.username}
								placeholder="Masukkan username anda"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Username input field -->

				<!-- Email input field -->
				<Form.Field {form} name="email">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Email</Form.Label>
							<Input
								class="border-slate-300"
								value={$formData.email}
								placeholder="Masukkan email anda"
								type="email"
								disabled
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Email input field -->

				<input type="hidden" name="email" bind:value={$formData.email} />

				<!-- Name input field -->
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Nama</Form.Label>
							<Input
								{...props}
								class="border-slate-300"
								bind:value={$formData.name}
								placeholder="Masukkan nama anda"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Name input field -->

				<!-- Bio input field -->
				<Form.Field {form} name="bio">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Bio</Form.Label>
							<Input
								{...props}
								class="border-slate-300"
								bind:value={$formData.bio}
								placeholder="Masukkan bio anda"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Bio input field -->

				<Button type="submit" class="ml-auto sm:w-fit">Submit</Button>
			</form>
		</div>
	</div>
	<!-- End Edit form -->
</div>
