<script lang="ts">
import DottedBackground from '@components/dotted-background.svelte'
import { onMount } from 'svelte'

onMount(() => {
	if (location.port === '') {
		navigator.serviceWorker?.register('/sw.js').catch(() => void 0)
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
	background-color: #13182a;
	scroll-behavior: smooth;
	color-scheme: light dark;
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
