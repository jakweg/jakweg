<script lang="ts">
export let width: number | string
export let height: number | string
export let alt: string
export let srcset: string
export let figcaption: string

const href = srcset?.match(/(([\/\w\.-]+)\.(avif|webp))/g)?.pop()
</script>

<a href="{href}">
	<figure>
		<img width="{width}" height="{height}" alt="{alt}" srcset="{srcset}" />
		<figcaption>{@html figcaption}</figcaption>
	</figure>
</a>

<style>
a {
	display: contents;
}
figure {
	margin: 0;
	text-align: center;
}
figcaption {
	color: #aaa;
	font-size: 0.8em;
	line-height: normal;
}
img {
	height: auto;
	max-width: calc(100vw - 12ch);
}
@media (min-width: 750px) {
	img {
		max-width: min(calc(100vw - 6ch), 400px);
	}
}
@media (min-width: 900px) {
	figure {
		margin: 1.4em 0;
	}
	img {
		max-width: min(calc(100vw - 6ch), 600px);
	}
}
</style>
