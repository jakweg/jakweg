<script lang="ts">
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
const steps: any = section.content[2] //
</script>

<ArticleSection title="{section.title()}">
	<p>{@html section.content[0]()}</p>
	<p>{@html section.content[1]()}</p>
	<ol>
		{#each Array(Array.from(steps).length) as _, i}
			<li>{@html steps[i]()}</li>
		{/each}
	</ol>
	<p>{@html section.content[3]()}</p>
	<p>{@html section.content[4]()}</p>

	<figure>
		<img srcset="{webex1} 1x,{webex2} 2x" width="400" height="400" alt="{section.content[6]()}" />
		<figcaption>{section.content[6]()}</figcaption>
	</figure>

	<p>{@html section.content[5]()}</p>

	<figure>
		<img
			srcset="{isPolish ? joining1pl : joining1en} 1x,{isPolish ? joining2pl : joining2en} 2x"
			width="400"
			height="350"
			alt="{section.content[7]()}"
		/>
		<figcaption>{section.content[7]()}</figcaption>
	</figure>
</ArticleSection>

<style>
figcaption {
	color: #aaa;
	font-size: 0.8em;
}

@media (max-width: 600px) {
	figure {
		margin: 0;
		text-align: center;
	}
	figure > img {
		width: min(calc(100vw - 6ch), 400px);
		height: auto;
	}
}
</style>
