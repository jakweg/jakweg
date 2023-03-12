<script lang="ts">
import LL from '@LL'
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import Born from '@components/icon/born.svelte'

const str = $LL.timeline[2001]
</script>

<YearContainer year="2001">
	<LifeEvent major month="{11}" title="{str[1]()}" content="{str[0]()}">
		<svelte:fragment slot="year">
			<Born />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
