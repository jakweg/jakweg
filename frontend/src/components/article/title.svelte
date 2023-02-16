<script lang="ts">
export let title: string //
</script>

<div class="content">
	<header>
		<h1>{title}</h1>
	</header>
</div>

<style>
.content {
	grid-area: header;
	padding: 0 4ch;
}
header {
	display: grid;
	place-items: center;
	min-height: 30vh;
}
h1 {
	font-weight: lighter;
	letter-spacing: 1px;
}
@media (min-width: 1000px) {
	h1 {
		font-size: 3em;
	}
}
</style>
