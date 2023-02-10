<script>
import LL from '../i18n/i18n-svelte'
import Avatar from './avatar.svelte'
import Bullet from './bullet.svelte'
</script>

<header>
	<div>
		<Avatar />
		<div class="more">
			<h2>{$LL.hiThere()}</h2>
			<h3>{$LL.iam()} <span>Jakub Węgrzyn</span> 🙃</h3>

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
	min-height: 70vh;
}
header > * {
	gap: 2ch;
	display: flex;
	flex-direction: column;
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
h2 {
	margin: 8px;
}
h3 {
	margin: 8px;
}
h3 > span {
	color: #38bad0;
}
.job > p {
	margin: 8px;
}
</style>
