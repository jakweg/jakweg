<script lang="ts">
import LifeEvent from '../life-event.svelte'
import YearContainer from '../year-container.svelte'

import SabreLogo from '@components/icon/sabre.svelte'

import LL from '@LL'
const str = $LL.timeline[2021]
</script>

<YearContainer year="2021">
	<LifeEvent title="{str[0][0]()}" content="" month="{10}" />

	<LifeEvent major title="{str[1][0]()}" content="{str[1][1]()}" month="{7}">
		<svelte:fragment slot="year">
			<SabreLogo />
		</svelte:fragment>
	</LifeEvent>

	<LifeEvent title="{str[2][0]()}" content="{str[2][1]()}" month="{4}" />
</YearContainer>
