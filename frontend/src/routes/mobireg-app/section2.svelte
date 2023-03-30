<script lang="ts">
import ArticleImage from '@components/article/image.svelte'
import ArticleSection from '@components/article/section.svelte'

import img2 from '$lib/g/mobishit-ad.m.avif'
import img1 from '$lib/g/mobishit-ad.s.avif'

import LL from '@LL'

const { content, title } = $LL.articles.mobishit.sections[2]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>

	<ArticleImage
		width="540"
		height="576"
		alt="{content[1]()}"
		srcset="{img1} 540w,{img2} 1080w"
		figcaption="{content[2]()}"
	/>

	<p>{@html content[3]()}</p>
	<p>{@html content[4]()}</p>
	<p>{@html content[5]()}</p>
</ArticleSection>
