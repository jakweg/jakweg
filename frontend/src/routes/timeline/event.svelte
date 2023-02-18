<script lang="ts">
import wallpaperGenerator1 from '$lib/g/wallpaperGenerator.s.webp'

export let title: string
export let content: string //
</script>

<section>
	<div>
		<span class="circle"></span>
		<span class="line"></span>
	</div>
	<article>
		<img src="{wallpaperGenerator1}" width="100" alt="" />
		<h3>{title}</h3>
		<p>{content}</p>
	</article>
</section>

<style>
div {
	position: relative;
	display: grid;
	place-items: center;
	grid-template-areas: 'a';
}
div > * {
	grid-area: a;
}
.circle {
	margin-top: 2ch;
	align-self: flex-start;
	width: 2ch;
	border-radius: 50%;
	aspect-ratio: 1;
	background-color: red;
}
.line {
	height: 100%;
	width: 0.3ch;
	background-color: red;
}
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
