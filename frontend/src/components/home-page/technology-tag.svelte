<script lang="ts">
import { getTechnologyProps, type TechnologyType } from '$lib/technology-type'
import Tag from './tag.svelte'

export let type: TechnologyType

const [title, background, color] = getTechnologyProps(type)
</script>

<Tag background="{background}" color="{color}">{title}</Tag>
