<script lang="ts">
	export let question: string;
	export let answer: string;
	export let showCardBack: boolean;
</script>

<div class="flip-box-front bg-orange-300">
	<h1>{question}</h1>
</div>

<div class="flip-box-back bg-orange-300" class:conceal-answer={showCardBack}>
	<h1>{answer}</h1>
</div>

<style>
	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
		box-shadow: -1px 1px 3px black;
		border-radius: 5%;
		border: none;
	}

	.flip-box-front {
		align-items: center;
		color: black;
		display: flex;
		justify-content: center;
	}

	.flip-box-back {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.3rem;
		transform: rotateY(180deg);
	}
</style>
