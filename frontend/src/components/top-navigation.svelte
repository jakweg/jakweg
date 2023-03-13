<script lang="ts">
import { page } from '$app/stores'
import LL from '../i18n/i18n-svelte'
import GithubIcon from './icon/github.svelte'
import HomeIcon from './icon/home.svelte'
import TelegramIcon from './icon/telegram.svelte'

export let alternativeUrl: string = ''

const id = $page.route.id + '/'
const isHomePage = id === '//' || id === '/pl/'
</script>

<nav>
	{#if !isHomePage}
		<a class="start" href="{$LL.rootUrl()}" aria-label="{$LL.mainPage()}"><HomeIcon /></a>
	{/if}

	{#if isHomePage}
		<a href="{$LL.timeline.url()}">Portfolio</a>
	{/if}
	{#if alternativeUrl}
		<a
			href="{alternativeUrl}"
			rel="alternate"
			hreflang="{$LL.alternativeLang().toLocaleLowerCase()}">{$LL.alternativeLang()}</a
		>
	{/if}
	<a
		href="https://github.com/jakweg"
		target="_blank"
		rel="noreferrer"
		title="{$LL.checkoutGithub()}"
		aria-label="{$LL.checkoutGithub()}"><GithubIcon /></a
	>
	<a
		href="https://t.me/jakweg"
		target="_blank"
		rel="noreferrer"
		title="{$LL.messageTelegram()}"
		aria-label="{$LL.messageTelegram()}"><TelegramIcon /></a
	>
</nav>

<style>
nav {
	--color: #aaa;
	--color-hover: #d1e2f8;
	display: flex;
	flex-flow: row;
	justify-content: end;
	gap: 1ch;
	padding: 4px;
}
a {
	padding: 1ch;
	color: var(--color);
	text-decoration: none;
	transition: color 0.3s;
	justify-self: flex-end;
}
.start {
	flex: 1;
	justify-self: flex-start;
}
a:hover {
	--color: var(--color-hover);
}
</style>
