<script lang="ts">
import Head from '@components/head.svelte'
import TopNavigation from '@components/top-navigation.svelte'
import Footer from './footer.svelte'

export let title: string
export let description: string
export let alternativeUrl: string
export let enUrl: string
export let plUrl: string
</script>

<TopNavigation alternativeUrl="{alternativeUrl}" />

<div>
	<slot />
</div>
<Head
	isArticle
	title="{title}"
	description="{description}"
	polishLink="{plUrl}"
	englishLink="{enUrl}"
/>
<Footer />

<style>
div {
	display: grid;
	grid-template-areas: 'header' 'nav' 'content' 'footer';
	--margin-left: 0;
}
@media (min-width: 1100px) {
	div {
		--margin-left: 128px;
	}
}
@media (min-width: 750px) {
	div {
		justify-content: center;
		grid-template-areas: 'header header header' 'content  . nav' 'footer footer footer';
		grid-template-columns: 1fr auto 1fr;
	}
}
</style>
