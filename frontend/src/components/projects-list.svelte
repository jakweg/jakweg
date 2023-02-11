<script>
import LL, { locale } from '../i18n/i18n-svelte'
import ProjectHighlight from './project-highlight.svelte'

import kulki1 from '$lib/kulki.s.webp'
import kulki2 from '$lib/kulki.w.webp'

import warcaby1 from '$lib/warcaby.s.webp'
import warcaby2 from '$lib/warcaby.w.webp'

import wallpaperGenerator1 from '$lib/wallpaperGenerator.s.webp'
import wallpaperGenerator2 from '$lib/wallpaperGenerator.w.webp'

import zslPlan1 from '$lib/zslPlan.s.webp'
import zslPlan2 from '$lib/zslPlan.w.webp'

import wojtekEn1 from '$lib/wojtek.en.s.webp'
import wojtekEn2 from '$lib/wojtek.en.w.webp'

import wojtekPl1 from '$lib/wojtek.pl.s.webp'
import wojtekPl2 from '$lib/wojtek.pl.w.webp'

import upload1 from '$lib/upload.s.webp'
import upload2 from '$lib/upload.w.webp'
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
