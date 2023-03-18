const endLinkWithSlash = (str: string) =>
	'https://jakub.wegrzyn.dev/' + (str.endsWith('/') || !str ? str : str + '/')

const url = (path: string, polishPath: string | undefined = undefined): string => {
	return `
<url>
    <loc>${endLinkWithSlash(path)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${endLinkWithSlash(path)}"/>
    <xhtml:link rel="alternate" hreflang="pl" href="${endLinkWithSlash(
			'pl/' + (polishPath || path),
		)}"/>
</url>
`
}
export const prerender = true

export async function GET() {
	return new Response(
		`
<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${url('')}
      ${url('sleepy-student', 'wojtek')}
      ${url('my-achievements', 'moje-dokonania')}
      ${url('mobireg-app', 'mobishit')}
</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	)
}
