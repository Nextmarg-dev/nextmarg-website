// Industry landing pages, built by src/pages/industries/[slug].astro.
// Each page speaks to one kind of business owner in their own words and points to the free Digital Health Score.
export type Industry = {
  slug: string;
  name: string; // Short name for menus and breadcrumbs
  who: string; // "a clinic", used in sentences and the WhatsApp message
  title: string; // <title> without the brand
  description: string; // Meta description
  h1: string;
  lead: string;
  searches: string[]; // Real searches their customers type or ask
  problems: { title: string; text: string }[];
  plan: { title: string; text: string }[];
  starter: { name: string; price: string; what: string };
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'clinics',
    name: 'Clinics',
    who: 'a clinic',
    title: 'Digital marketing for clinics in Bengaluru',
    description:
      'Get more appointment calls for your clinic: Google Maps, reviews, a fast website, WhatsApp booking and AI search, with every enquiry tracked. Founder-led agency in Bengaluru.',
    h1: 'More appointment calls for your clinic, tracked to the source',
    lead: 'Patients choose a dentist, physio or specialist on Google Maps, from reviews, and more and more by asking ChatGPT. We make sure your clinic is the one they find, trust and call.',
    searches: ['dentist near me open now', 'best physiotherapist in HSR Layout', 'skin specialist in Jayanagar reviews', 'ಹತ್ತಿರದ ಮಕ್ಕಳ ವೈದ್ಯರು'],
    problems: [
      { title: 'A newer clinic ranks above you on Maps', text: 'Usually because it has more recent reviews, photos and posts, not because it is better.' },
      { title: 'Calls come in, but you do not know from where', text: 'Without tracking, you cannot tell if your ads, Practo, Instagram or Google brought the patient.' },
      { title: 'Patients ask on WhatsApp and nobody replies in time', text: 'An unanswered message at 9pm is a patient who books somewhere else by morning.' },
    ],
    plan: [
      { title: 'Google Business Profile', text: 'Complete listing, every treatment as a service, weekly posts, real photos and a review QR card for the front desk.' },
      { title: 'Reviews system', text: 'A WhatsApp message after each visit that asks happy patients for a review, and polite replies to every review.' },
      { title: 'Website that books', text: 'One page per treatment with prices or ranges, doctor profiles, FAQs and a WhatsApp or call button on every screen.' },
      { title: 'AI search', text: 'Clear answers and schema so Google AI Overviews, ChatGPT and Gemini can name your clinic for the right questions.' },
      { title: 'Enquiry tracking', text: 'Every call, WhatsApp chat and form counted by source, in a one-page monthly report.' },
    ],
    starter: {
      name: 'Local Profile Plan',
      price: 'From ₹6,000 a month',
      what: 'Google Business Profile posts, review replies, a review QR card and a monthly report. Add a website or ads when you are ready.',
    },
    faqs: [
      {
        q: 'Can you advertise medical treatments on Google and Meta?',
        a: 'Yes, within their healthcare ad rules and Indian medical advertising guidelines. We avoid before-and-after claims and guaranteed results, and we keep patient data out of ad platforms.',
      },
      {
        q: 'We are already on Practo. Do we still need Google?',
        a: 'Yes. Most patients search on Google or Maps first, and AI tools read your Google listing, website and reviews. Practo is one source; your own listing and website are the ones you control.',
      },
      {
        q: 'How soon will we see more calls?',
        a: 'Google Business Profile and review work often shows within 4 to 8 weeks. Website and search work builds over 3 to 6 months. Ads can bring calls in the first week.',
      },
      {
        q: 'Is patient data safe?',
        a: 'We set up forms and tracking with consent under the DPDP Act, never send health details to ad platforms, and keep every account in the clinic’s own name.',
      },
    ],
  },
  {
    slug: 'salons',
    name: 'Salons and spas',
    who: 'a salon',
    title: 'Digital marketing for salons and spas in Bengaluru',
    description:
      'Fill your salon chairs on weekdays: Google Maps ranking, reviews, Instagram Reels, WhatsApp booking and reminders that bring clients back. Founder-led agency in Bengaluru.',
    h1: 'Fuller chairs on weekdays, and clients who come back',
    lead: 'People pick a salon from Google Maps, Instagram and reviews, then book on WhatsApp. We help you win that moment, and then bring the same client back every few weeks.',
    searches: ['salon near me for women', 'best bridal makeup in Bengaluru', 'hair spa near Indiranagar price', 'unisex salon open now'],
    problems: [
      { title: 'Weekends are full, weekdays are empty', text: 'Offers and reminders can move regular clients to quieter days.' },
      { title: 'Instagram gets likes, not bookings', text: 'Posts look good but do not say what it costs, where you are, or how to book.' },
      { title: 'Clients drift away after a few visits', text: 'Nobody reminds them when their next cut, colour or facial is due.' },
    ],
    plan: [
      { title: 'Google Maps', text: 'A complete profile with services and prices, before-and-after photos, weekly offers and a review QR card at the counter.' },
      { title: 'Instagram that books', text: '8 to 12 creatives and 4 Reels a month, each with the price, location and a WhatsApp booking link.' },
      { title: 'WhatsApp booking', text: 'A WhatsApp Business catalog of services, quick replies and labels so no enquiry is missed.' },
      { title: 'Win-back reminders', text: 'Automatic messages a few weeks after each visit, birthday offers and "we miss you" notes.' },
      { title: 'Tracking', text: 'A monthly count of bookings by source: Maps, Instagram, WhatsApp, walk-in.' },
    ],
    starter: {
      name: 'Local Starter bundle',
      price: 'Quoted after a free Health Score',
      what: 'Google Business Profile, review system, answer-ready FAQs, 8 to 12 creatives and 4 Reels a month, and WhatsApp Business.',
    },
    faqs: [
      {
        q: 'Do you shoot the Reels?',
        a: 'You or your team record short clips on a phone using our shot list, and we edit, caption and brand them. For launches we can arrange a shoot.',
      },
      {
        q: 'Can you set up booking without a costly app?',
        a: 'Yes. Most salons do well with WhatsApp Business plus a simple booking page. We suggest a salon software only when your volume needs it.',
      },
      {
        q: 'How do reviews help?',
        a: 'Recent, detailed reviews are one of the strongest signals for ranking on Google Maps, and AI tools quote them when people ask for recommendations.',
      },
    ],
  },
  {
    slug: 'retail-stores',
    name: 'Retail stores',
    who: 'a retail store',
    title: 'Digital marketing for retail stores in Bengaluru',
    description:
      'Bring more walk-ins and WhatsApp orders to your store: Google Maps, product posts, WhatsApp catalog, local ads and an online store when you need one. Founder-led agency in Bengaluru.',
    h1: 'More walk-ins and WhatsApp orders for your store',
    lead: 'Shoppers check Google Maps, stock and prices online before they step out. We put your store, your products and your offers in front of people nearby, and make ordering on WhatsApp easy.',
    searches: ['saree shop near me', 'electronics store in Tumakuru', 'gift shop open now', 'organic store near Whitefield home delivery'],
    problems: [
      { title: 'People do not know what you stock', text: 'If products and prices are not online, shoppers go where they can see them.' },
      { title: 'Online marketplaces take a big cut', text: 'Your own WhatsApp and website orders keep the margin with you.' },
      { title: 'Festive sales are a scramble', text: 'Offers go out late, on one channel, with no way to see what worked.' },
    ],
    plan: [
      { title: 'Google Maps and products', text: 'Profile with products, offers and photos, so "near me" searches show your shelves.' },
      { title: 'WhatsApp catalog', text: 'Your best-sellers in a WhatsApp catalog with prices, quick replies and order labels.' },
      { title: 'Festive and offer posts', text: 'A content calendar planned around Indian festivals and your sale dates.' },
      { title: 'Local ads', text: 'Google and Meta ads shown only to people within a few kilometres, sending them to WhatsApp or Maps directions.' },
      { title: 'Online store when ready', text: 'A Shopify or WooCommerce store in your name, with no lock-in, when online orders justify it.' },
    ],
    starter: {
      name: 'Local Profile Plan',
      price: 'From ₹6,000 a month',
      what: 'Google Business Profile posts, products and offers, review replies, a review QR card and a monthly report.',
    },
    faqs: [
      {
        q: 'Do we need a website to sell online?',
        a: 'Not at first. Google Business Profile, Instagram and a WhatsApp catalog can bring orders on their own. A store makes sense once orders are regular.',
      },
      {
        q: 'Can ads target only our area?',
        a: 'Yes. Google and Meta ads can be limited to a radius around your store, and we track direction requests, calls and WhatsApp chats from them.',
      },
      {
        q: 'Who owns the accounts?',
        a: 'You do. Your Google profile, ad accounts, domain and store are set up in your name, and we work as a partner on them.',
      },
    ],
  },
  {
    slug: 'recruitment-firms',
    name: 'Recruitment firms',
    who: 'a recruitment firm',
    title: 'Websites and marketing for recruitment and staffing firms',
    description:
      'Win more client mandates and quality candidates: job board websites, Google for Jobs, LinkedIn, CRM and WhatsApp automation for recruitment and staffing firms in India.',
    h1: 'More client mandates and better candidates for your recruitment firm',
    lead: 'Employers judge an agency by its website and LinkedIn. Candidates find jobs on Google. We build the site, the job listings and the follow-up system that keep both sides coming to you.',
    searches: ['recruitment agency in Bengaluru for IT', 'staffing company for manufacturing Tumakuru', 'jobs near me for freshers', 'HR consultancy for startups'],
    problems: [
      { title: 'Jobs are posted, but not found on Google', text: 'Without the right markup, your openings do not show in Google’s job search.' },
      { title: 'CVs pile up in email and WhatsApp', text: 'Good candidates are lost because there is no single place to track them.' },
      { title: 'Employers cannot see your track record', text: 'A thin website and quiet LinkedIn page make it harder to win new mandates.' },
    ],
    plan: [
      { title: 'Job board website', text: 'Job listings with Google for Jobs markup, apply forms and separate pages for employers and candidates.' },
      { title: 'CRM for candidates and clients', text: 'Zoho or HubSpot pipeline for mandates and candidates, with forms flowing in automatically.' },
      { title: 'WhatsApp follow-up', text: 'Automatic updates to candidates on interview stages, and quick replies for common questions.' },
      { title: 'LinkedIn for the founder', text: 'A content plan that shows your sectors, placements and hiring insight to employers.' },
      { title: 'Tracking', text: 'Applications and employer enquiries counted by source: Google, LinkedIn, job boards, referrals.' },
    ],
    starter: {
      name: 'Website in 21 days',
      price: 'From ₹40,000 one-time',
      what: 'A 5 to 8 page site with copy, SEO basics, GA4 and lead forms. A full job board with listings and apply flows is quoted after a call.',
    },
    faqs: [
      {
        q: 'Can our jobs show in Google’s job search?',
        a: 'Yes. Each job page gets JobPosting markup and a sitemap, so Google can list it in job search. We also help you post the same openings to job boards.',
      },
      {
        q: 'What about candidate data and consent?',
        a: 'Forms collect consent under the DPDP Act, CVs are stored in your own accounts, and candidates can ask for their data to be removed.',
      },
      {
        q: 'Do you build full job portals?',
        a: 'Yes. We start with what you need now, such as listings and applications, and add employer logins, dashboards or paid listings as you grow.',
      },
    ],
  },
];
