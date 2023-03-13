<script lang="ts">
import LL from '@LL'
import Line from './line.svelte'
import MonthMark from './month-mark.svelte'

export let title: string = ''
export let month: number = 0
export let content: string = ''
export let major: boolean = false //

const months = $LL.timeline.months

const monthFormatted = (months as any)[month]()
</script>

<article>
	<div class="year">
		<slot name="year" />
	</div>
	<Line />
	<div class="content" class:date="{monthFormatted}">
		<MonthMark date="{monthFormatted}" />
		{#if title}
			{#if major}
				<h3>{title}</h3>
			{:else}
				<h4>{title}</h4>
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
	display: flex;
	justify-content: end;
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
h3 {
	font-size: 1.1em;
	letter-spacing: 1px;
	font-weight: bold;
	margin: 0.2em 0;
	padding-top: 2px;
	color: #eee;
}
h4 {
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
	color: #aaa;
}
@media (min-width: 600px) {
	.content {
		margin: 1em 2ch 1em 1ch;
	}
	.content.date::before {
		display: none;
	}
	h4 {
		font-size: 1.1em;
		font-weight: bold;
		color: #ddd;
	}
	h3 {
		font-size: 1.2em;
	}
}
@media (min-width: 1200px) {
	.year {
		padding: 1ch;
	}
}
</style>
