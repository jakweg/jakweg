<script lang="ts">
import EventImage from '../event-image.svelte'
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import sp2dobczyce2 from '$lib/g/sp2dobczyce.m.avif'
import sp2dobczyce1 from '$lib/g/sp2dobczyce.s.avif'

import zsl2 from '$lib/g/zsl.m.avif'
import zsl1 from '$lib/g/zsl.s.avif'

import LL from '@LL'
const str = $LL.timeline[2017]
</script>

<YearContainer year="2017">
	<LifeEvent major title="{str[0][0]()}" content="{str[0][1]()}" month="{7}">
		<svelte:fragment slot="year">
			<EventImage small="{zsl1}" large="{zsl2}" alt="{str[0][2]()}" />
		</svelte:fragment>
	</LifeEvent>
	<LifeEvent major title="{str[1][0]()}" content="{str[1][1]()}" month="{3}">
		<svelte:fragment slot="year">
			<EventImage small="{sp2dobczyce1}" large="{sp2dobczyce2}" alt="{str[1][2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
