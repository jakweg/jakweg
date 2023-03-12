<script lang="ts">
import EventImage from '../event-image.svelte'
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import mobishit2 from '$lib/g/mobishit.m.avif'
import mobishit1 from '$lib/g/mobishit.s.avif'

import LL from '@LL'
const str = $LL.timeline[2018]
</script>

<YearContainer year="2018">
	<LifeEvent major title="{str[0][0]()}" content="{str[0][1]()}" month="{8}">
		<svelte:fragment slot="year">
			<EventImage small="{mobishit1}" large="{mobishit2}" alt="{str[0][2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
