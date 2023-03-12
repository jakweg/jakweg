<script lang="ts">
import IbmLogo from '@components/icon/ibm.svelte'
import EventImage from '../event-image.svelte'
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import wojtek2 from '$lib/g/wojtek-profile.m.avif'
import wojtek1 from '$lib/g/wojtek-profile.s.avif'

import halfmarathon2 from '$lib/g/halfmarathon.m.avif'
import halfmarathon1 from '$lib/g/halfmarathon.s.avif'

import LL from '@LL'
const str = $LL.timeline[2022]
</script>

<YearContainer year="2022">
	<LifeEvent title="{str[0][0]()}" content="{str[0][1]()}" month="{10}">
		<svelte:fragment slot="year">
			<EventImage small="{halfmarathon1}" large="{halfmarathon2}" alt="{str[0][2]()}" />
		</svelte:fragment>
	</LifeEvent>

	<LifeEvent title="{str[1][0]()}" content="{str[1][1]()}" month="{10}">
		<svelte:fragment slot="year">
			<EventImage small="{wojtek1}" large="{wojtek2}" alt="{str[1][2]()}" />
		</svelte:fragment>
	</LifeEvent>

	<LifeEvent major title="{str[2][0]()}" content="{str[2][1]()}" month="{7}">
		<svelte:fragment slot="year">
			<IbmLogo />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
