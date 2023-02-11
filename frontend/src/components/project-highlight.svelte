<script lang="ts">
import LL from '../i18n/i18n-svelte'
import Bullet from './bullet.svelte'

export let href: string
export let imgSrc: string
export let title: string
export let type: string
export let date: string
export let description: string
export let imgSrc2x: string
export let color: string

const hoverOpacity = '11'
const borderOpacity = '99'
</script>

<article style:--hc="{color + hoverOpacity}" style:--bc="{color + borderOpacity}">
	<a href="{href}" rel="noreferrer">
		<img srcset="{imgSrc}, {imgSrc2x} 2x" src="{imgSrc2x}" alt="{title}" />
		<div>
			<h2>{title}</h2>
			<aside>{type} <Bullet /> {date}</aside>
			<main>
				<p>{@html description}</p>
				<small>{$LL.readMore()}</small>
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
	transition: background-color 0.3s, border-color 0.3s;
	border-radius: 1ch;
	border: 1px solid transparent;
}
article:hover {
	background-color: var(--hc);
	border-color: var(--bc);
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
