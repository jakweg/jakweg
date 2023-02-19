<div>
	<span class="line"></span>
	<span class="circle"></span>
</div>

<style>
div {
	position: relative;
	display: grid;
	place-items: center;
	grid-template-areas: 'a';
}
div > * {
	grid-area: a;
}
.circle {
	align-self: center;
	width: 1.5ch;
	border-radius: 50%;
	aspect-ratio: 1;
	background-color: green;
}
.line {
	height: 100%;
	width: 0.3ch;
	background-color: darkred;
}
</style>
