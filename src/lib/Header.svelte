<script lang="ts">
	// TODO logout
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';

	export let data: PageData;
</script>

<header class="flex items-center justify-between bg-transparent">
	<div class="w-12 h-12 m-2">
		<a href="/">
			<img src={logo} alt="Logo" />
		</a>
	</div>

	<div class="title">Svelte Flash Cards</div>

	<div class="px-4">
		{#if !$page.data.session}
			<a
				href="/login"
				class="px-3 py-1 text-sm font-extrabold bg-white rounded-lg text-center hover:no-underline shadow-lg"
				>Login</a
			>
		{:else}
			<button
				class="px-3 py-1 text-sm font-extrabold bg-white rounded-lg text-center hover:no-underline shadow-lg"
				on:click={handleLogout}>Logout</button
			>
		{/if}
	</div>
</header>

<style>
	.title {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		font-size: 2rem;
		/* position: absolute; */
		text-shadow: -15px 5px 20px #ced0d3;
		/* top: 50%; */
		/* left: 50%; */
		/* transform: translate(-50%, -50%); */
		/* letter-spacing: 0.02em; */
		/* text-align: center; */
		color: #f9f1cc;
		text-shadow: 1px 1px 1px #ffb650, 2px 2px 0px #ffd662, 3px 3px 0px #ff80bf, 4px 4px 0px #ef5097,
			5px 5px 0px #6868ac, 6px 6px 0px #90b1e0;
	}
</style>
