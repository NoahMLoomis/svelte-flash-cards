<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex flex-col items-center mt-16 h-screen">
	<div class="inline">
		Create a <a class="underline hover:opacity-80" href="/quiz/create">New Quiz</a> to get started
	</div>
</main>
