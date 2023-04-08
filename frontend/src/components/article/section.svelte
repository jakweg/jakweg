<script lang="ts">
import type { LocalizedString } from 'typesafe-i18n'
import HashAnchor from '../hash-anchor.svelte'

export let title: LocalizedString
export let content: any | undefined = undefined //
const length = Array.from(content ?? []).length
</script>

<section>
	<HashAnchor setHere input="{title}">
		<h2>
			<span>{title}</span>
		</h2>
	</HashAnchor>
	<main>
		<slot>
			{#each Array(length) as _, i}
				<p>{@html content[i]()}</p>
			{/each}
		</slot>
	</main>
</section>

<style>
h2 {
	margin: 0;
	font-weight: normal;
	padding-right: 8px;
	letter-spacing: 1.5px;
	font-size: 1.7em;
	vertical-align: middle;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.3s;
}
h2:hover {
	background-color: #669bbc44;
}
h2::before {
	content: '';
	display: inline-block;
	width: 1ch;
	margin-right: 1ch;
	padding: 1.2em 0;
	background-color: #669bbc;
	border-radius: 0 8px 8px 0;
}
@media (min-width: 1000px) {
	h2::before {
		border-radius: unset;
	}
}
p {
	color: #ddd;
}
main {
	padding: 0 2ch;
}
</style>
