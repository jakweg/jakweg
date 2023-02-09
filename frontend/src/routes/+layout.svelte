<script>
	import DottedBackground from '../components/dotted-background.svelte';
</script>

<DottedBackground />
<div><slot /></div>

<style>
	:root {
		font-family: 'Fira Sans', Verdana, Geneva, Tahoma, sans-serif;
		color: white;
		background-color: black;
	}
	:global(body) {
		-webkit-tap-highlight-color: transparent;
		margin: 0;
		position: relative;
		min-height: 100vh;
		box-sizing: border-box;
	}
	:global(a) {
		color: #eee;
		text-decoration: none;
	}
	div {
		position: relative;
	}
</style>
