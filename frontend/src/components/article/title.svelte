<script lang="ts">
export let title: string //
</script>

<div>
	<span></span>
	<header>
		<h1>{title}</h1>
	</header>
</div>

<style>
div {
	background-color: #00294d;
	grid-area: header;
	padding: 0 4ch;
	padding: 16px;
	clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
}
span {
	display: block;
	height: 4em;
}
header {
	display: grid;
	place-items: center;
	min-height: 60svh;
	text-align: left;
	max-width: 90ch;
	margin-left: var(--margin-left);
}
h1 {
	color: #ff7171;
	letter-spacing: 1px;
	font-size: 2.5em;
}
@media (min-width: 800px) {
	h1 {
		font-weight: normal;
		font-size: 2.9em;
	}
}
@media (min-width: 1100px) {
	h1 {
		font-size: 3.8em;
	}
}
</style>
