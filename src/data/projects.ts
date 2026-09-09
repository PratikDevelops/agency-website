export interface CaseImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  industry: string;
  /** Must match one of `projectCategories` - drives the /work filter row. */
  category: string;
  /** Service display names - map to /services/[slug] via the services data. Platform tags (Shopify, WordPress) render unlinked. */
  services: string[];
  /** Short factual outcome line used on cards and case hero. */
  outcome: string;
  /** Primary image (real product/site imagery). Omit for a typographic tile. */
  image?: string;
  imageAlt?: string;
  /** Platform / technology shown on cards and case hero. */
  platform?: string;
  /** Live production URL - only set when the build is publicly viewable. */
  liveUrl?: string;
  /** One-line description used on cards and the case hero. */
  description: string;
  /** Full case-study content. Omitted on minimal entries (real projects whose detailed notes are not yet written). */
  challenge?: string;
  challengeImage?: CaseImage;
  /** Strategy and reasoning - typography-led section. */
  approach?: Array<{ heading: string; body: string }>;
  /** What we shipped - heading/paragraph pairs. */
  solution?: Array<{ heading: string; body: string }>;
  solutionImages?: CaseImage[];
  /** Delivered outcomes. */
  results?: string[];
  /**
   * 'metrics' renders large numeric stats (verified figures only).
   * 'qualitative' renders delivered-scope statements - used whenever no
   * verified metrics exist, so nothing is invented.
   */
  resultsStyle?: 'metrics' | 'qualitative';
  resultContext?: string;
  /** Additional images only where they explain the work. */
  visualStory?: CaseImage[];
}

export const projectCategories = [
  'Web',
  'Apps',
  'Branding',
  'UI/UX',
  'SEO',
  'Marketing',
  'Automation',
];

