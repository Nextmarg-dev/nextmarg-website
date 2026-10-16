export type Service = { name: string; what: string; example: string; isNew?: boolean };
export type ServiceGroup = {
  id: string;
  num: string;
  title: string;
  kicker: string;
  problem: string;
  summary: string;
  services: Service[];
  bestFor: string;
};

export const groups: ServiceGroup[] = [
  {
    id: 'get-found',
    num: '01',
    title: 'Get found',
    kicker: 'Search, AI and local',
    problem: "Customers can't find us on Google, or on ChatGPT.",
    summary:
      'SEO for Google, plus AEO, GEO and AIO so AI tools like ChatGPT, Gemini, Perplexity and Google AI Overviews mention you. Local listings, reviews and marketplaces too.',
    services: [
      { name: 'SEO', what: "Rank higher in Google's normal results.", example: 'Someone searches "dentist in Indiranagar" and your clinic is on page one.' },
      { name: 'Technical SEO and schema', what: 'Fix speed and errors, and add code that tells Google and AI tools what you offer.', example: 'Your Google result shows star ratings, prices and FAQs.' },
      { name: 'AEO: Answer Engine Optimisation', what: 'Become the answer in Google\'s answer boxes, "People also ask" and voice assistants.', example: '"How much does teeth whitening cost in Bengaluru?" Google reads out your answer.' },
      { name: 'GEO: Generative Engine Optimisation', what: 'Get recommended by ChatGPT, Gemini, Perplexity and Claude.', example: 'A buyer asks ChatGPT for the best HubSpot partner in Bengaluru, and your name is in the reply.' },
      { name: 'AIO: AI Overviews Optimisation', what: 'Get cited in the AI summary at the top of Google.', example: 'The AI box for "physiotherapy for back pain in HSR Layout" quotes your guide.' },
      { name: 'AI visibility tracking', what: 'A monthly check of how often AI tools mention you compared with your competitors.', example: '"ChatGPT recommended you in 4 of 20 test questions this month, up from 1."' },
      { name: 'Regional-language SEO', what: 'Content and voice search in Kannada, Hindi, Tamil and Telugu.', example: '"Indiranagar alli olle dentist", spoken into Google, brings up your Kannada page.' },
      { name: 'Google Business Profile', what: 'Keep your Google listing complete, active and well reviewed.', example: 'You appear in the top three on Google Maps for "salon near me".' },
      { name: 'Review generation', what: 'QR cards and WhatsApp messages that ask happy customers for a review.', example: 'Your clinic grows from 40 to 200 Google reviews in six months.' },
      { name: 'Directory and marketplace listings', what: 'Matching details on Justdial, Practo and IndiaMART, and better listings on Amazon, Flipkart, Blinkit and Swiggy.', example: 'Patients see the same timings on Practo as on Google.' },
    ],
    bestFor: "Clinics, salons, restaurants, retail, D2C brands, and B2B firms that don't rank yet.",
  },
  {
    id: 'websites',
    num: '02',
    title: 'Build your presence',
    kicker: 'Websites and digital experiences',
    problem: "Our website is outdated, or we don't have one.",
    summary:
      'Fast business websites, landing pages and event microsites, built so AI tools can read and quote them, with enquiries tracked from day one.',
    services: [
      { name: 'Business websites', what: 'New sites and redesigns that load fast and turn visitors into enquiries.', example: 'A 6-page site for a CA firm, under 2 seconds to load, with form and WhatsApp enquiries.' },
      { name: 'Landing pages', what: 'Single pages built for one campaign or ad.', example: 'A Diwali offer page that turns ad clicks into bookings.' },
      { name: 'Event and launch microsites', what: 'Registration, agenda and speaker pages for events and launches.', example: 'A registration site for your annual tech summit.' },
      { name: 'AI-ready websites', what: 'Structured with FAQs, schema and clear service pages so AI tools read and quote you correctly.', example: 'ChatGPT can say exactly what you do, where you are and what it costs.' },
      { name: 'E-commerce stores', what: 'Shopify and WooCommerce stores with UPI and card payments.', example: 'A home-bakery brand takes orders and payments online.' },
      { name: 'Website care plan', what: 'Hosting, updates, backups, security and small edits every month.', example: "You send a WhatsApp message to change a price, and it's live the same day." },
    ],
    bestFor: 'New brands, B2B and IT firms, professional firms and D2C brands.',
  },
  {
    id: 'create-and-engage',
    num: '03',
    title: 'Create and engage',
    kicker: 'Creative, video and social',
    problem: 'We need good-looking content, regularly.',
    summary:
      'Social media management, creative design, video, AI-assisted content and LinkedIn for founders, planned around your goals.',
    services: [
      { name: 'Social media management', what: 'Instagram, LinkedIn, Facebook and X: calendar, posting and replies.', example: '12 posts and 4 Reels a month, planned around your offers and festivals.' },
      { name: 'Creative design', what: 'Posts, carousels, ad creatives, banners and festival creatives.', example: 'A 5-slide carousel on "5 signs you need a root canal".' },
      { name: 'AI creative testing', what: 'Many versions of each ad, tested so the budget moves to the winners.', example: '2 of 12 Reel hooks bring 70% of leads, so they get the budget.' },
      { name: 'Video editing', what: 'Reels, Shorts, YouTube, testimonials, explainers and event aftermovies.', example: 'Your phone footage becomes a 30-second Reel with captions and music.' },
      { name: 'AI-assisted content', what: 'AI product photos, presenter videos and language versions, always checked by a person.', example: 'One product video in English, Hindi and Kannada, without a reshoot.' },
      { name: 'Brand identity and collateral', what: 'Logo, brand guidelines, social kit, brochures and sales decks.', example: 'A 12-slide sales deck your team uses in every meeting.' },
      { name: 'LinkedIn for founders', what: 'Profile makeover and ghost-written posts for leaders.', example: 'Three posts a week that bring in inbound enquiries.' },
    ],
    bestFor: 'Every business. Content is planned around your goals, not just made to look nice.',
  },
  {
    id: 'get-leads',
    num: '04',
    title: 'Get leads',
    kicker: 'Performance marketing',
    problem: "We're spending on ads but not getting enquiries.",
    summary: 'Google, Meta, LinkedIn and click-to-WhatsApp ads, with landing pages and tracking built as one package.',
    services: [
      { name: 'Google Ads', what: 'Search, Performance Max and YouTube campaigns, managed every week.', example: 'Your clinic gets 60 appointment calls a month from ₹30k of ad spend.' },
      { name: 'Meta ads', what: 'Instagram and Facebook campaigns with lead forms.', example: 'A real-estate lead form that fills site-visit slots.' },
      { name: 'LinkedIn ads', what: 'Reach decision-makers by role, industry and company size.', example: 'Your IT firm reaches CIOs at mid-size manufacturers in South India.' },
      { name: 'Click-to-WhatsApp ads', what: 'Ads that open a WhatsApp chat instead of a form.', example: '400 chats a month, each answered instantly with fees and a counselling slot.' },
      { name: 'Lead-generation campaigns', what: 'Ads, landing page and follow-up, built as one package.', example: 'A webinar campaign: 300 registrations and 20 sales meetings.' },
      { name: 'Conversion improvement', what: 'Landing-page tests, plus form and call tracking.', example: 'Cutting a form from 9 fields to 4 doubles enquiries from the same traffic.' },
    ],
    bestFor: 'Clinics, real estate, education, D2C brands and B2B firms with a sales team.',
  },
  {
    id: 'crm-analytics-automation',
    num: '05',
    title: 'Track and automate',
    kicker: 'CRM, analytics, AI and automation',
    problem: "Leads fall through the cracks and we can't tell what's working.",
    summary:
      'HubSpot and Zoho CRM, GA4 and Tag Manager, dashboards, WhatsApp automation, AI chatbots and DPDP-ready tracking.',
    services: [
      { name: 'CRM setup', what: 'HubSpot or Zoho: pipelines, forms, workflows, migration and training.', example: 'Every enquiry from web, WhatsApp and calls lands in one pipeline.' },
      { name: 'Google Analytics 4 and Tag Manager', what: 'Conversion tracking set up properly.', example: 'You see exactly which ad or post led to each enquiry.' },
      { name: 'Reporting dashboards', what: 'Live Looker Studio dashboards in plain language.', example: 'One page shows leads, cost per lead and revenue by channel.' },
      { name: 'WhatsApp Business and commerce', what: 'WATI, Interakt or AiSensy: catalogues, auto-replies, broadcasts and UPI checkout.', example: 'A patient types "Hi" and gets timings, doctors and a booking link.' },
      { name: 'AI chatbots and automation', what: 'Assistants for your website and WhatsApp, and Zapier, Make or n8n workflows.', example: 'New leads are scored, added to the CRM and followed up automatically.' },
      { name: 'Email and lead nurture', what: 'Automatic email sequences that warm up leads.', example: 'Brochure downloads get a 4-email series over two weeks.' },
      { name: 'Privacy-ready marketing (DPDP)', what: 'Consent banners, lead forms and consent-mode tracking.', example: 'Your marketing data is collected legally, and tracking keeps working.' },
      { name: 'Server-side tracking', what: 'First-party tracking that keeps working as cookies are blocked.', example: 'Google and Meta see more of your real conversions, so ads optimise better.' },
    ],
    bestFor: 'B2B firms, startups, education, real estate and multi-branch clinics.',
  },
  {
    id: 'ai-enablement',
    num: '06',
    title: "Grow your team's AI skills",
    kicker: 'AI enablement',
    problem: "Everyone says we should use AI, but we don't know where to start.",
    summary: 'Hands-on AI workshops, custom assistants trained on your brand, and prompt libraries your team uses every day.',
    services: [
      { name: 'AI-for-marketing workshops', what: 'Half-day, hands-on sessions for owners and teams.', example: 'Your sales team learns to draft proposals and follow-ups with AI in one afternoon.' },
      { name: 'Custom AI assistants', what: 'ChatGPT, Claude or Gemini assistants set up with your brand voice and FAQs.', example: 'Your team gets on-brand replies to enquiries in seconds.' },
      { name: 'Prompt and template library', what: 'Ready-to-use prompts for posts, emails, ads and reports.', example: 'A shared library of 40 prompts your team uses every day.' },
    ],
    bestFor: 'Owners, sales and marketing teams of 5 to 100 people.',
  },
  {
    id: 'stay-in-touch',
    num: '07',
    title: 'Stay in touch',
    kicker: 'Newsletters, email and retention',
    problem: 'We know we should keep in touch with clients, but we never do.',
    summary: 'Newsletters, email and WhatsApp campaigns, retention and win-back messages, and community building.',
    services: [
      { name: 'Newsletter management', what: 'Research, writing, design, scheduling and reporting, in your voice.', example: 'A monthly law-firm newsletter on new tax rules, sent to 2,000 clients.' },
      { name: 'LinkedIn newsletters', what: 'A founder-led newsletter that builds an audience.', example: '3,000 subscribers in a year.' },
      { name: 'Email and WhatsApp campaigns', what: 'Offers, launches and reminders to people who already know you.', example: 'A festive email that brings back past customers.' },
      { name: 'Retention and win-back', what: 'Automatic birthday, reorder and "we miss you" messages.', example: "A salon's WhatsApp reminder five weeks after every haircut." },
      { name: 'Community building', what: 'WhatsApp Communities, LinkedIn groups and customer events.', example: 'A 500-parent community that keeps sending referrals.' },
    ],
    bestFor: 'Consultants, professional firms, B2B founders and businesses with repeat customers.',
  },
];

