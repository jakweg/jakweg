<script lang="ts">
import Line from './line.svelte'
import YearMark from './year-mark.svelte'

export let year: string | undefined = undefined //
</script>

<article class:year="{year}">
	<span></span>
	<div class="year">
		{#if year}
			<YearMark year="{year}" />
		{/if}
		{#if $$slots.year}
			<slot name="year" />
		{/if}
	</div>
	<Line />
	<span></span>
	<div class="content">
		<slot name="content">
			<slot />
		</slot>
	</div>
	<span></span>
</article>

<style>
article {
	--line-width: 0.4ch;
	--left-margin: 1ch;
	display: grid;
	grid-template-columns: 2px 10ch var(--line-width) var(--left-margin) 1fr 1ch;
}
article.year > * {
	border-top: 1px solid #ccc;
}
</style>
