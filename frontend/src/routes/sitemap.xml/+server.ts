const url = (path: string, polishPath: string | undefined = undefined): string => {
    return `
<url>
    <loc>https://jakub.wegrzyn.dev/${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://jakub.wegrzyn.dev/${path}">
    <xhtml:link rel="alternate" hreflang="pl" href="https://jakub.wegrzyn.dev/pl/${polishPath || path}">
</url>
<url>
    <loc>https://jakub.wegrzyn.dev/pl/${polishPath || path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://jakub.wegrzyn.dev/${path}">
    <xhtml:link rel="alternate" hreflang="pl" href="https://jakub.wegrzyn.dev/pl/${polishPath || path}">
</url>
`
}
export const prerender = true

export async function GET() {
    return new Response(
        `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${url('')}
    </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}