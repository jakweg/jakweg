<script lang="ts">
import type { TechnologyType } from '$lib/technology-type'
import Bullet from '../bullet.svelte'
import TechnologyTag from './technology-tag.svelte'

export let href: string
export let imgSrc: string
export let title: string
export let type: string
export let date: string
export let description: string
export let imgSrc2x: string
export let techStack: TechnologyType[] = []
export let highPriority = false
</script>

<article>
	<a
		href="{href}"
		target="{href.startsWith('/') ? undefined : '_blank'}"
		rel="{href.startsWith('/') ? undefined : 'noreferrer'}"
	>
		<img
			fetchpriority="{highPriority ? 'high' : 'low'}"
			alt="{title}"
			sizes="(max-width: 900px) 150px,200px"
			srcset="{imgSrc} 200w, {imgSrc2x} 300w"
		/>
		<div class="title">
			<h2>{title}</h2>
		</div>
		<aside>
			{type}
			<Bullet />
			{date}
		</aside>
		<aside class="tech">
			<slot name="tech">
				{#each techStack as tech (tech)}
					<TechnologyTag type="{tech}" />
				{/each}
			</slot>
		</aside>
		<main>
			<p>{@html description} </p>
		</main>
	</a>
</article>

<style>
a {
	color: #ccc;
	display: grid;
	grid-template-areas: 'img title' 'img more' 'img tech' 'description description';
	grid-template-columns: calc(150px + 1ch) auto;
	grid-template-rows: auto auto auto 1fr;
	align-items: center;
	transition: color 0.3s;
	text-decoration: none;
}
a:hover {
	color: #9eafc3;
}
article {
	transition: background-color 0.3s, border-color 0.3s;
	border-radius: 1ch;
	border: 1px solid transparent;
}
article:hover {
	background-color: #eeeeee11;
}
img {
	border-radius: 1ch;
	aspect-ratio: 1 / 1;
	width: 150px;
	grid-area: img;
}
.title {
	grid-area: title;
}
p,
.tech {
	margin: 0;
}
.tech {
	grid-area: tech;
	margin: 8px 0;
	display: flex;
	flex-flow: row wrap;
	gap: 0.7ch;
	font-size: 0.9em;
}
main {
	line-height: 150%;
	opacity: 0.9;
	padding-right: 1ch;
	grid-area: description;
	align-self: start;
	margin: 0.5ch;
}
@media (min-width: 950px) {
	img {
		width: 200px;
	}
	a {
		grid-template-columns: calc(200px + 1ch) 1fr;
		grid-template-areas: 'img title' 'img more' 'img description' '. description' 'tech tech';
	}
	.tech {
		margin: 8px;
	}
	main {
		margin: 0;
	}
}
@media (min-width: 1150px) {
	a {
		grid-template-areas: 'img title' 'img more' 'img tech' 'img description';
	}
	.tech {
		margin: 8px 0;
	}
}
h2 {
	font-size: 2em;
	font-weight: normal;
	letter-spacing: 1px;
	margin: 2px 0;
	color: #fff;
}
aside:not(.tech) {
	margin: 0.5em 0;
	font-size: 0.8em;
	color: #9eafc3;
	grid-area: more;
}
</style>
