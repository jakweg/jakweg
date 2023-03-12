<script lang="ts">
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import LL from '@LL'
const str = $LL.timeline[2009]
</script>

<YearContainer year="2009">
	<LifeEvent title="{str[0]()}" content="{str[1]()}" />
</YearContainer>
