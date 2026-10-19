// Business details used across the site. Fill in the empty values before launch.
export const site = {
  name: 'Nextmarg',
  url: 'https://nextmarg.com',
  tagline: 'Your next step in digital.',
  headline: 'Big-brand digital experience, sized for growing businesses.',
  subline: 'Measured on enquiries, not likes.',
  description:
    'Nextmarg is a founder-led digital agency in Bengaluru. Websites, SEO and AI search (AEO, GEO, AIO), performance marketing, CRM and analytics for growing businesses, with every lead tracked.',
  founder: 'Preetham Ram',
  email: 'hello@nextmarg.com',
  phone: '+91 98866 97436',
  phoneHref: '+919886697436',
  // WhatsApp number in international format without "+" or spaces.
  whatsapp: '919886697436',
  whatsappText: "Hi, I'd like a Digital Health Score for my business.",
  city: 'Bengaluru',
  region: 'Karnataka',
  country: 'IN',
  // Street address and PIN code, if you want them shown. Leave empty to show the city only.
  streetAddress: '',
  postalCode: '',
  hours: 'Monday to Saturday, 10am to 7pm IST',
  // Profiles that confirm this is the same business (used in schema "sameAs").
  linkedinCompany: '',
  linkedinFounder: '',
  instagram: '',
  x: '',
  googleBusinessProfile: '',
  // Google Tag Manager container ID, e.g. "GTM-ABC1234". Leave empty until it exists.
  gtmId: 'GTM-K3K3CTRM',
  // Web3Forms access key (free at web3forms.com). Forms send to hello@nextmarg.com once set.
  web3formsKey: '1fa8491b-e63b-4d9e-a82f-4b1e66d0f175',
  // Booking page link (Zoho Bookings or Google Calendar). Leave empty to hide the button.
  bookingUrl: '',
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;
