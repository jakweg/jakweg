<script>
	import GithubIcon from './github-icon.svelte';
	import TelegramIcon from './telegram-icon.svelte';
</script>

<nav>
	<a href="/portfolio">Portfolio</a>
	<a href="/about">About</a>
	<a href="https://github.com/jakweg" target="_blank" rel="noreferrer"><GithubIcon /></a>
	<a href="https://t.me/jakweg" target="_blank" rel="noreferrer"><TelegramIcon /></a>
</nav>

<style>
	nav {
		--color: #aaa;
		--color-hover: #d1e2f8;
		display: flex;
		flex-flow: row;
		justify-content: end;
		align-items: center;
		gap: 1ch;
		padding: 4px;
	}

	a {
		padding: 1ch;
		color: var(--color);
		text-decoration: none;
		transition: color 0.3s;
	}
	a:hover {
		--color: var(--color-hover);
	}
</style>
