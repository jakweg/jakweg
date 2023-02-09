<script lang="ts">
import Bullet from './bullet.svelte'

export let href: string
export let imgSrc: string
export let title: string
export let type: string
export let date: string
export let description: string
</script>

<article>
	<a href="{href}" rel="noreferrer">
		<img src="{imgSrc}" alt="" />
		<div>
			<h2>{title}</h2>
			<aside>{type} <Bullet /> {date}</aside>
			<main>
				<p>{@html description}</p>
				<small>Read More...</small>
			</main>
		</div>
	</a>
</article>

<style>
a {
	color: #ccc;
	display: grid;
	grid-template-columns: 1fr 1.61fr;
	gap: 1ch;
	transition: color 0.3s;
	text-decoration: none;
}
a:hover {
	color: #9eafc3;
}
article {
	padding: 1ch;
	transition: background-color 0.3s;
	border-radius: 1ch;
}
article:hover {
	background-color: #ffffff09;
}
img {
	border-radius: 1ch;
	aspect-ratio: 1 / 1;
	width: 100%;
}
main {
	line-height: 150%;
	opacity: 0.9;
	max-width: 40ch;
}
h2 {
	font-size: 2em;
	font-weight: normal;
	margin: 8px 0;
	color: #fff;
}
aside {
	font-size: 0.8em;
	color: #9eafc3;
}
small {
	font-size: 0.8em;
	color: #9eafc3;
}
</style>
