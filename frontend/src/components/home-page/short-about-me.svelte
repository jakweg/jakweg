<script>
import LL from '@LL'
import Bullet from '@components/bullet.svelte'
import JobInfo from './job-info.svelte'
</script>

<div>
	<h1>{$LL.about.hi()}</h1>
	<h2>{$LL.about.iam()} <span>Jakub Węgrzyn</span> 🙃</h2>
	<h3>
		<span class="l">{$LL.about.synonyms[0]()}</span>
		<span><Bullet /></span>
		<span>{$LL.about.synonyms[1]()}</span>
		<span class="m"><Bullet /></span>
		<span class="l">{$LL.about.synonyms[2]()}</span>
		<span><Bullet /></span>
		<span>{$LL.about.synonyms[3]()}</span>
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
	opacity: 0.6;
	margin: 0;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	gap: 0.7ch;
	justify-items: start;
}
.l {
	justify-self: end;
}
.m {
	display: none;
}
@media (min-width: 700px) {
	h3 {
		font-size: 0.85em;
	}
}
</style>