export const projects: ProjectData[] = [
  {
    slug: 'elder-india',
    title: 'Elder India',
    industry: 'D2C Skincare & Wellness',
    category: 'Web',
    services: ['Web Development', 'UI/UX Design', 'Shopify'],
    outcome: 'Shopify e-commerce build',
    platform: 'Shopify',
    liveUrl: 'https://elder-india.myshopify.com/',
    image:
      'https://cdn.shopify.com/s/files/1/0755/3217/3412/files/Gemini_Generated_Image_su634nsu634nsu63_13196c78-959e-420a-8028-9a8b3176b8bd.png?v=1775239899&width=1600',
    imageAlt: 'Elder-Mart storefront banner for the skincare, haircare and wellness range',
    description:
      'A science-backed skincare, haircare and wellness store built on Shopify for the Elder-Mart brand.',
    challenge:
      'Elder-Mart sells skincare and wellness products where the buyer needs convincing before the checkout: ingredients, routines and results all have to be explained on the way to the cart. The store needed to present a growing catalogue - serums, haircare, vitality products and combination offers - while carrying the trust signals Indian D2C buyers look for: cash on delivery, clear policies and honest pricing with sale prices shown against regular ones.',
    challengeImage: {
      src: 'https://cdn.shopify.com/s/files/1/0755/3217/3412/files/sunscreen_1.webp?v=1767605398&width=1200',
      alt: 'Sunscreen product campaign imagery from the live Elder-Mart store',
      caption: 'Product campaign imagery from the live Elder-Mart store.',
    },
    approach: [
      {
        heading: 'Structure the catalogue around routines, not just products',
        body: 'Collections follow need - skincare, haircare, vitality and ready-made combos - so shoppers browse by what they are trying to solve. Bundles sit beside singles, which keeps upgrade paths visible without pushing them.',
      },
      {
        heading: 'Make the offers legible',
        body: 'Tiered offers (buy two, save ten percent; buy three, save fifteen) and bundle savings are displayed against regular prices with the exact amount saved. The value of a deal should be readable at a glance, not worked out with a calculator.',
      },
      {
        heading: 'Design the checkout around how India actually pays',
        body: 'Cash on delivery is available with a small online part-payment to confirm the order, alongside the standard prepaid flow. Shipping, returns and privacy policies sit one tap from the buying flow, because doubt at the checkout is where D2C carts are abandoned.',
      },
    ],
    solution: [
      {
        heading: 'A Shopify storefront built to merchandise',
        body: 'New arrivals, best sellers and bundle offers each have a proper home on the storefront. Sale prices, savings badges and sold-out states render consistently across the catalogue, so the store stays coherent as products rotate.',
      },
      {
        heading: 'Trust surfaces where doubt appears',
        body: 'Secure-payment and COD messaging sits near the buy buttons, customer reviews appear on product pages, and the policy pages - shipping, returns, privacy, order tracking - are reachable from both the footer and the buying flow.',
      },
      {
        heading: 'Content that answers pre-purchase questions',
        body: 'A blog covers the ingredients and timelines behind the products - from PDRN to vitamin C routines - supporting the product pages with the explanations buyers search for before they commit.',
      },
    ],
    solutionImages: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0755/3217/3412/files/VitaminC_HeroImage.jpg?v=1776699833&width=1400',
        alt: 'Vitamin C serum campaign image from the live Elder-Mart store',
        caption: 'Campaign imagery for the Vitamin C serum range.',
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0755/3217/3412/files/Aloe_Vera_Facewash_03.webp?v=1769585757&width=1400',
        alt: 'Aloe vera face wash product presentation on Elder-Mart',
        caption: 'Product presentation from the face wash range.',
      },
    ],
    results: [
      'Shopify storefront, live and trading',
      'COD-ready checkout with part-payment',
      'Bundle and tiered-offer merchandising',
    ],
    resultsStyle: 'qualitative',
    resultContext:
      'The outcomes above describe the delivered build, not estimated business impact. The store is live and linked above - every claim on this page can be verified there.',
  },
  {
    slug: 'nine-plus-nine-wholesale',
    title: 'Nine Plus Nine Wholesale',
    industry: 'Wholesale E-commerce',
    category: 'Web',
    services: ['Web Development', 'UI/UX Design', 'Shopify'],
    outcome: 'Shopify wholesale storefront',
    platform: 'Shopify',
    liveUrl: 'https://nine-plus-nine-wholesale.myshopify.com/',
    image:
      'https://nine-plus-nine-wholesale.myshopify.com/cdn/shop/files/Website_Banner_Main_2.webp?v=1775282260&width=1600',
    imageAlt: 'Nine Plus Nine Wholesale storefront banner showcasing the product range',
    description:
      'A wholesale e-commerce store on Shopify, built for bulk browsing, clear product presentation and a straightforward purchasing flow.',
    challenge:
      'Wholesale buying is a different discipline from retail: purchasers arrive knowing what category they need, compare specifications and pack sizes quickly, and expect the path from catalogue to enquiry or checkout to be short. Nine Plus Nine needed a Shopify storefront that presents its range cleanly, communicates wholesale terms without friction, and works as well on a buyer\u2019s phone as on a desktop.',
    challengeImage: {
      src: 'https://nine-plus-nine-wholesale.myshopify.com/cdn/shop/files/Website_Main_Banner.webp?v=1775052092&width=1400',
      alt: 'Main banner from the live Nine Plus Nine Wholesale storefront',
      caption: 'Storefront banner from the live site.',
    },
    approach: [
      {
        heading: 'Design for the bulk buyer, not the casual browser',
        body: 'The catalogue is organised so repeat purchasers can reach their category, judge the product and act in minutes. Product presentation prioritises the details a wholesale buyer checks first - what the item is, how it is packed and what ordering it involves.',
      },
      {
        heading: 'Keep the purchasing flow uncluttered',
        body: 'Wholesale flows fail when retail patterns get in the way. Navigation, product pages and the path to order were kept deliberately direct, with the storefront carrying the brand and the catalogue doing the selling.',
      },
      {
        heading: 'Build responsive from the start',
        body: 'Trade buyers order from the road, the counter and the warehouse floor. Every template was designed mobile-first and verified across breakpoints, so the purchasing flow never depends on a desk.',
      },
    ],
    solution: [
      {
        heading: 'A Shopify build shaped around the catalogue',
        body: 'The storefront presents the full range with consistent product templates, clear imagery and category navigation that mirrors how buyers actually search - implemented natively on Shopify so the team can extend it without custom code.',
      },
      {
        heading: 'Product presentation that carries the brand',
        body: 'Banners, collection headers and product cards follow one visual system, giving the store a coherent identity while keeping the focus on the products themselves.',
      },
      {
        heading: 'A wholesale purchasing experience end to end',
        body: 'From landing to product page to enquiry or cart, the flow stays linear and predictable - the experience a repeat buyer needs and a first-time buyer can follow without help.',
      },
    ],
    results: [
      'Shopify wholesale storefront, live and trading',
      'Catalogue-first product presentation',
      'Mobile-first wholesale purchasing flow',
    ],
    resultsStyle: 'qualitative',
    resultContext:
      'The outcomes above describe the delivered build, not estimated business impact. The store is live and linked above - every claim on this page can be verified there.',
  },
  {
    slug: 'passport-bangalore',
    title: 'Passport Bangalore',
    industry: 'Government Documentation Services',
    category: 'Web',
    services: ['Web Development', 'UI/UX Design', 'WordPress'],
    outcome: 'WordPress service website',
    platform: 'WordPress',
    liveUrl: 'https://passportbangalore.in/',
    description:
      'A service website for a Bengaluru documentation consultancy - passports, PAN, voter ID and related government paperwork, handled end to end online.',
    challenge:
      'Passport Bangaluru Pan Center is a CSC-registered consultancy in R.T. Nagar that handles passports, PAN cards, voter IDs, rental agreements and life certificates - services where customers arrive anxious, sceptical of online fraud, and unsure what the process involves. The website had to explain each service in plain language, set expectations about documents and timelines, and make the first step - a WhatsApp message - impossible to miss, all on a WordPress setup the team can update themselves.',
    approach: [
      {
        heading: 'Lead with the services people actually search for',
        body: 'Each service - passport, PAN, voter ID, rental agreement, life certificate, Aadhaar - has its own clearly described offering rather than a buried list, so a visitor can go from search result to the right service in one step.',
      },
      {
        heading: 'Answer the trust question before it is asked',
        body: 'The consultancy is certified under CSC e-Governance, and the site says so plainly, alongside a transparent FAQ covering what service fees include, which government fees are separate, and how personal data is handled.',
      },
      {
        heading: 'Make contact conversational, not formal',
        body: 'The audience prefers messaging over forms. WhatsApp support is presented as the primary contact path across the site, with 24/7 availability stated where the decision to enquire is made.',
      },
    ],
    solution: [
      {
        heading: 'A structured WordPress build',
        body: 'Home, About, Services, Blog and Contact pages built on WordPress with a consistent template per service - content the team can edit without touching code, which matters for a consultancy whose offerings evolve.',
      },
      {
        heading: 'Service pages that pre-empt the questions',
        body: 'Every service explains what it covers, what documents are needed and how the online process works - reducing the back-and-forth before an application even starts.',
      },
      {
        heading: 'Responsive, mobile-first presentation',
        body: 'Most visitors arrive on a phone from search or WhatsApp referrals, so the layout, type and contact actions are designed mobile-first and verified across breakpoints.',
      },
    ],
    results: [
      'WordPress website, live and in service',
      'Service-by-service content structure',
      'WhatsApp-first enquiry flow',
    ],
    resultsStyle: 'qualitative',
    resultContext:
      'The outcomes above describe the delivered build, not estimated business impact. The site is live and linked above - every claim on this page can be verified there.',
  },
  /*
   * ------------------------------------------------------------------
   * Application builds - minimal entries.
   * These are real projects; detailed case notes (challenge, approach,
   * visuals, stack) are added here once the source material for each
   * is supplied. Nothing on these pages is invented.
   * ------------------------------------------------------------------
   */
  {
    slug: '1onetwo9',
    title: '1OneTwo9',
    industry: 'Healthcare',
    category: 'Apps',
    services: ['App Development'],
    outcome: 'Doctor & patient application suite',
    platform: 'Mobile Application',
    description: 'A doctor and patient application suite, built as one connected product.',
  },
  {
    slug: 'b24by7-news',
    title: 'B24by7 News',
    industry: 'News & Media',
    category: 'Apps',
    services: ['App Development'],
    outcome: 'News app with admin panel',
    platform: 'Mobile Application',
    description: 'A news application with an admin panel for content management.',
  },
  {
    slug: 'amali-agro',
    title: 'Amali Agro',
    industry: 'Agriculture',
    category: 'Apps',
    services: ['App Development'],
    outcome: 'Farmers & fruit exporter app',
    platform: 'Mobile Application',
    description: 'A mobile application for farmers and a fruit exporter business.',
  },
  {
    slug: 'salestracker',
    title: 'SalesTracker',
    industry: 'Business Software',
    category: 'Apps',
    services: ['App Development'],
    outcome: 'Sales & admin dashboard',
    platform: 'Web Application',
    description: 'A sales and admin dashboard for tracking day-to-day sales activity.',
  },
  {
    slug: 'zen-colors',
    title: 'Zen Colors',
    industry: 'Clone Application',
    category: 'Apps',
    services: ['App Development'],
    outcome: 'Clone application build',
    platform: 'Mobile Application',
    description: 'A clone application build.',
  },
];
