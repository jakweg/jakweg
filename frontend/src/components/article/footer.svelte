<script lang="ts">
import LL from '@LL'
</script>

<footer>
	<p>{$LL.footer[0]()}<br />{$LL.footer[1]()}</p>
</footer>

<style>
footer {
	grid-area: footer;
	display: grid;
	place-items: center;
	text-align: center;
	font-size: small;
	opacity: 0.7;
	margin-top: 32px;
	padding: 32px;
	line-height: 1.8em;
}
</style>
