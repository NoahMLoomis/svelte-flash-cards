<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let newSubject = '';
	let newQuiz = '';
	let show = true;

	$: closeEnough = () => {
		if (newSubject == '') {
			return [];
		}
		var reg = new RegExp(newSubject.toLowerCase());
		const filtered: string[] | undefined = data.subjects?.filter((term) => {
			if (term.toLowerCase().match(reg)) {
				return term;
			}
		});
		return filtered ?? [];
	};

	function handleClick(subject: string) {
		newSubject = subject;
		show = false;
	}
</script>

<main class="flex flex-col h-screen">
	<h1 class="underline">Create Quiz</h1>
	<div class="grid grid-cols-12">
		<div class="sm:col-span-4 col-span-12">
			<div class="relative mt-8 flex mx-4">
				<input
					id="subject"
					bind:value={newSubject}
					on:keypress={() => (show = true)}
					class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=""
				/>
				<label
					for="subject"
					class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
					>Subject</label
				>
			</div>
			{#if closeEnough().length > 0 && show}
				<div
					id="dropdown"
					class="z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
				>
					<p class="ml-4 py-2 text-xs text-opacity-80">Previous Subjects</p>
					<ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
						{#each closeEnough() as subject}
							<li
								class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
								on:click={() => handleClick(subject)}
								on:keypress={() => (newSubject = subject)}
							>
								{subject}
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			<div class="mt-8 relative flex mx-4">
				<input
					id="quiz"
					bind:value={newSubject}
					on:keypress={() => (show = true)}
					class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=""
				/>
				<label
					for="quiz"
					class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
					>Quiz name</label
				>
			</div>
			<div class="mt-8 relative flex mx-4">
				<textarea
					id="desc"
					bind:value={newQuiz}
					class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=""
				/>
				<label
					for="desc"
					class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
					>Quiz Description</label
				>
			</div>
		</div>
		<div class="sm:col-span-8 col-span-12">d</div>
	</div>
</main>
