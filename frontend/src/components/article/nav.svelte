<script lang="ts">
import type { TechnologyType } from '$lib/technology-type'
import LL from '@LL'
import HashAnchor from '../hash-anchor.svelte'
import TechStack from './tech-stack.svelte'

export let article: any
const length = Array.from(article.sections).length
export let techStack: TechnologyType[] = []
</script>

<aside>
	<TechStack techStack="{techStack}" />
	<nav>
		<h2>{$LL.contents()}</h2>
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
	max-width: 40ch;
	grid-area: nav;
	align-self: flex-start;
	height: 100%;
}
nav {
	padding-top: 0.5em;
	display: none;
	position: sticky;
	top: 0;
}
@media (min-width: 750px) {
	aside {
		justify-self: end;
	}
	nav {
		display: block;
	}
}
ul {
	color: #9f9ff7;
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
@media (min-width: 1400px) {
	aside {
		margin-left: var(--margin-left);
		justify-self: unset;
	}
	ul {
		display: flex;
		flex-flow: column nowrap;
		width: max-content;
	}
	li {
		border-radius: 4px;
	}
}
</style>
