<script lang="ts">
import ArticleSection from '@components/article/section.svelte'

import LL from '@LL'
import MobiregBlueprintSimple from './mobireg-blueprint-simple.svelte'
import MobiregBlueprintVps from './mobireg-blueprint-vps.svelte'

const { content, title } = $LL.articles.mobishit.sections[4]
</script>

<ArticleSection title="{title()}">
	<p>{@html content[0]()}</p>
	<p>{@html content[1]()}</p>

	<MobiregBlueprintSimple />

	<p>{@html content[3]()}</p>

	<MobiregBlueprintVps />

	<p>{@html content[5]()}</p>
	<p>{@html content[6]()}</p>
</ArticleSection>
