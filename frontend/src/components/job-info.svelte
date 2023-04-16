<script lang="ts">
import LL from '@LL'
import Bullet from './bullet.svelte'
</script>

<main>
	<p>IBM <Bullet /> {$LL.about.cracow()}</p>
	<p class="role">{$LL.about.position()}</p>
</main>

<style>
main {
	margin: 1.4em 0 0.4em 0;
	text-align: center;
}
.role {
	font-size: 0.8em;
	opacity: 0.9;
}
p {
	margin: 2px;
}
@media (min-width: 700px) {
	main {
		font-size: 1.1em;
	}
}
</style>
