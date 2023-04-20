<script lang="ts">
import LL from '@LL'
import Github from './icon/github.svelte'
</script>

<article>
	<a href="https://github.com/jakweg" target="_blank" rel="noreferrer">
		<Github size="{48}" />
		<h2>{$LL.featuredMore[0]()}</h2>
		<h3>{$LL.featuredMore[1]()}</h3>
	</a>
</article>

<style>
a {
	color: #ccc;
	display: grid;
	align-items: center;
	transition: color 0.3s;
	text-decoration: none;
	padding: 2ch;
	grid-template-columns: auto 1fr;
	--color: #aaa;
	transition: background-color 0.3s, border-color 0.3s;
	border-radius: 1ch;
}
a:hover {
	color: #9eafc3;
}
a:hover {
	background-color: #eeeeee07;
}
a > :global(svg) {
	width: 100px;
	grid-row: 1 / 3;
}
h2 {
	font-size: 1.1em;
	font-weight: normal;
	letter-spacing: 1px;
	color: #bbb;
	margin: 0.4ch;
}
h3 {
	font-size: 0.8em;
	font-weight: normal;
	color: #999;
	margin: 0.4ch;
}
@media (min-width: 750px) {
	article {
		grid-column: 1 / span 2;
		display: grid;
		place-items: center;
	}
}
@media (min-width: 1700px) {
	article {
		grid-column: unset;
	}
}
</style>
