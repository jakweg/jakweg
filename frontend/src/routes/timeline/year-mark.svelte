<script lang="ts">
export let year: string //
</script>

<div>
	<span></span>
	<h2>{year}</h2>
	<span></span>
</div>

<style>
div {
	display: grid;
	grid-template-columns: minmax(1ch, 1fr) auto minmax(0.4ch, 1ch);
	gap: 2px;
	place-items: center;
	padding-top: 1em;
}
h2 {
	text-align: center;
	font-weight: bolder;
	font-variant-numeric: tabular-nums;
	margin: 0;
	font-style: italic;
}
span {
	height: 1px;
	width: 100%;
	background-color: #aaa;
}
</style>
