<script lang="ts">
	// import data types
	import type { ActionData, PageData } from './$types';

	// import componenets
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Form from '$lib/components/ui/form';
	import Alert from './../(components)/alert.svelte';

	// import validation library
	import { signUpFormSchema as formSchema, type SignUpFormSchema } from '$lib/schema/auth';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	// import page data and form data from +page.server.ts
	let { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	// initialize form schema
	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<title>Eduplay - Sign Up</title>
</svelte:head>

<form
	method="POST"
	class="flex w-[85%] flex-col gap-3 rounded-xl bg-card/30 px-8 py-4 shadow-lg shadow-slate-900/20 backdrop-blur-lg md:w-[50%] lg:mr-20 lg:w-[35%]"
	use:enhance
>
	<img src="/logo.png" alt="logo app" class="mx-auto w-[12rem]" />

	<h2 class="mb-3 text-2xl font-bold text-slate-800">Daftar yuk</h2>

	<!-- Alert -->
	{#if formAction?.message}
		<Alert variant={formAction.message.variant ?? 'primary'}>
			{formAction.message.text ?? 'error'}
		</Alert>
	{/if}
	<!-- End alert -->

	<div class="flex flex-col gap-3">
		<!-- Username input field -->
		<Form.Field {form} name="username">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Username</Form.Label>
					<Input
						{...props}
						class="border-slate-300 bg-card/20"
						bind:value={$formData.username}
						placeholder="Masukkan username"
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
						{...props}
						class="border-slate-300 bg-card/20"
						bind:value={$formData.email}
						type="email"
						placeholder="Masukkan email"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
		</Form.Field>
		<!-- End Email input field -->

		<!-- Password input field -->
		<Form.Field {form} name="password">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Password</Form.Label>
					<Input
						{...props}
						class="border-slate-300 bg-card/20"
						bind:value={$formData.password}
						type="password"
						placeholder="Masukkan password"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
		</Form.Field>
		<!-- End Password input field -->

		<!-- Confirm Password -->
		<Form.Field {form} name="confirmPassword">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Konfirmasi Password</Form.Label>
					<Input
						{...props}
						class="border-slate-300 bg-card/20"
						bind:value={$formData.confirmPassword}
						type="password"
						placeholder="Konfirmasi password anda"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
		</Form.Field>
		<!-- End Confirm Password -->

		<div class="mt-3 flex justify-start">
			<Button class="w-full" type="submit">Submit</Button>
		</div>

		<Separator />

		<!-- Link to sign in page -->
		<p class="text-slate-700">
			Sudah punya akun?
			<a href="/auth/sign-in" class="text-primary">Masuk sekarang</a>
		</p>
	</div>
</form>
