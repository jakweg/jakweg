<script lang="ts">
export let isArticle: boolean = false
export let title: string
export let description: string
export let polishLink: string | null
export let englishLink: string | null
</script>

<svelte:head>
	<meta name="theme-color" content="{isArticle ? '#00294d' : '#18181c'}" />
	<title>{title}</title>
	<meta name="description" content="{description}" />

	{#if polishLink !== null}
		<link
			rel="alternate"
			href="https://jakub.wegrzyn.dev/pl/{polishLink}{polishLink ? '/' : ''}"
			hreflang="pl"
		/>
	{/if}
	{#if englishLink !== null}
		<link
			rel="alternate"
			href="https://jakub.wegrzyn.dev/{englishLink}{englishLink ? '/' : ''}"
			hreflang="en"
		/>
	{/if}
</svelte:head>
