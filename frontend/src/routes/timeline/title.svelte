<header>
	<span></span>
	<h1>My personal <span>achievements</span></h1>
	<h2>
		I did quite a lot of interesting projects in my life. Here is a list of some of them. <br />
		<small>I like to come back and remember some of them when I'm feeling down</small>
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
