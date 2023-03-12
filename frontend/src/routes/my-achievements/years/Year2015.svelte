<script lang="ts">
import EventImage from '../event-image.svelte'
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import cement2 from '$lib/g/cement.m.avif'
import cement1 from '$lib/g/cement.s.avif'

import LL from '@LL'
const str = $LL.timeline[2015]
</script>

<YearContainer year="2015">
	<LifeEvent major title="{str[0]()}" content="{str[1]()}" month="{12}">
		<svelte:fragment slot="year">
			<EventImage small="{cement1}" large="{cement2}" alt="{str[2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
