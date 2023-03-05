<script lang="ts">
import Line from './line.svelte'
import MonthMark from './month-mark.svelte'

export let title: string = ''
export let date: string = ''
export let content: string = ''
export let major: boolean = false //
</script>

<article>
	<div class="year">
		<slot name="year" />
	</div>
	<Line />
	<div class="content" class:date="{date}">
		<MonthMark date="{date}" />
		{#if title}
			{#if major}
				<h4>{title}</h4>
			{:else}
				<h5>{title}</h5>
			{/if}
		{/if}
		{#if content}
			<p>{@html content}</p>
		{/if}
	</div>
</article>

<style>
article {
	display: grid;
	grid-template-columns: var(--left-width) var(--line-width) 1fr;
	align-items: center;
	height: 100%;
}
.year {
	padding-left: 2px;
	padding-right: 4px;
}
.content {
	position: relative;
	margin: 0.5em 0.5ch 0.5em 1ch;
}
.content.date::before {
	content: 'aa';
	float: left;
	visibility: hidden;
}
h4 {
	font-size: 1.1em;
	letter-spacing: 1px;
	font-weight: normal;
	margin: 0.2em 0;
	padding-top: 2px;
	color: #eee;
}
h5 {
	font-size: 0.9em;
	letter-spacing: 1px;
	font-weight: normal;
	margin: 0.2em 0;
	padding-top: 2px;
	color: #eee;
}
p {
	font-size: 0.8em;
	margin: 0;
	color: #bbb;
}
@media (min-width: 600px) {
	.content {
		margin: 1em 2ch 1em 1ch;
	}
	.content.date::before {
		display: none;
	}
	h4 {
		font-weight: bold;
		color: #ddd;
	}
}
</style>
