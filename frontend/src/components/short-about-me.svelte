<script>
import LL from '@LL'
import Bullet from './bullet.svelte'
import JobInfo from './job-info.svelte'
</script>

<div>
	<h1>{$LL.about.hi()}</h1>
	<h2>{$LL.about.iam()} <span>Jakub Węgrzyn</span> 🙃</h2>
	<h3>
		<span>{$LL.about.synonyms[0]()}</span>
		<span class="bullet"><Bullet /></span>
		<span>{$LL.about.synonyms[1]()}</span>
	</h3>

	<JobInfo />
</div>

<style>
div {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
}
h1 {
	margin: 8px;
}
h2 {
	opacity: 0.9;
	margin: 8px;
}
h2 > span {
	color: #38bad0;
}
h3 {
	font-weight: normal;
	font-size: small;
	opacity: 0.9;
	margin: 0;
}
.bullet {
	display: none;
}
h3 > span {
	display: block;
}
@media (min-width: 600px) {
	.bullet,
	h3 > span {
		display: unset;
	}
}
</style>
