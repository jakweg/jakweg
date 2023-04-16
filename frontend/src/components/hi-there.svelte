<script>
import Avatar from './avatar.svelte'
import ShortAboutMe from './short-about-me.svelte'
</script>

<header>
	<div>
		<Avatar />
		<ShortAboutMe />
		<!-- <LongAboutMe /> -->
	</div>
</header>

<style>
header {
	padding-top: 64px;
	display: grid;
	place-items: center;
	min-height: 70svh;
}
div {
	display: grid;
	place-items: center;
	gap: 2ch;
}
@media (min-width: 1000px) {
	div {
		font-size: 1.2em;
		grid-template-columns: auto 1fr;
		flex-direction: row;
	}
}
</style>
