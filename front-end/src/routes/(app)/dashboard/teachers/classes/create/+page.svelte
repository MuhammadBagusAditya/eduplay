<script lang="ts">
	// import components
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	// import library
	import { fileProxy, superForm } from 'sveltekit-superforms';

	// import data types
	import type { PageData, ActionData } from './$types';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { days, getDay } from '$lib/time';

	// get props
	const { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	// initialize form validation
	const form = superForm(data.form);

	const { form: formData, enhance } = form;

	const thumbnail = fileProxy(form, 'thumbnail');

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
	<title>Eduplay - Tambah kelas baru</title>
</svelte:head>

<main class="grid grid-cols-1 gap-6">
	<h1 class="text-3xl font-bold text-slate-800">Tambah Kelas Baru</h1>

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
				<Breadcrumb.Page>Tambah</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<!-- Edit Form -->
	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20">
			<h3 class="text-xl font-bold text-primary">Data kelas baru</h3>

			<form method="POST" class="flex flex-col gap-3" enctype="multipart/form-data" use:enhance>
				<!-- Name input field -->
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Nama</Form.Label>
							<Input
								{...props}
								class="border-slate-300"
								bind:value={$formData.name}
								placeholder="Masukkan nama kelas"
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
								placeholder="Masukkan deskripsi kelas"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Description input field -->

				<!-- Schedules select field -->
				<Form.Field {form} name="schedules">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Jadwal mingguan</Form.Label>
							<Select.Root type="multiple" bind:value={$formData.schedules} name={props.name}>
								<Select.Trigger {...props}>
									{$formData.schedules.length > 0
										? $formData.schedules
												.sort()
												.map((v: string) => getDay(v))
												.join(', ')
										: 'Pilih jadwal untuk kelas'}
								</Select.Trigger>

								<Select.Content>
									{#each days as day, i}
										<Select.Item value={`${i + 1}`} label={day} />
									{/each}
								</Select.Content>
							</Select.Root>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Schedules select field -->

				<!-- Thumbnail input field -->
				<Form.Field {form} name="thumbnail">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Thumbnail</Form.Label>
							<input
								{...props}
								type="file"
								bind:files={$thumbnail}
								class={cn(
									'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
								)}
							/>
						{/snippet}
					</Form.Control>
					<Form.Description>Hanya menerima jpg, jpeg, png, dan webp</Form.Description>
					<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
				</Form.Field>
				<!-- End Thumbnail input field -->

				<div class="flex flex-col gap-3">
					<Label>Preview</Label>

					{#if $thumbnail.length > 0}
						<img
							src={URL.createObjectURL($thumbnail[0])}
							alt="Preview thumbnail"
							class="aspect-video w-full max-w-[20rem] rounded-lg border border-slate-300 object-cover object-center"
						/>
					{:else}
						<div class="aspect-video w-full max-w-[20rem] rounded-lg border border-slate-300"></div>
					{/if}
				</div>

				<Button type="submit" class="ml-auto sm:w-fit">Submit</Button>
			</form>
		</div>
	</div>
	<!-- End Edit form -->
</main>
