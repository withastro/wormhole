# a.stro.cc (wormhole)

`a.stro.cc` (wormhole) is [Vercel Edge Function](https://vercel.com/docs/functions/edge-functions/quickstart) that acts as a shortcut to the [Astro Docs](https://docs.astro.build/en/getting-started/).

## Usage

Just pass your query as the path, and you will be redirected to the most relevant page of the Astro Docs.

- [`a.stro.cc/vercel`](https://a.stro.cc/vercel) => `https://docs.astro.build/en/guides/deploy/vercel/`
- [`a.stro.cc/islands`](https://a.stro.cc/islands) => `https://docs.astro.build/en/concepts/islands/`
- [`a.stro.cc/github%20pages`](https://a.stro.cc/github%20pages) => `https://docs.astro.build/en/guides/deploy/github/`
- [`a.stro.cc/islands&lang=fr`](a.stro.cc/islands&lang=fr) => `https://docs.astro.build/fr/guides/deploy/vercel/`

## Tip

Use this as a site shortcut in Chrome!

- Navigate to [`chrome://settings/searchEngines`](chrome://settings/searchEngines)
- Under **Site Search** select **Add**.
- Fill in the **Search Engine** as `Astro`. The **Shortcut** can be `astro` or any alias you prefer!
- Set the **URL** to `https://a.stro.cc/%s`.
- Press **Save**.

Now, you can type `astro` in Chrome's address bar, followed by whatever topic you'd like to jump to in the Astro Docs.

🫡 Good luck out there, astronaut!

## Thanks

- [`@lazd`](https://blog.lazd.net/) for [`mdn.io`](https://github.com/lazd/mdn.io), which was the inspiration for this project.
- [DuckDuckGo](https://duckduckgo.com/) for powering the search!
