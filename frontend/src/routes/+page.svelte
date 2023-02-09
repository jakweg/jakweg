<script lang="ts">
	import HiThere from '../components/hi-there.svelte'
	import MyWorkSeparator from '../components/my-work-separator.svelte'
	import ProjectsList from '../components/projects-list.svelte'
	import TopNavigation from '../components/top-navigation.svelte'
</script>

<div class="content">
	<TopNavigation />

	<HiThere />

	<MyWorkSeparator />
	<ProjectsList />
</div>
<svelte:head>
	<title>Jakub Węgrzyn · Software Developer</title>
	<meta name="description" content="Hey! I'm Jakub, software developer from Poland. 
	I do numerous projects in various technologies for people myself included, currently working at IBM. 
	I also like running, working out with Rozbiegane Dobczyce 💪.
	Food is my 3rd passion - preparing and eating of course">
</svelte:head>