<script lang="ts">
import LL from '../../i18n/i18n-svelte'
import type { PageData } from './$types'
export let data: PageData
// onMount(() => loadLocaleAsync(data.locale).then(() => setLocale(data.locale)))
</script>

<h1>{$LL.projects()}</h1>
