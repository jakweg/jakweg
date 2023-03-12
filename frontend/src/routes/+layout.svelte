<script lang="ts">
import { beforeNavigate } from '$app/navigation'
import DottedBackground from '@components/dotted-background.svelte'
import { setLocale } from '@LL'
import { onMount } from 'svelte'
import type { LayoutData } from './$types'

export let data: LayoutData
let currentLocale: string = ''
onMount(() => {
	if (location.port === '') {
		navigator.serviceWorker?.register('/sw.js').catch(() => void 0)
	}
})

$: {
	setLocale(data.locale)
	currentLocale = data.locale
}
beforeNavigate(nav => {
	const id = nav.to?.route.id
	if (!id) return
	const newLocale = id?.startsWith('/pl/') ? 'pl' : 'en'

	if (newLocale !== currentLocale) {
		setLocale(newLocale)
		document?.querySelector('html')?.setAttribute('lang', newLocale)
		currentLocale = newLocale
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
	background-color: #18181c;
	scroll-behavior: smooth;
	color-scheme: light dark;
}
:global(body) {
	-webkit-tap-highlight-color: transparent;
	margin: 0;
	position: relative;
	min-height: 100svh;
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
