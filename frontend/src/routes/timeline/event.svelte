<script lang="ts">
import wallpaperGenerator1 from '$lib/g/wallpaperGenerator.s.webp'
import LineEvent from './line-event.svelte'

export let title: string
export let content: string //
</script>

<section>
	<LineEvent />

	<article>
		<img src="{wallpaperGenerator1}" width="100" alt="" />
		<h3>{title}</h3>
		<p>{content}</p>
	</article>
</section>

<style>
section {
	display: grid;
	grid-template-columns: 4ch auto;
}
article {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-areas: 'img title' 'img content';
	gap: 1ch;
}
article > img {
	grid-area: img;
}
p {
	margin: 0;
}
</style>
