<script lang="ts">
import Head from '@components/head.svelte'
import HiThere from '@components/hi-there.svelte'
import MyWorkSeparator from '@components/my-work-separator.svelte'
import ProjectsList from '@components/projects-list.svelte'
import TopNavigation from '@components/top-navigation.svelte'
import LL from '@LL'
</script>

<TopNavigation alternativeUrl="{$LL.altRootUrl()}" />

<HiThere />

<MyWorkSeparator />
<ProjectsList />
<Head
	title="Jakub Węgrzyn · {$LL.softwareEngineer()}"
	description="{$LL.siteDescription()}"
	polishLink=""
	englishLink=""
/>
