<script lang="ts">
import ArticleSection from '@components/article/section.svelte'
import LL from '@LL'

const section = $LL.articles.wojtek.sections[4]
</script>

<ArticleSection title="{section.title()}">
	<p>{@html section.content[0]()}</p>
	<p>{@html section.content[1]()}</p>
	<p>{@html section.content[2]()}</p>
	<p>{@html section.content[3]()}</p>
	<p>{@html section.content[4]()}</p>
	<p>{@html section.content[5]()}</p>
	<code>
		<pre>
<small>{section.content[6][0]()}</small>
ffmpeg <span>-f pulse</span> <span>-i auto_null.monitor</span> <span>-y <i>$AUDIO_PATH</i></span>
</pre>
		<pre>
<small>{section.content[6][1]()}</small>
ffmpeg <span>-f x11grab</span> <span>-framerate <i>$FRAMERATE</i></span> <span
				>-r <i>$FRAMERATE</i></span
			> <span>-video_size <i>$WIDTH</i>x<i>$HEIGHT</i></span> <span>-i :1.0</span> <span
				>-c:v libx264</span
			> <span>-preset superfast</span> <span>-pix_fmt yuv420p</span>-y <i>$VIDEO_PATH</i>
</pre>
		<pre>
<small>{section.content[6][2]()}</small>
ffmpeg <span>-r <i>$FRAMERATE</i></span> <span>-i <i>$VIDEO_PATH</i></span> <span
				>-i <i>$AUDIO_PATH</i></span
			> <span>-c:v libx264</span> <span>-crf <i>$CRF</i></span> <span>-c:a aac</span> <span
				>-abr 1</span
			> <span>-b:a <i>$BITRATE</i>k</span> <span>-ac 1</span> <i>$FINAL_PATH</i> -y
</pre>
	</code>
	<p
		>{@html section.content[7]({
			framerate: 4,
			width: 1280,
			height: 720,
			bitrate: 32,
			crf: 38,
		})}</p
	>
</ArticleSection>

<style>
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
