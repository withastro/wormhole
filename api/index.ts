export const config = {
    runtime: 'edge',
}

const engine = new URL('https://duckduckgo.com/');
const domain = new URL('https://docs.astro.build');
const redirect = (url: string | URL) => new Response(null, { status: 301, headers: { Location: url.toString() }})

export default async function handler(request: Request) {
    // TODO: Accept-Language support?

    // We use [duckduckgo bangs](https://duckduckgo.com/bangs)
    // to get the most relevant search result for our domain.
    const searchURL = new URL(engine);
    const query = new URL(request.url).searchParams.get('q');
    const lang = new URL(request.url).searchParams.get('lang') ?? 'en';
    if (!query) {
        return redirect(new URL(`${domain}${lang}`));
    }
    searchURL.searchParams.set('q', `! site:${domain}${lang} ${query}`);
    try {
        const html = await fetch(searchURL, { method: 'GET' }).then(res => res.text());
        // DuckDuckGo rewrites the request to a client-side redirect for tracking.
        // This pulls the final URL out of the markup.
        // 
        // WARNING: extremely likely to break in the future!
        // It will fallback to the original request if it does.
        const [_, ddgPath] = /content='0;\s*url=([^']+)'/gi.exec(html) ?? []
        if (!ddgPath) throw new Error();
        const finalURL = new URL(ddgPath, searchURL).searchParams.get('uddg');
        if (!finalURL) throw new Error();
        return redirect(finalURL)
    } catch {}

    return redirect(searchURL);
}
