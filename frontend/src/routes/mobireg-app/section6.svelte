<script lang="ts">
import ArticleSection from '@components/article/section.svelte'

import LL from '@LL'

const { content, title } = $LL.articles.mobishit.sections[6]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>
	<p>{@html content[2]()}</p>
	<p>{@html content[3]()}</p>
</ArticleSection>
