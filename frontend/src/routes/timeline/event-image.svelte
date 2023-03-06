<script lang="ts">
export let small: string
export let large: string
export let alt: string //
</script>

<img
	srcset="{small} 150w,{large} 300w"
	sizes="(min-width:900px)150px,(min-width:600px)100px,75px"
	alt="{alt}"
/>

<style>
img {
	border-radius: 8px;
}
</style>
