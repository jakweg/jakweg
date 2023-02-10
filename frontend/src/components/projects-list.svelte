<script>
import LL from '../i18n/i18n-svelte'
import ProjectHighlight from './project-highlight.svelte'
</script>

<div>
	<ProjectHighlight
		href="https://kulki.wegrzyn.dev"
		title="{$LL.colorLines_title()}"
		date="{$LL.colorLines_date()}"
		description="{$LL.colorLines_description()}"
		type="{$LL.webGame()}"
		imgSrc="/kulki.png"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/warcaby"
		title="{$LL.checkers_title()}"
		date="{$LL.checkers_date()}"
		description="{$LL.checkers_description()}"
		type="{$LL.webGame()}"
		imgSrc="/warcaby.png"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/mc-wallpaper-generator"
		title="{$LL.mcwallpaper_title()}"
		date="{$LL.mcwallpaper_date()}"
		description="{$LL.mcwallpaper_description()}"
		type="{$LL.nativeApp()}"
		imgSrc="/wallpaper-generator.png"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/plan-zsl"
		title="{$LL.planZsl_title()}"
		date="{$LL.planZsl_date()}"
		description="{$LL.planZsl_description()}"
		type="{$LL.pwa()}"
		imgSrc="/zsl-plan.png"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/sleepy-student"
		title="{$LL.wojtek_title()}"
		date="{$LL.wojtek_date()}"
		description="{$LL.wojtek_description()}"
		type="{$LL.discordBot()}"
		imgSrc="/wojtek.png"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/file-upload"
		title="{$LL.upload_title()}"
		date="{$LL.upload_date()}"
		description="{$LL.upload_description()}"
		type="{$LL.pwa()}"
		imgSrc="/upload.png"
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
