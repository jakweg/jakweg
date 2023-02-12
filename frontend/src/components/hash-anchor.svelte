<script lang="ts">
export let input: string
export let setHere: boolean = false

const safeHash = input.replaceAll(' ', '-')
</script>

<a id="{setHere ? safeHash : undefined}" href="{'#' + safeHash}"><slot>{input}</slot></a>

<style>
a {
	scroll-margin: 1em;
}
</style>