export const growthPartner = {
  title: 'Growth partner',
  kicker: 'Your part-time marketing head',
  problem: "We need someone to own marketing, but can't hire a full-time head yet.",
  summary:
    'We plan the quarter, run the freelancers and agencies, manage the budget and report every month.',
  example:
    "We run marketing for a 100-person engineering firm two days a week, so they don't need to hire a marketing head yet.",
};

// Fixed-price starting points shown on the Services page.
export const offers = [
  { name: 'Digital Health Score', what: '30-point check of Google, AI search, website, tracking, reviews and privacy, with your top five fixes', price: 'Free', unit: '' },
  { name: 'AI Search Ready audit', what: 'How often ChatGPT, Gemini, Perplexity and Google AI mention you, plus a fix list', price: 'From ₹15,000', unit: 'one-time' },
  { name: 'Tracking Health Check', what: 'GA4 and Tag Manager audit, conversion tracking fixed, one dashboard', price: 'From ₹15,000', unit: 'one-time' },
  { name: 'Website in 21 days', what: '5 to 8 page AI-ready business site with copy, SEO basics, GA4 and lead forms', price: 'From ₹40,000', unit: 'one-time' },
  { name: 'CRM Quick Start', what: 'Zoho or HubSpot pipeline, forms, one automation, data import and training', price: 'From ₹40,000', unit: 'one-time' },
  { name: 'Local Profile Plan', what: 'Google Business Profile posts, review replies, review QR card and a monthly report', price: 'From ₹6,000', unit: 'a month' },
  { name: 'Done-for-you Newsletter', what: 'Two issues a month: topics, writing, design, sending and a report', price: 'From ₹15,000', unit: 'a month' },
  { name: 'Growth partner', what: 'Your part-time marketing head: plan, budget, partners and monthly reporting', price: 'From ₹40,000', unit: 'a month' },
];

export const bundles = [
  { name: 'Local Starter', who: 'Clinics, salons, restaurants, stores', what: 'Google Business Profile, review system, answer-ready FAQs, 8 to 12 creatives and 4 Reels a month, WhatsApp Business.' },
  { name: 'AI Search Ready', who: 'Any business with a website', what: 'AI visibility audit, AEO, GEO and AIO fixes, schema, FAQ content and a monthly AI visibility report.' },
  { name: 'Launch Kit', who: 'New brands and startups', what: 'Brand identity, AI-ready website, social kit, analytics, launch creatives and video.' },
  { name: 'B2B Growth', who: 'IT, engineering and professional firms', what: 'Website refresh, HubSpot or Zoho, LinkedIn content and ads, newsletter, dashboard and AI visibility tracking.' },
  { name: 'Content Engine', who: 'Brands that already have a site', what: 'Social media management, creatives, Reels and Shorts editing, a monthly calendar and report.' },
];
