<script lang="ts">
export let small: string
export let large: string
export let alt: string //
</script>

<img
	width="75"
	height="75"
	sizes="(min-width:900px)120px,(min-width:600px)100px,75px"
	srcset="{small} 150w,{large} 300w"
	alt="{alt}"
/>

<style>
img {
	border-radius: 8px;
	width: 75px;
	height: auto;
	margin: 1ch 0 1ch 0;
}
@media (min-width: 600px) {
	img {
		width: 100px;
	}
}

@media (min-width: 900px) {
	img {
		width: 120px;
	}
}

@media (min-width: 1200px) {
	img {
		width: 130px;
	}
}
</style>
