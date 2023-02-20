<script lang="ts">
export let date: string = ''
</script>

{#if date}
	<span><small>{date}</small></span>
{/if}

<style>
span {
	position: absolute;
	top: var(--top-margin);
	left: calc(-1 * var(--left-margin) - var(--line-width) * 0.5);
	display: flex;
	justify-content: center;
}
small {
	font-size: 0.65em;
	display: inline-block;
	position: absolute;
	background-color: rgb(41, 122, 80);
	padding: 2px 4px;
	border-radius: 6px;
}
</style>
