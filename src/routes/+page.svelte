<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	let ready = false;
	onMount(() => {
		setTimeout(() => (ready = true), 200);
	});
	console.log(data)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex">
	{#if data.session}
		<p>Welcome {data.session.user.email}</p>
	{/if}
	{#if ready}
		<div class="text-8xl mt-20 font-semibold" in:fade>
			Paper Flash Cards
			<p class="relative w-min group">
				<span class="">Suck</span>
				<span
					class="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full transition-all "
				/>
			</p>
		</div>
	{/if}
</main>

<style>
</style>
