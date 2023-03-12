<script lang="ts">
import LL from '@LL'
</script>

<header>
	<span></span>
	<h1>{$LL.timeline.title[0]()}<span>{$LL.timeline.title[1]()}</span></h1>
	<h2>
		{$LL.timeline.title[2]()}<br />
		<small>{$LL.timeline.title[3]()}</small>
	</h2>
</header>

<style>
header {
	display: grid;
	grid-template-rows: 1fr auto auto;
	min-height: 40svh;
	padding: 0 1ch;
	gap: 1em;
}
h1,
h2 {
	margin: 0;
}
h1 {
	color: #df6363;
	letter-spacing: 1px;
	font-weight: bold;
	font-size: 2.5em;
}
h2 {
	font-size: 0.9em;
	font-weight: normal;
	max-width: 60ch;
	color: #ddd;
}
span {
	display: block;
}
small {
	color: #bbb;
}
@media (min-width: 600px) {
	header {
		font-size: 1.3em;
		padding: 0 2ch;
		min-height: 60svh;
	}
	h2 {
		font-size: 0.8em;
	}
	small {
		font-size: 0.7em;
	}
}
@media (min-width: 900px) {
	header {
		font-size: 1.6em;
		padding: 0 4ch;
		min-height: 70svh;
	}
	h2 {
		font-size: 0.7em;
		max-width: 80ch;
	}
}
@media (min-width: 1200px) {
	header {
		font-size: 1.8em;
	}
}
</style>
