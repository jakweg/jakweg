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

import wonder2 from '$lib/g/wonder.m.webp'
import wonder1 from '$lib/g/wonder.s.webp'

import mobishit2 from '$lib/g/mobishit.m.webp'
import mobishit1 from '$lib/g/mobishit.s.webp'

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
		title="{$LL.colorLines.title()}"
		date="{$LL.colorLines.date()}"
		description="{$LL.colorLines.description()}"
		type="{$LL.webGame()}"
		imgSrc="{kulki1}"
		imgSrc2x="{kulki2}"
		techStack="{['ts', 'pwa']}"
	/>

	<ProjectHighlight
		href="{$LL.wojtek.url()}"
		title="{$LL.wojtek.title()}"
		date="{$LL.wojtek.date()}"
		description="{$LL.wojtek.description()}"
		type="{$LL.discordBot()}"
		imgSrc="{$locale === 'pl' ? wojtekPl1 : wojtekEn1}"
		imgSrc2x="{$locale === 'pl' ? wojtekPl2 : wojtekEn2}"
		techStack="{['ts', 'puppeteer', 'node', 'docker', 'discord']}"
	/>

	<ProjectHighlight
		href="https://github.com/jakweg/mc-wallpaper-generator"
		title="{$LL.mcwallpaper.title()}"
		date="{$LL.mcwallpaper.date()}"
		description="{$LL.mcwallpaper.description()}"
		type="{$LL.nativeApp()}"
		imgSrc="{wallpaperGenerator1}"
		imgSrc2x="{wallpaperGenerator2}"
		techStack="{['rust', 'linux', 'sfml']}"
	/>

	<ProjectHighlight
		href="https://github.com/jakweg/plan-zsl"
		title="{$LL.planZsl.title()}"
		date="{$LL.planZsl.date()}"
		description="{$LL.planZsl.description()}"
		type="{$LL.pwa()}"
		imgSrc="{zslPlan1}"
		imgSrc2x="{zslPlan2}"
		techStack="{['ts', 'angular', 'node', 'pwa']}"
	/>

	<ProjectHighlight
		href="https://github.com/jakweg/warcaby"
		title="{$LL.checkers.title()}"
		date="{$LL.checkers.date()}"
		description="{$LL.checkers.description()}"
		type="{$LL.webGame()}"
		imgSrc="{warcaby1}"
		imgSrc2x="{warcaby2}"
		techStack="{['ts', '3d', 'node']}"
	/>

	<ProjectHighlight
		href="https://github.com/jakweg/mobishit"
		title="{$LL.mobishit.title()}"
		date="{$LL.mobishit.date()}"
		description="{$LL.mobishit.description()}"
		type={$LL.androidApp()}
		imgSrc="{mobishit1}"
		imgSrc2x="{mobishit2}"
		techStack="{['kotlin', 'android', 'firebase']}"
	/>

	<ProjectHighlight
		href="https://wonder.wegrzyn.dev/"
		title="{$LL.wonder.title()}"
		date="{$LL.wonder.date()}"
		description="{$LL.wonder.description()}"
		type="{$LL.webGame()}"
		imgSrc="{wonder1}"
		imgSrc2x="{wonder2}"
		techStack="{['ts', 'webgl']}"
	/>

	<ProjectHighlight
		href="https://github.com/jakweg/file-upload"
		title="{$LL.upload.title()}"
		date="{$LL.upload.date()}"
		description="{$LL.upload.description()}"
		type="{$LL.pwa()}"
		imgSrc="{upload1}"
		imgSrc2x="{upload2}"
		techStack="{['vue', 'firebase', 'pwa']}"
	/>
</div>

<style>
div {
	display: grid;
	justify-content: space-between;
	align-items: flex-start;
	gap: 3ch;
	padding: 1ch;
	grid-template-columns: auto;
}
@media (min-width: 750px) {
	div {
		padding: 2ch;
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (min-width: 1700px) {
	div {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>
