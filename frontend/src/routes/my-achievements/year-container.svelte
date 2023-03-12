<script lang="ts">
export let year: string //
</script>

<div>
	<h2><span>{year}</span></h2>
	<section>
		<slot />
	</section>
</div>

<style>
div {
	display: grid;
	grid-template-columns: 3em 1fr;
}
h2 {
	justify-self: center;
	text-align: center;
	margin: 0;
	writing-mode: vertical-rl;
	transform: scale(-1);
	color: #777;
	letter-spacing: 2.5px;
	display: grid;
	place-items: center;
}
section {
	min-height: 7em;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
}
@media screen and (min-width: 600px) {
	div {
		grid-template-columns: auto 1fr;
	}
	h2 {
		opacity: 0.7;
		font-size: 2em;
		writing-mode: unset;
		transform: unset;
		padding: 0.6ch;
	}
	div {
		font-size: 1.07em;
	}
}
@media screen and (min-width: 900px) {
	h2 {
		font-size: 2.5em;
		opacity: 0.4;
		transform: scaleY(1.2);
	}
	div {
		font-size: 1.11em;
	}
}
@media screen and (min-width: 1200px) {
	h2 {
		font-size: 4em;
		transform: scaleY(1.3);
	}
	div {
		font-size: 1.17em;
	}
}
@media screen and (min-width: 1500px) {
	h2 {
		font-size: 4.7em;
		transform: scaleY(1.5);
	}
	div {
		font-size: 1.22em;
	}
}
/* div {
	display: grid;
	grid-template-columns: var(--left-width) var(--line-width) 1fr;
}
span {
	height: 1px;
	width: 100%;
	background-color: #aaa;
	place-self: center;
	margin-top: 1em;
} */
</style>
