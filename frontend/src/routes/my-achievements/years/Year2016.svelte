<script lang="ts">
import EventImage from '../event-image.svelte'
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import labirynt2 from '$lib/g/labirynt.m.avif'

import androidStudio2 from '$lib/g/android-studio.m.avif'

import LL from '@LL'
const str = $LL.timeline[2016]
</script>

<YearContainer year="2016">
	<LifeEvent title="{str[0][0]()}" content="{str[0][1]()}" month="{11}">
		<svelte:fragment slot="year">
			<EventImage large="{androidStudio2}" alt="{str[0][2]()}" />
		</svelte:fragment>
	</LifeEvent>
	<LifeEvent content="{str[1]()}" month="{10}" />
	<LifeEvent title="{str[2][0]()}" content="{str[2][1]()}" month="{9}" />
	<LifeEvent major title="{str[3][0]()}" content="{str[3][1]()}" month="{5}">
		<svelte:fragment slot="year">
			<EventImage large="{labirynt2}" alt="{str[3][2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
