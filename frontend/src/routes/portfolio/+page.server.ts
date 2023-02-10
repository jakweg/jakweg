import { setLocale } from '../../i18n/i18n-svelte';
import { baseLocale } from '../../i18n/i18n-util';
import { loadLocale } from '../../i18n/i18n-util.sync';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
    let determinedLocale = process.env.FORCE_LOCALE as typeof baseLocale
    loadLocale(determinedLocale)
    setLocale(determinedLocale)
    return { locale: determinedLocale }
} 