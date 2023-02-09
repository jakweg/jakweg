<script>
import ProjectHighlight from './project-highlight.svelte'
</script>

<div>
	<ProjectHighlight
		href="https://kulki.wegrzyn.dev"
		title="Color lines"
		type="Web Game"
		date="Oct 2020 - now"
		imgSrc="/kulki.png"
		description="Simple logic game as a PWA. <br/>You need to place at least 5 balls with the same color in one line, but every time you do a move - 3 new spawn at random places. <br/>How many points can you score?"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/warcaby"
		title="Checkers"
		type="Web Game"
		date="Apr 2020"
		imgSrc="/warcaby.png"
		description="It was supposed to be a simple school 3D project. I took it to the next level!<br/>Multiplayer checkers styled to mimic <em>Minecraft</em>."
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/mc-wallpaper-generator"
		title="Wallpaper generator"
		type="Native app"
		date="Mar 2021"
		imgSrc="/wallpaper-generator.png"
		description="Have you ever played <en>Minecraft</en> and liked the look of textures placed next to each other?<br/>I thought how would my desktop look all covered with single block, spoiler: It looks gorgeous ❤️"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/plan-zsl"
		title="ZSŁ Timetable"
		type="PWA"
		imgSrc="/zsl-plan.png"
		date="Oct 2021"
		description="Redefining simplicity and reliability for students, parents and teachers. <br/>Offline ready, fast and easy to use app for checking timetables"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/sleepy-student"
		title="Wojtek"
		type="Discord bot"
		date="Oct 2022 - now"
		imgSrc="/wojtek.png"
		description="Are you a sleepy student that just can't wake up for remote lectures?<br/>I might be, but Wojtek is not. Wojtek is this one student that is always on time, records remote lectures and publishes them on his webpage..."
	/>
	<ProjectHighlight
		href="https://kulki.wegrzyn.dev"
		title="Color lines"
		type="Web Game"
		date="Oct 2020 - now"
		imgSrc="/kulki.png"
		description="Simple logic game as a PWA. <br/>You need to place at least 5 balls with the same color in one line, but every time you do a move - 3 new spawn at random places. <br/>How many points can you score?"
	/>
</div>

<style>
div {
	display: grid;
	gap: 6ch;
	padding: 2ch;
	place-items: center;
	grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 110ch) {
	div {
		padding: 4ch 2ch;
		gap: 4ch;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 200ch) {
	div {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>
