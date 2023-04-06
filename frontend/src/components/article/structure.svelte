<script lang="ts">
import TopNavigation from '@components/top-navigation.svelte'

export let title: string
export let description: string
export let alternativeUrl: string
export let enUrl: string
export let plUrl: string
</script>

<TopNavigation alternativeUrl="{alternativeUrl}" />

<div class="content">
	<slot />
</div>
<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}" />

	<link rel="alternate" href="https://jakub.wegrzyn.dev/{plUrl}/" hreflang="pl" />
	<link rel="alternate" href="https://jakub.wegrzyn.dev/{enUrl}/" hreflang="en" />
</svelte:head>

<style>
.content {
	display: grid;
	grid-template-areas: 'header' 'content' 'nav';
	--margin-left: 0;
}
@media (min-width: 1100px) {
	.content {
		--margin-left: 128px;
	}
}
@media (min-width: 750px) {
	.content {
		justify-content: center;
		grid-template-areas: 'header header header' 'content  . nav';
		grid-template-columns: 1fr 1fr auto;
	}
}
</style>
