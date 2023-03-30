<script lang="ts">
import ArticleImage from '@components/article/image.svelte'
import ArticleSection from '@components/article/section.svelte'

import LL from '@LL'

import sql2 from '$lib/g/mobishit-sql.m.avif'
import sql1 from '$lib/g/mobishit-sql.s.avif'

const { content, title } = $LL.articles.mobishit.sections[5]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>
	<p>{@html content[2]()}</p>
	<p>{@html content[3]()}</p>
	<p>{@html content[4]()}</p>

	<ArticleImage
		width="600"
		height="281"
		alt="{content[1]()}"
		srcset="{sql1} 600w,{sql2} 1200w"
		figcaption="{content[5]()}"
	/>
</ArticleSection>
