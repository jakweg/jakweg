const url = (path: string, polishPath: string | undefined = undefined): string => {
    return `
<url>
    <loc>https://jakub.wegrzyn.dev/${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://jakub.wegrzyn.dev/${path}"/>
    <xhtml:link rel="alternate" hreflang="pl" href="https://jakub.wegrzyn.dev/pl/${polishPath || path}"/>
</url>
`
}
export const prerender = true

export async function GET() {
    return new Response(`
<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${url('')}
      ${url('sleepy-student', 'wojtek')}
</urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}