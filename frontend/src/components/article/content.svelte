<script lang="ts">
import ArticleContent from './section.svelte'

export let article: any

const length = Array.from(article.sections).length
const sections = [...new Array(length)].map((_, i) => (article.sections as any)[i])
</script>

<main>
	<article>
		<slot>
			{#each sections as s (s.title())}
				<ArticleContent title="{s.title()}" content="{s.content}" />
			{/each}
		</slot>
	</article>
</main>

<style>
main {
	grid-area: content;
	margin-top: 2em;
	display: grid;
	line-height: 1.8em;
}
@media (min-width: 750px) {
	article {
		max-width: calc(100vw - 30ch);
	}
}
@media (min-width: 900px) {
	article {
		width: 600px;
		max-width: 600px;
	}
}
@media (min-width: 1000px) {
	main {
		margin-left: var(--margin-left);
		padding: 0 4ch;
		padding-left: 48px;
	}
}
</style>
