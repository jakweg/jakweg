<script lang="ts">
import LL from '@LL'
import Head from '@components/head.svelte'
</script>

<main>
	<div>
		<h1>🤷‍♂️</h1>
		<h2>{$LL[404].title()}</h2>
		<h3><a href="{$LL.rootUrl()}">{$LL[404].link()}</a></h3>
	</div>
</main>
<Head title="{$LL[404].title()}" description="🤷‍♂️" englishLink="{null}" polishLink="{null}" />

<style>
h1 {
	font-size: 6em;
	margin: 0;
}
main {
	display: grid;
	place-items: center;
	height: 100svh;
	text-align: center;
}
a {
	text-decoration: underline;
}
</style>
