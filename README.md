# a.stro.cc (wormhole)

`a.stro.cc` (wormhole) is [Vercel Edge Function](https://vercel.com/docs/functions/edge-functions/quickstart) that acts as a shortcut to the [Astro Docs](https://docs.astro.build/en/getting-started/).

## Usage

Just pass your query as the path, and you will be redirected to the most relevant page of the Astro Docs.

- [`a.stro.cc/vercel`](https://a.stro.cc/vercel) => `https://docs.astro.build/en/guides/deploy/vercel/`
- [`a.stro.cc/islands`](https://a.stro.cc/islands) => `https://docs.astro.build/en/concepts/islands/`
- [`a.stro.cc/github%20pages`](https://a.stro.cc/github%20pages) => `https://docs.astro.build/en/guides/deploy/github/`

## Tip! 

Use this as a site shortcut in Chrome!

- Navigate to [`chrome://settings/searchEngines`](chrome://settings/searchEngines)
- Under **Site Search** select **Add**.
- Fill in the **Search Engine** as `Astro`. The **Shortcut** can be `astro` or any alias you prefer!
- Set the **URL** to `https://a.stro.cc/%s`.
- Press **Save**.

Now, you can type `astro` in Chrome's address bar, followed by whatever topic you'd like to jump to in the Astro Docs.

For Firefox:

Firefox out of the box does not support adding a new search engine. However, there is an option to enable it. Here is how:

- Open a new tab and navigate to `about:config`
- In the search box, type `browser.urlbar.update2.engineAliasRefresh`.
- At this point, the result list should be empty.
  - If it is empty, click the **+** button at the top right.
  - If the option already exists, set it to `true` by clicking the swap button on the right.
- Now navigate to `about:preferences#search`.
- Notice that it now has an **Add** button. Click on it.
- In the popup, set the **engine URL** to `https://a.stro.cc/%s`.
- Set the alias to `astro`, or anything you prefer!
- press **Add Engine**.

Now you can type `astro` followed by your search term. It will redirect you into the Astro Docs! 

🫡 Good luck out there, astronaut!

## Thanks

- [`@lazd`](https://blog.lazd.net/) for [`mdn.io`](https://github.com/lazd/mdn.io), which was the inspiration for this project.
- [DuckDuckGo](https://duckduckgo.com/) for powering the search!
