<script lang="ts">
import ArticleSection from '@components/article/section.svelte'

import meme2en from '$lib/g/wojtek-meme.en.m.avif'
import meme1en from '$lib/g/wojtek-meme.en.s.avif'
import meme2pl from '$lib/g/wojtek-meme.pl.m.avif'
import meme1pl from '$lib/g/wojtek-meme.pl.s.avif'
import LL from '@LL'

export let isPolish: boolean
const section = $LL.articles.wojtek.sections[0]
</script>

<ArticleSection title="{section.title()}">
	<p>{@html section.content[0]()}</p>
	<p>{@html section.content[1]()}</p>
	<p>{@html section.content[2]()}</p>
	<p>{@html section.content[3]()}</p>
	<p>{@html section.content[4]()}</p>
	<img
		srcset="{isPolish ? meme1pl : meme1en} 1x,{isPolish ? meme2pl : meme2en} 2x"
		width="290"
		height="240"
		alt="{section.content[6]()}"
	/>
	<p>{@html section.content[5]()}</p>
</ArticleSection>
