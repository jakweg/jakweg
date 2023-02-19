<div></div>

<style>
@keyframes Enter {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	70% {
		opacity: 0.6;
	}
	100% {
		opacity: 1;
	}
}
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
	animation: Enter 4s;
}
div::before {
	content: '';
	background-size: unset;
	background-image: radial-gradient(
		circle at 50vw 50vh,
		#00000000 0,
		#00000000 20vmax,
		#18181c99 50vmax
	);
	opacity: 1;
}
</style>
