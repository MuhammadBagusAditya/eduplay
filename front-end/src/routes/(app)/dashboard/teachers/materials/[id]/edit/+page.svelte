<script lang="ts">
	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	// import library
	import { superForm } from 'sveltekit-superforms';

	// import data types
	import type { PageData, ActionData } from './$types';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { editMaterialSchema } from '$lib/schema/teachers/materials';

	// get props
	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	// initialize form validation
	const form = superForm(data.form, {
		validators: zodClient(editMaterialSchema),
		resetForm: false
	});

	const { form: formData, enhance } = form;

	// check message
	$effect(() => {
		if (formAction?.message) {
			if (formAction?.message.variant === 'primary') {
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
	<title>Eduplay - Ubah {data.material.name}</title>
</svelte:head>

<main class="grid grid-cols-1 gap-6">
	<h1 class="text-3xl font-bold capitalize text-slate-800">
		{data.material.name}
	</h1>

	<Breadcrumb.Root>
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
				<Breadcrumb.Link
					href={'/dashboard/teachers/materials/' + data.material.id}
					class="capitalize">{data.material.name}</Breadcrumb.Link
				>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />

			<Breadcrumb.Item>
				<Breadcrumb.Page>Edit</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<!-- Edit Form -->
	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20">
			<h3 class="text-xl font-bold text-primary">Data materi</h3>

			<form method="POST" class="flex flex-col gap-3" use:enhance>
				<!-- Name input field -->
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Nama</Form.Label>
							<Input
								{...props}
								class="border-slate-300"
								bind:value={$formData.name}
								placeholder="Masukkan nama materi"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Name input field -->

				<!-- Description input field -->
				<Form.Field {form} name="description">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Deskripsi</Form.Label>
							<Input
								{...props}
								class="border-slate-300"
								bind:value={$formData.description}
								placeholder="Masukkan deskripsi materi"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Description input field -->

				<div class="flex justify-end gap-3">
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	</div>
	<!-- End Edit form -->
</main>
