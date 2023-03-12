<script lang="ts">
import TopNavigation from '@components/top-navigation.svelte'
import Title from './title.svelte'

import LL from '@LL'

import Year2001 from './years/Year2001.svelte'
import Year2009 from './years/Year2009.svelte'
import Year2013 from './years/Year2013.svelte'
import Year2015 from './years/Year2015.svelte'
import Year2016 from './years/Year2016.svelte'
import Year2017 from './years/Year2017.svelte'
import Year2018 from './years/Year2018.svelte'
import Year2019 from './years/Year2019.svelte'
import Year2020 from './years/Year2020.svelte'
import Year2021 from './years/Year2021.svelte'
import Year2022 from './years/Year2022.svelte'
import Year2023 from './years/Year2023.svelte'
</script>

<TopNavigation />
<Title />
<main>
	<Year2023 />
	<Year2022 />
	<Year2021 />
	<Year2020 />
	<Year2019 />
	<Year2018 />
	<Year2017 />
	<Year2016 />
	<Year2015 />
	<Year2013 />
	<Year2009 />
	<Year2001 />
</main>

<svelte:head>
	<title>{$LL.timeline.meta[0]()}</title>
	<meta name="description" content="{$LL.timeline.meta[1]()}" />

	<link rel="alternate" href="https://jakub.wegrzyn.dev/pl/moje-dokonania" hreflang="pl" />
	<link rel="alternate" href="https://jakub.wegrzyn.dev/my-achievements" hreflang="en" />
</svelte:head>

<style>
main {
	--line-width: 0.4ch;
	--left-width: 88px;
	margin: 32px 0;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
}
@media (min-width: 600px) {
	main {
		--line-width: 0.5ch;
		--left-width: 140px;
	}
}
@media (min-width: 900px) {
	main {
		--line-width: 0.6ch;
	}
}
</style>
