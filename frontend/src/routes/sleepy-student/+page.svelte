<script lang="ts">
import ArticleContent from '@components/article/content.svelte'
import ArticleNav from '@components/article/nav.svelte'
import ArticleTitle from '@components/article/title.svelte'
import TopNavigation from '@components/top-navigation.svelte'
import LL, { locale } from '@LL'

import Section0 from './section0.svelte'
import Section1 from './section1.svelte'
import Section2 from './section2.svelte'
import Section3 from './section3.svelte'
import Section4 from './section4.svelte'
import Section5 from './section5.svelte'

const isPolish = $locale === 'pl'

const which = $LL.articles.wojtek
</script>

<TopNavigation alternativeUrl="{which.altUrl()}" />

<div class="content">
	<ArticleTitle title="{which.heading()}" />
	<ArticleNav article="{which}" />
	<ArticleContent article="{which}">
		<Section0 isPolish="{isPolish}" />

		<Section1 isPolish="{isPolish}" />

		<Section2 />

		<Section3 />

		<Section4 />

		<Section5 />
	</ArticleContent>
</div>
<svelte:head>
	<title>{which.title()}</title>
	<meta name="description" content="{which.description()}" />

	<link rel="alternate" href="https://jakub.wegrzyn.dev/pl/wojtek/" hreflang="pl" />
	<link rel="alternate" href="https://jakub.wegrzyn.dev/sleepy-student/" hreflang="en" />
</svelte:head>

<style>
.content {
	display: grid;
	grid-template-areas: 'header' 'blockquote' 'content' 'nav';
}
@media (min-width: 800px) {
	.content {
		grid-template-columns: 1fr auto;
		grid-template-areas: 'header header' 'blockquote blockquote' 'content nav';
	}
}
</style>
