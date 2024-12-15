<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Separator } from '$lib/components/ui/separator';

	import type { LayoutData } from './$types';
	import Icon from '@iconify/svelte';

	const { data }: { data: LayoutData } = $props();

	let scrollY = $state(0);

	$effect(() => {
		function onScroll() {
			scrollY = window.scrollY;
		}

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<title>Eduplay</title>
</svelte:head>

<Sheet.Root>
	<div class="bg-primary pb-8 pt-20">
		<nav
			class={cn(
				'fixed left-0 top-0 z-[2] w-full py-6 transition-all [transition-property:_background-color]',
				scrollY > 0
					? 'border-b border-slate-300 bg-white text-slate-700'
					: 'bg-transparent text-primary-foreground'
			)}
		>
			<div class="container flex items-center justify-between gap-6">
				<div class="flex items-center gap-8">
					<a href="/" class="text-2xl font-bold">EDUPLAY</a>

					<div class="hidden items-center gap-3 lg:flex">
						<a href="/" class="">Beranda</a>
						<a href="#about" class="">Tentang Kami</a>
						<a href="#vision" class="">Visi Misi</a>
						<a href="#features" class="">Fitur Unggulan</a>
					</div>
				</div>

				<div class="hidden items-center gap-3 lg:flex">
					<Button
						variant="default"
						class="rounded-full text-primary-foreground"
						href="/auth/sign-in">Masuk</Button
					>

					<Button variant="outline" class="rounded-full text-slate-700" href="/auth/sign-up"
						>Daftar</Button
					>
				</div>

				<Sheet.Trigger class={cn(buttonVariants({ variant: 'ghost' }), 'inline-flex lg:hidden')}>
					<Icon icon="mdi:menu" />
				</Sheet.Trigger>
			</div>
		</nav>

		<div
			class="container flex grid-cols-1 flex-col-reverse items-center gap-8 md:grid md:grid-cols-2 xl:grid-cols-[60%,_1fr]"
		>
			<div class="flex flex-col gap-5">
				<h1 class="text-center text-3xl font-bold text-primary-foreground md:text-left md:text-4xl">
					Belajar jadi menyenangkan dan
					<br class="hidden md:block" />mudah untuk semua!
				</h1>

				<p class="text-center text-primary-foreground md:text-left">
					Platform e-learning untuk semua jenjang pendidikan. Akses materi, tugas, dan komunitas
					belajar dari mana saja.
				</p>
			</div>

			<img src="/jumbotron.svg" alt="jumbotron" />
		</div>
	</div>

	<div id="about" class="py-12">
		<h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Tentang Kami</h2>

		<div class="container flex flex-col gap-6 md:grid md:grid-cols-[40%,_1fr] lg:grid-cols-2">
			<img src="/about.svg" alt="about" />

			<p class="text-justify text-slate-700">
				Kami adalah platform pembelajaran inovatif yang dirancang untuk menyederhanakan proses
				belajar-mengajar. Dengan Eduplay, guru dapat dengan mudah membagikan materi, memberikan
				tugas, dan membuat kuis online. Sementara itu, siswa dapat mengakses materi pembelajaran
				kapan saja dan di mana saja. Kami berkomitmen untuk menciptakan pengalaman belajar yang
				lebih efektif dan menyenangkan bagi semua.
			</p>
		</div>
	</div>

	<div id="vision" class="bg-primary/10 py-12">
		<h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Visi Misi</h2>

		<div class="container grid grid-cols-1 gap-6 lg:grid-cols-2">
			<div class="flex grid-cols-2 flex-col gap-4 md:grid lg:flex">
				<Card.Root>
					<Card.Content>
						<h3 class="mb-4 text-xl font-semibold text-primary">Visi</h3>

						<p class="text-slate-700">
							Menjadi platform pembelajaran yang paling efisien dan mudah digunakan, menghubungkan
							guru dan siswa dalam proses belajar-mengajar yang efektif.
						</p>
					</Card.Content>
				</Card.Root>

				<Card.Root>
					<Card.Content>
						<h3 class="mb-4 text-xl font-semibold text-primary">Misi</h3>
						<ul class="list-disc space-y-2 pl-4 text-slate-700">
							<li>Menyederhanakan proses pengiriman materi dan tugas bagi guru.</li>
							<li>
								Memudahkan siswa dalam mengakses materi pembelajaran kapan saja dan di mana saja.
							</li>
							<li>
								Meningkatkan kualitas pembelajaran dengan menyediakan berbagai fitur pendukung,
								seperti kuis online.
							</li>
						</ul>
					</Card.Content>
				</Card.Root>
			</div>

			<img src="/visi.svg" alt="about" class="row-start-1 mx-auto lg:col-start-2 lg:ml-auto" />
		</div>
	</div>

	<div id="features" class="py-12">
		<h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Fitur Unggulan</h2>

		<div class="container grid grid-cols-1 gap-6 lg:grid-cols-2">
			<Card.Root>
				<Card.Content>
					<Icon icon="mdi:currency-usd-off" class="mb-3 text-6xl text-emerald-600" />

					<h3 class="mb-4 text-xl font-semibold text-emerald-600">Platform gratis</h3>

					<p class="text-slate-700">
						Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Content>
					<Icon icon="mdi:check" class="mb-3 text-6xl text-blue-600" />

					<h3 class="mb-4 text-xl font-semibold text-blue-600">Mudah digunakan</h3>

					<p class="text-slate-700">
						Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Content>
					<Icon icon="mdi:access-point" class="mb-3 text-6xl text-red-600" />

					<h3 class="mb-4 text-xl font-semibold text-red-600">Dapat diakses dimana saja</h3>

					<p class="text-slate-700">
						Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Content>
					<Icon icon="mdi:puzzle" class="mb-3 text-6xl text-yellow-600" />

					<h3 class="mb-4 text-xl font-semibold text-yellow-600">Integrasi dalam satu genggaman</h3>

					<p class="text-slate-700">
						Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.
					</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<div class="bg-primary/10 py-12">
		<div class="container">
			<h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
				Semua kegiatan belajar-mengajar dalam satu genggaman
			</h2>

			<div class="flex justify-center">
				<Button class="rounded-full px-12" href={data.user ? '/dashboard' : '/auth/sign-in'}
					>Ayo bergabung sekarang</Button
				>
			</div>
		</div>
	</div>

	<footer class="bg-slate-800 py-3">
		<p class="text-center text-slate-200">Made with ❤️ By Eduplay</p>
	</footer>

	<Sheet.Content side="left">
		<Sheet.Header>
			<Sheet.Title class="text-left">Menu</Sheet.Title>
		</Sheet.Header>

		<Separator class="my-4" />

		<div class="flex flex-col gap-6">
			<div class="flex flex-1 flex-col gap-3">
				<a href="/">Beranda</a>
				<a href="#about">Tentang Kami</a>
				<a href="#vision">Visi Misi</a>
				<a href="#features">Fitur Unggulan</a>
			</div>

			<Separator />

			<div class="flex flex-col gap-3">
				{#if data.user}
					<Button href="/dashboard">Dashboard</Button>
				{:else}
					<Button variant="outline" href="/auth/sign-in">Masuk</Button>
					<Button href="/auth-sign-up">Daftar</Button>
				{/if}
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
