<script lang="ts">
import { onMount } from 'svelte'
import DottedBackground from '../components/dotted-background.svelte'

onMount(() => {
	const { port } = location
	if (port === '' && 'serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js')
	}
})
</script>

<DottedBackground />
<div>
	<slot />
</div>

<style>
:root {
	font-family: 'Fira Sans', Verdana, Geneva, Tahoma, sans-serif;
	color: white;
	background-color: black;
	/* scroll-behavior: smooth; */
}
:global(body) {
	-webkit-tap-highlight-color: transparent;
	margin: 0;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
}
:global(a) {
	color: inherit;
	text-decoration: none;
}
div {
	position: relative;
}
</style>
