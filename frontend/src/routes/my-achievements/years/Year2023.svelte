<script>
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import LL from '@LL'
const str = $LL.timeline[2023]
</script>

<YearContainer year="2023">
	<LifeEvent title="{str[0]()}" />
</YearContainer>
