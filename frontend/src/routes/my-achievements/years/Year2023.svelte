<script>
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import halfmarathon2 from '$lib/g/marathon.m.avif'
import halfmarathon1 from '$lib/g/marathon.s.avif'

import LL from '@LL'
import EventImage from '../event-image.svelte'
const str = $LL.timeline[2023]
</script>

<YearContainer year="2023">
	<LifeEvent title="{str[0]()}" />

	<LifeEvent title="{str[1][0]()}" content="{str[1][1]()}" month="{4}">
		<svelte:fragment slot="year">
			<EventImage small="{halfmarathon1}" large="{halfmarathon2}" alt="{str[1][2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
