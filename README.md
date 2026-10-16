# nextmarg.com

The Nextmarg agency website: a static [Astro](https://astro.build) site, hosted on Cloudflare Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

| What | File |
| --- | --- |
| Phone, email, WhatsApp, GTM ID, form key, social links | `src/data/site.ts` |
| Services, examples, starting prices, bundles | `src/data/services.ts` |
| Pillars, promise, track record, homepage FAQs | `src/data/content.ts` |
| Pages | `src/pages/` |
| Brand colours, type and layout | `src/styles/global.css` |
| Logos, favicon, share image | `public/` |
| AI-crawler rules and AI summary | `public/robots.txt`, `public/llms.txt` |

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick `nextmarg-website`.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. After the first deploy, add the custom domains `nextmarg.com` and `www.nextmarg.com`, and add a redirect rule from www to the bare domain.

Every push to `main` then deploys automatically.

## Before launch

- [ ] `src/data/site.ts`: add the Web3Forms key (until then, forms send the enquiry through WhatsApp), the GTM container ID, LinkedIn and Google Business Profile links, and optionally the street address and booking link
- [ ] Replace the "PR" placeholder with a real founder photo (Home and About)
- [ ] Check every number on the Work page and the starting prices
- [ ] Submit `https://nextmarg.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools
