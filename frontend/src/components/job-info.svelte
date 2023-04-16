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
	font-size: smaller;
}
.role:last-of-type {
	font-size: small;
	opacity: 0.9;
}
p {
	margin: 2px;
}
</style>
