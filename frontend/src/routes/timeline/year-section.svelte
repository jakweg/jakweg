<script lang="ts">
import Line from './line.svelte'
import YearMark from './year-mark.svelte'

export let year: string | undefined = undefined
</script>

<section>
	<div class="year">
		{#if year}
			<YearMark year="{year}" />
		{/if}
		{#if $$slots.year}
			<slot name="year" />
		{/if}
	</div>
	<Line />
	<div class="content">
		<slot name="content" />
	</div>
</section>

<style>
section {
	--line-width: 0.6ch;
	display: grid;
	grid-template-columns: 8ch var(--line-width) 1fr;
}
.content {
	--left-margin: 1.5ch;
	margin-top: 0.8em;
	margin-left: var(--left-margin);
	margin-right: 1ch;
	display: flex;
	flex-flow: column nowrap;
}
.year {
	flex-flow: column nowrap;
}
</style>
