<script lang="ts">
import MonthMark from './month-mark.svelte'

export let title: string = ''
export let date: string = ''
export let content: string = ''
export let major: boolean = false //
</script>

<article class:major="{major}">
	<MonthMark date="{date}" />
	{#if title}
		{#if major}
			<h4>{title}</h4>
		{:else}
			<h5>{title}</h5>
		{/if}
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
.major {
	--top-margin: 0.3em;
}
h4 {
	font-size: 1.1em;
	letter-spacing: 1px;
	font-weight: normal;
	margin: 0.2em 0;
	color: #eee;
}
h5 {
	font-size: 0.9em;
	letter-spacing: 1px;
	font-weight: normal;
	margin: 0.2em 0;
	color: #eee;
}
p {
	font-size: 0.8em;
	margin: 0;
	color: #bbb;
}
</style>
