<script lang="ts">
export let title: string = ''
export let elements: any //
const array = Array(Array.from(elements).length)
</script>

{#if title}
	<p>{@html title}</p>
{/if}
<ul>
	{#each array as _, i}
		<li>{@html elements[i]()}</li>
	{/each}
</ul>

<style>
p,
ul {
	margin: 0;
}
</style>
