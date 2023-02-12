<script lang="ts">
import ArticleContent from '@components/article/content.svelte'
import ArticleNav from '@components/article/nav.svelte'
import ArticleSection from '@components/article/section.svelte'
import ArticleTitle from '@components/article/title.svelte'
import TopNavigation from '@components/top-navigation.svelte'
import LL, { locale } from '@LL'

import meme2en from '$lib/g/wojtek-meme.m.en.avif'
import meme2pl from '$lib/g/wojtek-meme.m.pl.avif'
import meme1en from '$lib/g/wojtek-meme.s.en.avif'
import meme1pl from '$lib/g/wojtek-meme.s.pl.avif'

import webex2 from '$lib/g/webex-captcha.m.avif'
import webex1 from '$lib/g/webex-captcha.s.avif'

import joining2en from '$lib/g/wojtek-joining.m.en.avif'
import joining2pl from '$lib/g/wojtek-joining.m.pl.avif'
import joining1en from '$lib/g/wojtek-joining.s.en.avif'
import joining1pl from '$lib/g/wojtek-joining.s.pl.avif'

const isPolish = $locale === 'pl'

const which = $LL.articles.wojtek
const steps: any = which.sections[1].content[2]
</script>

<TopNavigation />

<div class="content">
	<ArticleTitle title="{which.heading()}" />
	<ArticleNav article="{which}" />
	<ArticleContent article="{which}">
		<ArticleSection title="{which.sections[0].title()}">
			<p>{@html which.sections[0].content[0]()}</p>
			<p>{@html which.sections[0].content[1]()}</p>
			<p>{@html which.sections[0].content[2]()}</p>
			<p>{@html which.sections[0].content[3]()}</p>
			<p>{@html which.sections[0].content[4]()}</p>
			<img
				srcset="{isPolish ? meme1pl : meme1en} 1x,{isPolish ? meme2pl : meme2en} 2x"
				width="290"
				height="240"
				alt="{which.sections[0].content[6]()}"
			/>
			<p>{@html which.sections[0].content[5]()}</p>
		</ArticleSection>

		<ArticleSection title="{which.sections[1].title()}">
			<p>{@html which.sections[1].content[0]()}</p>
			<p>{@html which.sections[1].content[1]()}</p>
			<ol>
				{#each Array(Array.from(steps).length) as _, i}
					<li>{@html steps[i]()}</li>
				{/each}
			</ol>
			<p>{@html which.sections[1].content[3]()}</p>
			<p>{@html which.sections[1].content[4]()}</p>

			<figure>
				<img
					srcset="{webex1} 1x,{webex2} 2x"
					width="400"
					height="400"
					alt="{which.sections[1].content[6]()}"
				/>
				<figcaption>{which.sections[1].content[6]()}</figcaption>
			</figure>

			<p>{@html which.sections[1].content[5]()}</p>

			<figure>
				<img
					srcset="{isPolish ? joining1pl : joining1en} 1x,{isPolish ? joining2pl : joining2en} 2x"
					width="400"
					height="350"
					alt="{which.sections[1].content[7]()}"
				/>
				<figcaption>{which.sections[1].content[7]()}</figcaption>
			</figure>
			<p>{@html which.sections[1].content[8]()}</p>
			<p>{@html which.sections[1].content[9]()}</p>
		</ArticleSection>
	</ArticleContent>
</div>
<svelte:head>
	<title>{which.title()}</title>
	<meta name="description" content="{which.description()}" />

	<link rel="alternate" href="https://jakub.wegrzyn.dev/pl/wojtek" hreflang="pl" />
	<link rel="alternate" href="https://jakub.wegrzyn.dev/sleepy-student" hreflang="en" />
</svelte:head>

<style>
.content {
	display: grid;
	grid-template-areas: 'header' 'content' 'nav';
}
@media (min-width: 800px) {
	.content {
		grid-template-columns: 1fr auto;
		grid-template-areas: 'header header' 'content nav';
	}
}
figcaption {
	color: #aaa;
	font-size: 0.8em;
}
</style>
