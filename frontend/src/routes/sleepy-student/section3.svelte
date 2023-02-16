<script lang="ts">
import Btw from '@components/article/btw.svelte'
import ArticleSection from '@components/article/section.svelte'
import LL from '@LL'

const section = $LL.articles.wojtek.sections[3]
</script>

<ArticleSection title="{section.title()}" content="{section.content}">
	<p>{@html section.content[0]()}</p>
	<p>{@html section.content[1]()}</p>
	<Btw title="{$LL.funFact()}" content="{section.content[2]()}" />
	<p>{@html section.content[3]()}</p>
	<p>{@html section.content[4]()}</p>
	<p>{@html section.content[5]()}</p>
	<p>{@html section.content[6]()}</p>
</ArticleSection>
