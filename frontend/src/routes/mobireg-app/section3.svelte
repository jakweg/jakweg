<script lang="ts">
import ArticleImage from '@components/article/image.svelte'
import ArticleSection from '@components/article/section.svelte'

import progress2 from '$lib/g/mobishit-grade.m.avif'
import progress1 from '$lib/g/mobishit-grade.s.avif'

import login2 from '$lib/g/mobishit-login.m.avif'
import login1 from '$lib/g/mobishit-login.s.avif'

import functions2 from '$lib/g/mobishit-functions.m.avif'
import functions1 from '$lib/g/mobishit-functions.s.avif'

import LL from '@LL'

const { content, title } = $LL.articles.mobishit.sections[3]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>
	<ArticleImage
		width="540"
		height="388"
		alt="{content[1]()}"
		srcset="{login1} 540w,{login2} 1080w"
		figcaption="{content[2]()}"
	/>

	<p>{@html content[3]()}</p>

	<ArticleImage
		width="580"
		height="335"
		alt="{content[1]()}"
		srcset="{progress1} 580w,{progress2} 1160w"
		figcaption="{content[4]()}"
	/>

	<p>{@html content[5]()}</p>

	<ArticleImage
		width="600"
		height="632"
		alt="{content[1]()}"
		srcset="{functions1} 713w,{functions2} 1426w"
		figcaption="{content[6]()}"
	/>
</ArticleSection>
