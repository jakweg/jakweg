<script lang="ts">
import LL from '@LL'
import Head from '@components/head.svelte'
import TopNavigation from '@components/top-navigation.svelte'
import HiThere from './hi-there.svelte'
import MyWorkSeparator from './my-work-separator.svelte'
import ProjectsList from './projects-list.svelte'
</script>

<TopNavigation alternativeUrl="{$LL.altRootUrl()}" />

<HiThere />

<MyWorkSeparator />
<ProjectsList />
<Head
	title="Jakub Węgrzyn · {$LL.title()}"
	description="{$LL.siteDescription()}"
	polishLink=""
	englishLink=""
/>
