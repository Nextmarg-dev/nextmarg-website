# Analytics on nextmarg.com

Google Tag Manager loads on every page, with Google Consent Mode v2 defaults set to "denied" until the visitor clicks "Accept analytics". The GTM container ID lives in `src/data/site.ts` (`gtmId`).

`gtm-container-nextmarg.json` is a ready-to-import GTM container: the GA4 Google tag, the lead and contact-click events, and a paused Microsoft Clarity tag that only runs after consent. Import it in GTM (Admin → Import container → Merge), then fill the `GA4 Measurement ID` and `Clarity Project ID` variables.

## Events the site sends to the dataLayer

| Event | When | Parameters |
| --- | --- | --- |
| `generate_lead` | A form was accepted by Web3Forms and the visitor reached `/thank-you` (counted once per submission) | `form_name` (`digital_health_score` or `contact`), `lead_method` |
| `whatsapp_click` | Any `wa.me` link | `link_url`, `page_path` |
| `phone_click` | Any `tel:` link | `link_url`, `page_path` |
| `email_click` | Any `mailto:` link | `link_url`, `page_path` |
| `consent_update` | The visitor picks a banner option | `analytics_consent` (`granted` / `denied`) |

When consent is granted, a GA4 `page_view` event tag fires on `consent_update`. The landing page's first hit went out before consent (cookieless, not shown in reports), so this records the page view, session and traffic source for that visitor. Re-firing the Google tag itself does not send a new page view.

Mark `generate_lead`, `whatsapp_click`, `phone_click` and `email_click` as key events in GA4.
