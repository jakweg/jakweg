<script lang="ts">
import ArticleContent from './section.svelte'

export let article: any

const length = Array.from(article.sections).length
const sections = [...new Array(length)].map((_, i) => (article.sections as any)[i])
</script>

<blockquote>{@html article.quote()}</blockquote>
<div class="content">
	<main>
		<article>
			<slot>
				{#each sections as s (s.title())}
					<ArticleContent title="{s.title()}" content="{s.content}" />
				{/each}
			</slot>
		</article>
	</main>
</div>

<style>
.content {
	grid-area: content;
	padding: 0 2ch;
}
@media (min-width: 500px) {
	.content {
		padding: 0 4ch;
	}
}
main {
	display: grid;
	line-height: 1.8em;
}
blockquote {
	grid-area: blockquote;
	font-style: italic;
	place-self: center;
	width: auto;
	border-radius: 1ch;
	color: #ddd;
	background-color: #8e8ef633;
	border: 2px solid #8e8ef6bb;
	padding: 1ch 2ch;
}
</style>
