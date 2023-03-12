import { setLocale } from '@LL'
import { loadedLocales, type baseLocale } from '../i18n/i18n-util'
import { loadLocaleAsync } from '../i18n/i18n-util.async'
import type { LayoutLoad } from './$types'

export const prerender = true
export const trailingSlash = 'always'

export const load: LayoutLoad = async event => {
	const { pathname } = event.url
	const locale =
		pathname === '/pl' || pathname.startsWith('/pl/') ? 'pl' : ('en' as typeof baseLocale)
	const noLocalesLoaded = Object.keys(loadedLocales).length === 0
	await loadLocaleAsync(locale)
	if (noLocalesLoaded) setLocale(locale)
	return { locale }
}
