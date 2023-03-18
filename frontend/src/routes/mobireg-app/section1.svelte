<script lang="ts">
import ArticleImage from '@components/article/image.svelte'
import ArticleSection from '@components/article/section.svelte'

import img2 from '$lib/g/packet-capture.m.avif'
import img1 from '$lib/g/packet-capture.s.avif'

import LL from '@LL'

const { content, title } = $LL.articles.mobishit.sections[1]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>
	<p>{@html content[2]()}</p>
	<p>{@html content[3]()}</p>

	<ArticleImage
		width="535"
		height="610"
		alt="{content[4]()}"
		srcset="{img1} 535w,{img2} 1070w"
		figcaption="{content[4]()}"
	/>

	<p>{@html content[5]()}</p>
	<p>{@html content[6]()}</p>
</ArticleSection>
