<script lang="ts">
import ArticleImage from '@components/article/image.svelte'
import ArticleList from '@components/article/list.svelte'
import ArticleSection from '@components/article/section.svelte'

import webex2 from '$lib/g/webex-captcha.m.avif'
import webex1 from '$lib/g/webex-captcha.s.avif'

import joining2en from '$lib/g/wojtek-joining.en.m.avif'
import joining1en from '$lib/g/wojtek-joining.en.s.avif'
import joining2pl from '$lib/g/wojtek-joining.pl.m.avif'
import joining1pl from '$lib/g/wojtek-joining.pl.s.avif'
import LL from '@LL'

export let isPolish: boolean
const section = $LL.articles.wojtek.sections[1]
</script>

<ArticleSection title="{section.title()}">
	<p>{@html section.content[0]()}</p>
	<p>{@html section.content[1]()}</p>
	<ArticleList elements="{section.content[2]}" />
	<p>{@html section.content[3]()}</p>
	<p>{@html section.content[4]()}</p>

	<ArticleImage
		width="{400}"
		height="{400}"
		alt="{section.content[6]()}"
		srcset="{webex1} 1x,{webex2} 2x"
		figcaption="{section.content[6]()}"
	/>

	<p>{@html section.content[5]()}</p>

	<ArticleImage
		width="{400}"
		height="{350}"
		alt="{section.content[7]()}"
		srcset="{isPolish ? joining1pl : joining1en} 1x,{isPolish ? joining2pl : joining2en} 2x"
		figcaption="{section.content[7]()}"
	/>
</ArticleSection>
