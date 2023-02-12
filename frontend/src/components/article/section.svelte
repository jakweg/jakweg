<script lang="ts">
import type { LocalizedString } from 'typesafe-i18n'
import HashAnchor from '../hash-anchor.svelte'

export let title: LocalizedString
export let content: any | undefined = undefined //
const length = Array.from(content ?? []).length
</script>

<section>
	<HashAnchor setHere input="{title}">
		<h3>
			<span>{title}</span>
		</h3>
	</HashAnchor>
	<slot>
		{#each Array(length) as _, i}
			<p>{@html content?.[i]?.()}</p>
		{/each}
	</slot>
</section>

<style>
h3 {
	margin: 0;
	font-weight: lighter;
	letter-spacing: 1.5px;
	font-size: 1.7em;
	vertical-align: middle;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.3s;
}
h3:hover {
	background-color: #20707044;
}
h3::before {
	content: '';
	display: inline-block;
	width: 1ch;
	margin-right: 1ch;
	padding: 1.2em 0;
	background-color: #207070;
}
p {
	color: #ddd;
}
</style>
