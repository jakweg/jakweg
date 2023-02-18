<script lang="ts">
export let background: string = 'transparent'
export let color: string | undefined = undefined
</script>

<span style:--c="{color}" style:--b="{background}">
	<slot />
</span>

<style>
span {
	font-family: monospace;
	display: inline-block;
	padding: 4px 6px;
	border-radius: 8px;
	background: var(--b);
	color: var(--c);
	font-weight: bold;
}
</style>
