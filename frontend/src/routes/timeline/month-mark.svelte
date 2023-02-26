<script lang="ts">
export let date: string = ''
</script>

{#if date}
	<span><small>{date}</small></span>
{/if}

<style>
span {
	position: absolute;
	left: -2ch;
	float: left;
}
small {
	font-size: 0.75em;
	display: inline-block;
	background-color: rgb(41, 122, 80);
	padding: 1px 4px;
	margin-right: 8px;
	border-radius: 6px;
}
</style>
