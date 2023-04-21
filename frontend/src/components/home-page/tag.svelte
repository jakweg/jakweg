<script lang="ts">
export let background: string = 'transparent'
export let color: string | undefined = undefined
</script>

<div style:--c="{color}" style:--b="{background}">
	<slot />
</div>

<style>
div {
	font-family: monospace;
	display: inline-block;
	padding: 4px 6px;
	margin: 2px 0;
	font-size: 0.9em;
	border-radius: 8px;
	background: var(--b);
	color: var(--c);
	font-weight: bold;
}
</style>
