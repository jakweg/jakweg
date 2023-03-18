<script lang="ts">
export let input: string
export let setHere: boolean = false

const safeHash = input
	.replaceAll(/[^[a-z]]/gi, ' ')
	.replaceAll(/[^\p{General_Category=Letter}]+/gu, ' ')
	.trim()
	.replaceAll(' ', '-')
</script>

<a id="{setHere ? safeHash : undefined}" href="{'#' + safeHash}"><slot>{input}</slot></a>

<style>
a {
	scroll-margin: 1em;
}
</style>
