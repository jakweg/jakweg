<script lang="ts">
export let width: number | string
export let height: number | string
export let alt: string
export let srcset: string
export let figcaption: string

// const href = srcset?.match(/(([\/\w\.-]+)\.(avif|webp))/g)?.pop()
</script>

<!-- <a href="{href}"> -->
<figure>
	<img width="{width}" height="{height}" alt="{alt}" srcset="{srcset}" />
	<figcaption>{figcaption}</figcaption>
</figure>

<!-- </a> -->
<style>
/* a {
	display: contents;
} */
figure {
	margin: 1.4em 0;
}
figcaption {
	color: #aaa;
	font-size: 0.8em;
	line-height: normal;
}
img {
	height: auto;
}

@media (max-width: 800px) {
	figure {
		margin: 0;
		text-align: center;
	}
	img {
		width: min(calc(100vw - 6ch), 400px);
	}
}
</style>
