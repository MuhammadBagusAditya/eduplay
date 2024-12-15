<script lang="ts">
	// import data types
	import type { PageData, ActionData } from './$types';

	// import components
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Form from '$lib/components/ui/form';
	import Alert from '../(components)/alert.svelte';

	// import validation library
	import { signInFormSchema as formSchema, type SignInFormSchema } from '$lib/schema/auth';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	// get page data and form data from +page.server.ts
	let { data, form: formAction }: { data: PageData; form: ActionData } = $props();

	// initialize form schema
	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<title>Eduplay - Sign In</title>
</svelte:head>

<form
	method="POST"
	class="flex w-[85%] flex-col gap-3 rounded-xl bg-card/30 px-8 py-4 shadow-lg shadow-slate-900/20 backdrop-blur-lg md:w-[50%] lg:mr-20 lg:w-[35%]"
	use:enhance
>
	<img src="/logo.png" alt="logo app" class="mx-auto w-[12rem]" />

	<h2 class="mb-3 text-2xl font-bold text-slate-800">Masuk sekarang</h2>

	<!-- Alert -->
	{#if formAction?.message}
		<Alert variant={formAction.message.variant ?? 'primary'}>
			{formAction.message.text ?? 'error'}
		</Alert>
	{/if}
	<!-- End Alert -->

	<div class="flex flex-col gap-2">
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
						placeholder="Masukkan email anda"
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
						placeholder="Masukkan password anda"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors class="[&_*]:text-[0.8rem]" />
		</Form.Field>
		<!-- End password input field -->

		<div class="mt-3 flex justify-start">
			<Button class="w-full" type="submit">Submit</Button>
		</div>

		<Separator />

		<!-- Link to sign up new account -->
		<p class="text-slate-700">
			Belum punya akun?
			<a href="/auth/sign-up" class="text-primary">Daftar yuk</a>
		</p>
	</div>
</form>
