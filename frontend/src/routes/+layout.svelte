<script lang="ts">
import { afterNavigate, beforeNavigate } from '$app/navigation'
import { setLocale } from '@LL'
import DottedBackground from '@components/dotted-background.svelte'
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
	const themeTag = document.querySelector('meta[name="theme-color"]')
	if (themeTag) {
		const cloned = themeTag.cloneNode() as HTMLMetaElement
		cloned.setAttribute('data-default', '')
		document.head?.appendChild(cloned)
	}
})
afterNavigate(() => {
	setTimeout(() => {
		document.querySelector('meta[name="theme-color"][data-default]')?.remove()
	}, 100)
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
