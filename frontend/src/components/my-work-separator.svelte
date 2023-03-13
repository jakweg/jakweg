<script>
import LL from '../i18n/i18n-svelte'
</script>

<div>
	<small></small>
	<span>{$LL.featuredProjects()}</span>
	<small></small>
	<a href="{$LL.timeline.url()}">{$LL.showMore()}</a>
	<small></small>
</div>

<style>
div {
	display: grid;
	gap: 1ch;
	align-items: center;
	grid-template-columns: 2ch auto 1fr auto 2ch;
}
@media (min-width: 110ch) {
	div {
		grid-template-columns: 6ch auto 1fr auto 2ch;
	}
}

span {
	font-size: larger;
}

small {
	border-bottom: 1px solid #aaaaaaaa;
}
a {
	color: #ccc;
	font-size: small;
}
a:hover {
	text-decoration: underline;
}
</style>
