<script lang="ts">
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import PascalLogo from '@components/icon/pascal.svelte'
import LL from '@LL'
const str = $LL.timeline[2013]
</script>

<YearContainer year="2013">
	<LifeEvent title="{str[0]()}" content="{str[1]()}">
		<svelte:fragment slot="year">
			<PascalLogo />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
