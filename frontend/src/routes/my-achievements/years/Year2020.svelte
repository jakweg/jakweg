<script lang="ts">
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import kulki1 from '$lib/g/kulki.es.webp'
import kulki2 from '$lib/g/kulki.m.webp'

import vanced2 from '$lib/g/vanced.m.avif'

import endomondo2 from '$lib/g/endomondo.m.avif'
import endomondo1 from '$lib/g/endomondo.s.avif'
import EventImage from '../event-image.svelte'

import LL from '@LL'
const str = $LL.timeline[2020]
</script>

<YearContainer year="2020">
	<LifeEvent title="{str[0][0]()}" content="{str[0][1]()}" month="{12}">
		<svelte:fragment slot="year">
			<EventImage small="{kulki1}" large="{kulki2}" alt="{str[0][2]()}" />
		</svelte:fragment>
	</LifeEvent>

	<LifeEvent title="{str[1][0]()}" content="{str[1][1]()}" month="{5}">
		<svelte:fragment slot="year">
			<EventImage large="{vanced2}" alt="{str[1][2]()}" />
		</svelte:fragment>
	</LifeEvent>

	<LifeEvent title="{str[2][0]()}" content="{str[2][1]()}" month="{4}">
		<svelte:fragment slot="year">
			<EventImage small="{endomondo1}" large="{endomondo2}" alt="{str[2][2]()}" />
		</svelte:fragment>
	</LifeEvent>
</YearContainer>
