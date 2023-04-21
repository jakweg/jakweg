<script lang="ts">
import type { TechnologyType } from '$lib/technology-type'
import TechnologyTag from './technology-tag.svelte'

export let stack: TechnologyType[]
</script>

<div>
	{#each stack as tech (tech)}
		<TechnologyTag type="{tech}" />
	{/each}
</div>

<style>
div {
	display: flex;
	flex-flow: row wrap;
	gap: 0.7ch;
	font-size: 0.9em;
}
</style>
