<script lang="ts">
import HiThere from '@components/hi-there.svelte'
import MyWorkSeparator from '@components/my-work-separator.svelte'
import ProjectsList from '@components/projects-list.svelte'
import TopNavigation from '@components/top-navigation.svelte'
import LL from '@LL'
</script>

<div class="content">
	<TopNavigation alternativeUrl="{$LL.altRootUrl()}" />

	<HiThere />

	<MyWorkSeparator />
	<ProjectsList />
</div>
<svelte:head>
	<title>Jakub Węgrzyn · {$LL.softwareEngineer()}</title>
	<meta name="description" content="{$LL.siteDescription()}" />

	<link rel="alternate" href="https://jakub.wegrzyn.dev/pl/" hreflang="pl" />
	<link rel="alternate" href="https://jakub.wegrzyn.dev/" hreflang="en" />
</svelte:head>
