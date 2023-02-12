<script>
import LL, { locale } from '../i18n/i18n-svelte'
import ProjectHighlight from './project-highlight.svelte'

import kulki2 from '$lib/g/kulki.m.webp'
import kulki1 from '$lib/g/kulki.s.webp'

import warcaby2 from '$lib/g/warcaby.m.webp'
import warcaby1 from '$lib/g/warcaby.s.webp'

import wallpaperGenerator2 from '$lib/g/wallpaperGenerator.m.webp'
import wallpaperGenerator1 from '$lib/g/wallpaperGenerator.s.webp'

import zslPlan2 from '$lib/g/zslPlan.m.webp'
import zslPlan1 from '$lib/g/zslPlan.s.webp'

import wojtekEn2 from '$lib/g/wojtek.en.m.webp'
import wojtekEn1 from '$lib/g/wojtek.en.s.webp'

import wojtekPl2 from '$lib/g/wojtek.pl.m.webp'
import wojtekPl1 from '$lib/g/wojtek.pl.s.webp'

import upload2 from '$lib/g/upload.m.webp'
import upload1 from '$lib/g/upload.s.webp'
</script>

<div>
	<ProjectHighlight
		href="https://kulki.wegrzyn.dev"
		title="{$LL.colorLines_title()}"
		date="{$LL.colorLines_date()}"
		description="{$LL.colorLines_description()}"
		type="{$LL.webGame()}"
		imgSrc="{kulki1}"
		imgSrc2x="{kulki2}"
		color="#ffa501"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/warcaby"
		title="{$LL.checkers_title()}"
		date="{$LL.checkers_date()}"
		description="{$LL.checkers_description()}"
		type="{$LL.webGame()}"
		imgSrc="{warcaby1}"
		imgSrc2x="{warcaby2}"
		color="#492f18"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/mc-wallpaper-generator"
		title="{$LL.mcwallpaper_title()}"
		date="{$LL.mcwallpaper_date()}"
		description="{$LL.mcwallpaper_description()}"
		type="{$LL.nativeApp()}"
		imgSrc="{wallpaperGenerator1}"
		imgSrc2x="{wallpaperGenerator2}"
		color="#2389c7"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/plan-zsl"
		title="{$LL.planZsl_title()}"
		date="{$LL.planZsl_date()}"
		description="{$LL.planZsl_description()}"
		type="{$LL.pwa()}"
		imgSrc="{zslPlan1}"
		imgSrc2x="{zslPlan2}"
		color="#ebebeb"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/sleepy-student"
		title="{$LL.wojtek_title()}"
		date="{$LL.wojtek_date()}"
		description="{$LL.wojtek_description()}"
		type="{$LL.discordBot()}"
		imgSrc="{$locale === 'pl' ? wojtekPl1 : wojtekEn1}"
		imgSrc2x="{$locale === 'pl' ? wojtekPl2 : wojtekEn2}"
		color="#28713e"
	/>
	<ProjectHighlight
		href="https://github.com/jakweg/file-upload"
		title="{$LL.upload_title()}"
		date="{$LL.upload_date()}"
		description="{$LL.upload_description()}"
		type="{$LL.pwa()}"
		imgSrc="{upload1}"
		imgSrc2x="{upload2}"
		color="#389a70"
	/>
</div>

<style>
div {
	display: grid;
	justify-content: space-between;
	gap: 4ch;
	padding: 2ch;
	grid-template-columns: auto;
}
@media (min-width: 750px) {
	div {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (min-width: 1700px) {
	div {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>
