<script lang="ts">
import LL from '@LL'
import HashAnchor from '../hash-anchor.svelte'

export let article: any
const length = Array.from(article.sections).length
</script>

<aside>
	<h2>{$LL.contents()}</h2>
	<nav>
		<ul>
			{#each Array(length) as _, i}
				<li>
					<HashAnchor input="{article.sections[i].title()}">
						<span>{article.sections[i].title()}</span>
					</HashAnchor>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
aside {
	display: none;
	max-width: 40ch;
	grid-area: nav;
	position: sticky;
	align-self: flex-start;
	top: 0;
	color: #aaa;
}
@media (min-width: 800px) {
	aside {
		display: block;
	}
}
ul {
	margin: 0;
	font-size: 0.9em;
	padding: 0;
	list-style-type: none;
}
h2 {
	font-size: 1em;
	padding-left: 1.1ch;
	margin-bottom: 0.2em;
}
li {
	transition: background-color 0.2s, color 0.2s;
	border-radius: 4px 0 0 4px;
}
li span {
	display: block;
	padding: 0.6em 3ch 0.6em 1.5ch;
}
li:hover {
	color: white;
	background-color: #389a70aa;
}
li:active {
	background-color: #389a70dd;
}
</style>
