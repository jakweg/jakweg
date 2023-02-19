<script>
import LL from '../i18n/i18n-svelte'
import Avatar from './avatar.svelte'
import Bullet from './bullet.svelte'
</script>

<header>
	<div>
		<Avatar />
		<div class="more">
			<h1>{$LL.hiThere()}</h1>
			<h2>{$LL.iam()} <span>Jakub Węgrzyn</span> 🙃</h2>

			<div class="job">
				<p>IBM <Bullet /> {$LL.cracow()}</p>
				<p>{$LL.softwareEngineer()}</p>
			</div>
		</div>
		<div class="shifter"></div>
	</div>
</header>

<style>
header {
	display: grid;
	place-items: center;
	min-height: 70svh;
}
header > * {
	gap: 2ch;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.shifter {
	display: none;
}
@media (min-width: 1000px) {
	header > * {
		flex-direction: row;
	}
	.shifter {
		display: unset;
		width: 3ch;
	}
}
.more {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
h1 {
	margin: 8px;
}
h2 {
	margin: 8px;
}
h2 > span {
	color: #38bad0;
}
.job > p {
	margin: 8px;
}
</style>
