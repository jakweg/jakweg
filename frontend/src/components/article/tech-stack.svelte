<script lang="ts">
import type { TechnologyType } from '$lib/technology-type'
import LL from '@LL'
import TechList from '@components/home-page/tech-list.svelte'
export let techStack: TechnologyType[]
</script>

{#if techStack.length > 0}
	<aside>
		<h2>{$LL.techStack()}</h2>
		<div><TechList stack="{techStack}" /></div>
	</aside>
{/if}

<style>
h2 {
	font-size: 1em;
	padding-left: 1.1ch;
	opacity: 0.7;
}
div {
	margin: 0 1ch;
}
</style>
