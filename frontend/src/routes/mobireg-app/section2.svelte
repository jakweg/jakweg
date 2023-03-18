<script lang="ts">
import ArticleSection from '@components/article/section.svelte'
import ArticleImage from '@components/article/image.svelte'

import img2 from '$lib/g/packet-capture.m.avif'
import img1 from '$lib/g/packet-capture.s.avif'

import LL from '@LL'

const { content, title } = $LL.articles.mobishit.sections[2]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>
	<p>{@html content[2]()}</p>

	<p>{@html content[3]()}</p>
	<p>{@html content[4]()}</p>
	<p>{@html content[5]()}</p>
</ArticleSection>
