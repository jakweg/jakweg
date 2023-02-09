<div />

<style>
	div,
	div::before {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		box-sizing: border-box;
		background-image: radial-gradient(#0e87a366 1.5px, #00000000 0px);
		background-size: 48px 48px;
	}
	div::before {
		content: '';
		background-size: unset;
		background-image: radial-gradient(
			circle at 50vw 50vh,
			#00000000 0,
			#00000000 20vmax,
			#00000088 50vmax
		);
	}
</style>
