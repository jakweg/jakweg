<script lang="ts">
import MonthMark from './month-mark.svelte'

export let title: string
export let date: string = ''
export let content: string //
</script>

<article>
	<MonthMark date="{date}" />
	<h4>{title}</h4>
	<p>{content}</p>
</article>

<style>
article {
	--top-margin: 0.3em;
	position: relative;
	margin-top: 1em;
	margin-bottom: 1em;
}
h4 {
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
