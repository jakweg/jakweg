<script lang="ts">
export let title: string
export let content: string //
</script>

<aside>
	<h4>{title}</h4>
	<p>{content}</p>
</aside>

<style>
aside {
	margin-top: 4px;
	margin-bottom: 4px;
	margin-left: 3ch;
	max-width: 90ch;
	border-left: 1ch solid #103a3a;
	padding-left: 1ch;
	font-size: 0.9em;
	line-height: 130%;
}

h4,
p {
	margin: 4px;
}
</style>
