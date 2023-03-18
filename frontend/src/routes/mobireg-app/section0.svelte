<script lang="ts">
import ArticleImage from '@components/article/image.svelte'
import ArticleList from '@components/article/list.svelte'
import ArticleSection from '@components/article/section.svelte'

import welcomeImg2 from '$lib/g/mobireg-welcome.m.avif'
import welcomeImg1 from '$lib/g/mobireg-welcome.s.avif'

import appImg2 from '$lib/g/mobireg-official-app.m.avif'
import appImg1 from '$lib/g/mobireg-official-app.s.avif'

import LL from '@LL'

const { content, title } = $LL.articles.mobishit.sections[0]
const ol = content[6] as any
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<ArticleImage
		width="430"
		height="287"
		alt="{content[1]()}"
		srcset="{welcomeImg1} 430w,{welcomeImg2} 860w"
		figcaption="{content[1]()}"
	/>
	<p>{@html content[2]()}</p>

	<p>{@html content[3]()}</p>
	<ArticleImage
		width="540"
		height="266"
		alt="{content[1]()}"
		srcset="{appImg1} 540w,{appImg2} 1080w"
		figcaption="{content[4]()}"
	/>
	<ArticleList title="{content[5]()}" elements="{content[6]}" />

	<p>{@html content[7]()}</p>
</ArticleSection>
