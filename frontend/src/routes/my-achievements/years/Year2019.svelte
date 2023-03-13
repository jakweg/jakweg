<script lang="ts">
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import EsSystemLogo from '@components/icon/es-system.svelte'
import EventImage from '../event-image.svelte'

import zslPlan1 from '$lib/g/zslPlan.es.webp'
import zslPlan2 from '$lib/g/zslPlan.m.webp'

import mfi2 from '$lib/g/mfi.m.avif'

import LL from '@LL'
const str = $LL.timeline[2019]
</script>

<YearContainer year="2019">
	<LifeEvent major title="{str[0][0]()}" content="{str[0][1]()}" month="{11}">
		<svelte:fragment slot="year">
			<EventImage small="{zslPlan1}" large="{zslPlan2}" alt="{str[0][2]()}" />
		</svelte:fragment>
	</LifeEvent>
	<LifeEvent title="{str[1][0]()}" content="{str[1][1]()}" month="{7}" />
	<LifeEvent major title="{str[2][0]()}" content="{str[2][1]()}" month="{4}">
		<svelte:fragment slot="year">
			<EsSystemLogo />
		</svelte:fragment>
	</LifeEvent>
	<LifeEvent title="{str[3][0]()}" content="{str[3][1]()}" month="{4}">
		<svelte:fragment slot="year">
			<EventImage large="{mfi2}" alt="{str[3][2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
