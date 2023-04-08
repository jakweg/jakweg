<script lang="ts">
import LL, { locale } from '@LL'

import ArticleContent from '@components/article/content.svelte'
import ArticleNav from '@components/article/nav.svelte'
import ArticleStructure from '@components/article/structure.svelte'
import ArticleTitle from '@components/article/title.svelte'

import Section0 from './section0.svelte'
import Section1 from './section1.svelte'
import Section2 from './section2.svelte'
import Section3 from './section3.svelte'
import Section4 from './section4.svelte'
import Section5 from './section5.svelte'

const isPolish = $locale === 'pl'

const which = $LL.articles.wojtek
</script>

<ArticleStructure
	alternativeUrl="{which.altUrl()}"
	title="{which.title()}"
	description="{which.description()}"
	enUrl="sleepy-student"
	plUrl="pl/wojtek">
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
</ArticleStructure>
