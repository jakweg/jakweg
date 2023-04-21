<script lang="ts">
import LL from '@LL'

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
import Section6 from './section6.svelte'

const which = $LL.articles.mobishit
</script>

<ArticleStructure
	title="{which.title()}"
	description="{which.description()}"
	alternativeUrl="{which.altUrl()}"
	enUrl="mobireg-app"
	plUrl="mobishit"
>
	<ArticleTitle title="{which.heading()}" />
	<ArticleNav
		article="{which}"
		techStack="{['kotlin', 'android', 'firebase', 'sql', 'linux', 'py']}"
	/>
	<ArticleContent article="{which}">
		<Section0 />
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section5 />
		<Section6 />
	</ArticleContent>
</ArticleStructure>
