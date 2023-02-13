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
		</ArticleSection>

		<ArticleSection title="{which.sections[2].title()}" content="{which.sections[2].content}" />

		<ArticleSection title="{which.sections[3].title()}" content="{which.sections[3].content}" />

		<ArticleSection title="{which.sections[4].title()}">
			<p>{@html which.sections[4].content[0]()}</p>
			<p>{@html which.sections[4].content[1]()}</p>
			<p>{@html which.sections[4].content[2]()}</p>
			<p>{@html which.sections[4].content[3]()}</p>
			<p>{@html which.sections[4].content[4]()}</p>
			<p>{@html which.sections[4].content[5]()}</p>
			<code>
				<pre>
<small>{which.sections[4].content[6][0]()}</small>
ffmpeg <span>-f pulse</span> <span>-i auto_null.monitor</span> <span>-y <i>$AUDIO_PATH</i></span>
</pre>
				<pre>
<small>{which.sections[4].content[6][1]()}</small>
ffmpeg <span>-f x11grab</span> <span>-framerate <i>$FRAMERATE</i></span> <span
						>-r <i>$FRAMERATE</i></span
					> <span>-video_size <i>$WIDTH</i>x<i>$HEIGHT</i></span> <span>-i :1.0</span> <span
						>-c:v libx264</span
					> <span>-preset superfast</span> <span>-pix_fmt yuv420p</span>-y <i>$VIDEO_PATH</i>
</pre>
				<pre>
<small>{which.sections[4].content[6][2]()}</small>
ffmpeg <span>-r <i>$FRAMERATE</i></span> <span>-i <i>$VIDEO_PATH</i></span> <span
						>-i <i>$AUDIO_PATH</i></span
					> <span>-c:v libx264</span> <span>-crf <i>$CRF</i></span> <span>-c:a aac</span> <span
						>-abr 1</span
					> <span>-b:a <i>$BITRATE</i>k</span> <span>-ac 1</span> <i>$FINAL_PATH</i> -y
</pre>
			</code>
			<p
				>{@html which.sections[4].content[7]({
					framerate: 4,
					width: 1280,
					height: 720,
					bitrate: 32,
					crf: 38,
				})}</p
			>
		</ArticleSection>

		<ArticleSection title="{which.sections[5].title()}" content="{which.sections[5].content}" />
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
code i {
	color: orange;
}
code pre {
	white-space: break-spaces;
}
code span {
	white-space: pre;
}
code small {
	font-weight: bold;
	color: #aaa;
}
</style>
