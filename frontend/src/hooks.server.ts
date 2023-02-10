import type { Handle } from "@sveltejs/kit";

export const handle: Handle = ({ event, resolve }) => {
    const { pathname } = event.url;
    const locale = (pathname === '/pl' || pathname.startsWith('/pl/')) ? 'pl' : 'en'

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', locale)
    });
}