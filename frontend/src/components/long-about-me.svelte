<script>
import LL from '@LL'
</script>

<article>
	<p>
		{$LL.about.longDescription()}
	</p>
	<!-- <p>
		I have a deep passion for software performance, be it research in solving problems efficiently
		and falling down the rabbit hole of computers to improve user and developer experience.
	</p> -->
</article>

<style>
article {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 4ch;
	text-align: justify;
	font-size: 0.85em;
}
@media (min-width: 1000px) {
	article {
		margin-top: 3em;
		grid-column: 1 / 3;
	}
}
p {
	margin-top: 0;
	color: #ddd;
	max-width: 70ch;
	line-height: 1.35em;
}
</style>
