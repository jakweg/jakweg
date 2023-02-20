<script lang="ts">
import MonthMark from './month-mark.svelte'

export let title: string = ''
export let date: string = ''
export let content: string = '' //
</script>

<article>
	<MonthMark date="{date}" />
	{#if title}
		<h5>{title}</h5>
	{/if}
	{#if content}
		<p>{content}</p>
	{/if}
</article>

<style>
article {
	--top-margin: 0.2em;
	position: relative;
	margin-top: 1em;
	margin-bottom: 1em;
}
h5 {
	letter-spacing: 1px;
	font-weight: normal;
	margin: 0.2em 0;
	color: #eee;
}
p {
	font-size: 0.7em;
	margin: 0;
	color: #bbb;
}
</style>
