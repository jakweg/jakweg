<script lang="ts">
import ArticleSection from '@components/article/section.svelte'
import LL from '@LL'

const section = $LL.articles.wojtek.sections[2]
</script>

<ArticleSection title="{section.title()}" content="{section.content}" />
