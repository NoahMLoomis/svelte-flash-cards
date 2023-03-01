<script>
	import Flashcard from '$lib/Flashcard.svelte';
	const flashcards = [
		{
			question: 'Question 1',
			answer: 'Answer 1'
		},
		{
			question: 'Question 2',
			answer: 'Answer 2'
		},
		{
			question: 'Question 3',
			answer: 'Answer 3'
		},
		{
			question: 'Question 4',
			answer: 'Answer 4'
		}
	];

	let flashcardIndex = 0;
	$: answer = flashcards[flashcardIndex].answer;
	$: question = flashcards[flashcardIndex].question;

	let showCardBack = false;
	const toggleShowBack = () => (showCardBack = !showCardBack);

	const prevCard = () => {
		showCardBack = false;
		if (flashcardIndex === 0) {
			flashcardIndex = flashcards.length - 1;
		} else {
			flashcardIndex -= 1;
		}
	};

	const nextCard = () => {
		showCardBack = false;
		if (flashcardIndex === flashcards.length - 1) {
			flashcardIndex = 0;
		} else {
			flashcardIndex += 1;
		}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<Flashcard {question} {answer} {showCardBack} />
		</div>
	</div>
	<div class="flex-1">
		<div>
			<button on:click={prevCard}>&#8592;</button>

			<button on:click={toggleShowBack}>
				{showCardBack ? 'Hide Answer' : 'Show Answer'}
			</button>

			<button on:click={nextCard}>&#8594;</button>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15%;
		height: 100vh;
	}

	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 400px;
		height: 300px;
		/* 		border: 1px solid #ddd; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
</style>
