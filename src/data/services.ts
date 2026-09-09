export interface ServiceData {
  slug: string;
  number: string;
  title: string;
  /** Short label rendered in the hero eyebrow alongside the service number. */
  eyebrow: string;
  /** Per-service H1 - replaces the generic fallback headline. */
  heroHeadline: string;
  /** Hero supporting paragraph. */
  heroDescription: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  /** Editorial overview paragraphs rendered in the intro section. */
  intro: string[];
  /** What the engagement covers - typography-led numbered list. */
  whatWeDo: Array<{ name: string; description: string }>;
  deliverables: Array<{ name: string; description: string }>;
  process: Array<{ step: string; title: string; description: string }>;
  pricing: Array<{
    name: string;
    tagline: string;
    price: string;
    features: string[];
    popular?: boolean;
  }>;
  /** Measurable outcomes rendered as a large-stat band. */
  results: Array<{ value: string; label: string }>;
  faq: Array<{ question: string; answer: string }>;
  metaTitle: string;
  metaDescription: string;
  capabilities: string[];
  /** Slugs of projects to feature in "Related Work". Leave empty to hide the section. */
  relatedProjects?: string[];
}

export const services: ServiceData[] = [
  {
    slug: 'web-development',
    number: '01',
    title: 'Web Development',
    eyebrow: 'Web Development',
    heroHeadline: 'Web experiences engineered for performance.',
    heroDescription:
      'Most websites are built and then optimised as an afterthought. We reverse that: your site ships fast, ranks from day one and actually turns visitors into enquiries - because performance, search and conversion shaped every decision, not just the code.',
    shortDescription: 'Websites, platforms and digital products engineered for performance.',
    description:
      'We build fast, scalable web experiences - from marketing sites to complex web applications - designed around your business goals and your users.',
    heroImage: '',
    heroImageAlt:
      'Modern web development workspace with multiple monitors displaying code and design interfaces in a bright, open studio environment',
    intro: [
      'A website is rarely just a website. For most of our clients it is the first sales conversation, the credibility check before a call, and the place where marketing spend either converts or evaporates. The problem is that most sites are designed for how they look in a pitch deck - not for how they load on a phone, read to a search engine, or guide a hesitant visitor toward an enquiry.',
      'We build web projects the other way around. Before a pixel is placed, we agree what the site must do: how many enquiries it should drive, which pages must rank, what content your team needs to change without calling us. Then we design and engineer toward those outcomes - a stack that is fast by construction, content you can edit without breaking anything, and measurement wired in from launch day.',
    ],
    whatWeDo: [
      {
        name: 'Marketing websites that sell',
        description:
          'Positioning-led pages built around one job: turning the right visitor into an enquiry. Copy structure, proof placement and calls to action are designed, not decorated.',
      },
      {
        name: 'E-commerce storefronts',
        description:
          'Custom shops on modern platforms - catalogues that are easy to browse, checkouts that do not leak, and search that handles how people actually shop.',
      },
      {
        name: 'Web applications',
        description:
          'Dashboards, portals and customer-facing tools with real functionality behind them: accounts, data, workflows and integrations with the systems you already run.',
      },
      {
        name: 'CMS-driven sites your team can run',
        description:
          'Structured content models so non-technical editors can publish pages, posts and landing pages without touching code - and without breaking layouts.',
      },
      {
        name: 'Performance and technical SEO foundations',
        description:
          'Core Web Vitals budgets, semantic markup, structured data and clean URL architecture - the unglamorous work that decides whether Google and your visitors stay.',
      },
      {
        name: 'Maintenance that prevents emergencies',
        description:
          'Updates, monitoring, backups and small improvements handled quietly in the background, so the site stays fast and secure long after launch.',
      },
    ],
    capabilities: [
      'Marketing Websites',
      'E-commerce',
      'Web Applications',
      'CMS Integration',
      'API Integration',
      'Performance Optimization',
      'Analytics',
      'Deployment',
    ],
    deliverables: [
      {
        name: 'Marketing Websites',
        description:
          'Conversion-focused sites that communicate your value and generate qualified leads.',
      },
      {
        name: 'E-commerce',
        description:
          'Custom storefronts built for growth - from product catalogues to checkout optimization.',
      },
      {
        name: 'Web Applications',
        description: 'Complex, interactive platforms that solve real business problems at scale.',
      },
      {
        name: 'CMS Integration',
        description:
          'Headless and traditional CMS setups so your team can publish without engineering.',
      },
      {
        name: 'API Integration',
        description: 'Connect your web product to the tools and data your business already uses.',
      },
      {
        name: 'Performance Optimization',
        description: 'Core Web Vitals, load-speed improvements and technical SEO foundations.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Discovery',
        description:
          'Goals, audiences and commercial targets agreed up front - including what the site must do for enquiries, rankings and content editing.',
      },
      {
        step: '02',
        title: 'Architecture',
        description:
          'Stack selection, page structure, URL architecture and content model decided before design begins, so growth does not require a rebuild.',
      },
      {
        step: '03',
        title: 'UI Implementation',
        description:
          'Responsive pages built from a component system, engineered against a Core Web Vitals budget - fast on a mid-range phone, not just a studio Mac.',
      },
      {
        step: '04',
        title: 'Development',
        description:
          'Clean, typed code with staging previews on every milestone, integrations wired to your CRM and analytics, and SEO fields built into every template.',
      },
      {
        step: '05',
        title: 'Testing',
        description:
          'Device and browser testing, performance audits against the agreed budget, accessibility checks, and a content freeze so nothing last-minute breaks the launch.',
      },
      {
        step: '06',
        title: 'Launch',
        description:
          'Zero-downtime deployment with redirects mapped, search console and analytics verified, editors trained, and monitoring watching it from minute one.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'Best for focused marketing sites',
        price: 'From $4,800',
        features: [
          'Up to 8 pages',
          'Responsive design',
          'CMS integration',
          'Basic analytics',
          '30-day post-launch support',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Best for growing businesses',
        price: 'From $9,500',
        features: [
          'Up to 20 pages',
          'Custom design system',
          'E-commerce or web app',
          'API integrations',
          'Performance optimization',
          '60-day support',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Best for complex digital products',
        price: 'From $22,000',
        features: [
          'Unlimited scope',
          'Full product team',
          'Custom architecture',
          'Ongoing retainer option',
          'Priority support',
        ],
      },
    ],

    results: [
      {
        value: '0.9s',
        label: 'Median load time we ship - because every tenth of a second costs conversions.',
      },
      {
        value: 'Passing',
        label: 'Core Web Vitals on every template we deliver, verified on real mobile hardware.',
      },
      {
        value: '30 days',
        label: 'Post-launch support on every build, with monitoring watching from minute one.',
      },
    ],

    faq: [
      {
        question: 'What technologies do you use?',
        answer:
          'We build on Next.js, React, TypeScript and Node.js, with headless CMS platforms like Sanity and Contentful where editors need control. The stack is chosen for your hosting reality and team - not because it is our favourite.',
      },
      {
        question: 'How long does a web project take?',
        answer:
          'A focused marketing site takes 4-6 weeks from kickoff to launch. E-commerce or web-application builds typically run 8-16 weeks depending on integrations, content volume and approval speed.',
      },
      {
        question: 'Will the site be fast and pass Core Web Vitals?',
        answer:
          'Yes - that is part of the build, not an add-on. We set a performance budget before design begins, test against it on real mobile devices, and verify the scores at launch. If a template fails the budget, it does not ship.',
      },
      {
        question: 'Do you handle design and development together?',
        answer:
          'Yes. Our designers and developers work in parallel from day one, which eliminates the handoff problems that slow most projects down - no designs that cannot be built, no builds that drift from the design.',
      },
      {
        question: 'Can you work with our existing codebase?',
        answer:
          'Absolutely. We regularly audit, refactor and extend existing codebases. We start with a technical review to understand what you have - what is solid, what is fragile, what is cheaper to rebuild - before proposing anything.',
      },
      {
        question: 'Who owns the site at the end?',
        answer:
          'You do - code, content, accounts and documentation transfer in full at handover. There is no lock-in and no ransom on your own platform.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'All projects include a post-launch support period. We also offer ongoing retainers for teams that need continuous development, monitoring and iteration.',
      },
    ],
    metaTitle: 'Web Development - Fast, Search-Ready Websites | AgencyStudio',
    metaDescription:
      'High-performance marketing websites, e-commerce and web applications engineered for speed, search visibility and conversion. Discover what a web project covers and costs.',
    relatedProjects: ['elder-india', 'nine-plus-nine-wholesale', 'passport-bangalore'],
  },
  {
    slug: 'app-development',
    number: '02',
    title: 'App Development',
    eyebrow: 'App Development',
    heroHeadline: 'Apps people keep using, not just install.',
    heroDescription:
      'Most apps fail quietly: the majority of users never open them again after the first week. We build around retention from the first sprint - onboarding that teaches in minutes, performance that survives real devices, and release cycles that keep improving the product after launch.',
    shortDescription: 'Mobile experiences built for real users on iOS and Android.',
    description:
      'We design and build native and cross-platform mobile applications that people actually use.',
    heroImage: '',
    heroImageAlt: 'Mobile app interface on smartphone screen showing clean UI design',
    intro: [
      'The app-store graveyard is full of products that were technically finished and practically unusable - beautiful screenshots wrapped around onboarding nobody completes, features nobody asked for, and backends that fall over at a hundred concurrent users. Shipping an app is easy. Shipping one that survives contact with real users is the actual job.',
      'We build apps like products, not projects. That means starting with the smallest version that proves value, putting it in front of real users early, and letting usage data - not opinions in a meeting - decide what gets built next. The same team designs, engineers and iterates, so nothing is lost between a prototype and the production release that replaces it.',
    ],
    whatWeDo: [
      {
        name: 'MVPs that prove the idea',
        description:
          'A ruthlessly scoped first release that tests the core value proposition with real users - built fast, instrumented from day one, and ready to pivot on.',
      },
      {
        name: 'Native iOS and Android builds',
        description:
          'Swift and Kotlin where platform depth matters: camera, Bluetooth, background work, payments, push - the things cross-platform frameworks approximate and native gets right.',
      },
      {
        name: 'Cross-platform delivery',
        description:
          'React Native when speed to both stores matters more than platform edge-cases, with a clear-eyed assessment of the trade-offs before you commit.',
      },
      {
        name: 'Backends, APIs and data',
        description:
          'Auth, databases, file storage, notifications and third-party integrations engineered as a documented API your future team can extend - not a black box.',
      },
      {
        name: 'Store launch, handled end to end',
        description:
          'Submission, review responses, screenshots, listings and staged rollouts for both stores - we have shipped enough apps to know where Apple and Google push back.',
      },
      {
        name: 'Post-launch iteration',
        description:
          'Crash monitoring, analytics and a release cadence that ships improvements weekly, because the launch build is the starting line, not the finish.',
      },
    ],
    capabilities: [
      'iOS Development',
      'Android Development',
      'React Native',
      'App Store Optimization',
      'Push Notifications',
      'Offline Support',
    ],
    deliverables: [
      {
        name: 'iOS Development',
        description:
          'Native iOS apps built with Swift, polished to store standards and ready to ship.',
      },
      {
        name: 'Android Development',
        description: 'Android apps built on native tooling with broad device and version coverage.',
      },
      {
        name: 'Cross-Platform Apps',
        description:
          'One codebase, two platforms - React Native delivery when speed to market matters most.',
      },
      {
        name: 'App Strategy & Scoping',
        description:
          'Feature definition, platform decisions and release planning before a line of code.',
      },
      {
        name: 'App Store Optimization',
        description: 'Listing copy, screenshots and metadata that turn impressions into installs.',
      },
      {
        name: 'Analytics & Iteration',
        description:
          'Usage tracking, crash reporting and release cycles that improve real metrics.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Discovery & Definition',
        description:
          'The job the app must do, the users it serves, and the metric that proves it worked - agreed before any platform decision.',
      },
      {
        step: '02',
        title: 'Product & UX Design',
        description:
          'Clickable prototypes of the critical flows, tested with five real users, so the riskiest assumptions fail cheaply in week two, not month four.',
      },
      {
        step: '03',
        title: 'Architecture',
        description:
          'Backend, API and data model designed for the product you will have in a year - auth, roles, notifications and integrations on a documented surface.',
      },
      {
        step: '04',
        title: 'Development',
        description:
          'Two-week build cycles with testable builds on every Friday, so you watch the app take shape instead of waiting for a big reveal.',
      },
      {
        step: '05',
        title: 'QA & Store Compliance',
        description:
          'Tested on the devices your users actually carry, hardened against the exact things Apple and Google reject apps for.',
      },
      {
        step: '06',
        title: 'Launch & Iteration',
        description:
          'Staged rollout with crash reporting and analytics live from day zero, then an iteration backlog ranked by what the data says users need.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'MVP on one platform',
        price: 'From $7,500',
        features: [
          'Single platform (iOS or Android)',
          'Core user flows',
          'Testflight/beta distribution',
          'Basic analytics',
          'Store submission',
          '30-day post-launch support',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Polished product on both stores',
        price: 'From $16,000',
        features: [
          'iOS and Android',
          'Custom UI/UX design',
          'Auth, payments and push',
          'Backend API and data model',
          'Performance monitoring',
          '60-day support',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Product team for an app with traction',
        price: 'From $38,000',
        features: [
          'Full product team',
          'Custom architecture',
          'Weekly release cadence',
          'Ongoing iteration',
          'Priority support',
        ],
      },
    ],

    results: [
      {
        value: '8-12 wks',
        label: 'Typical window from kickoff to a testable MVP in users’ hands.',
      },
      {
        value: '98%+',
        label: 'Crash-free sessions on launch builds - monitored from day zero.',
      },
      {
        value: '2 stores',
        label: 'One process for iOS and Android: design, QA, submission and rollout.',
      },
    ],

    faq: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer:
          'We recommend the right approach per product. Native is best when performance or platform depth matters; React Native gets you to both stores faster with one codebase. We decide together during scoping.',
      },
      {
        question: 'How long does an MVP take?',
        answer:
          'A focused MVP on one platform typically takes 8-12 weeks from kickoff to store submission. Complex products with custom backends run longer.',
      },
      {
        question: 'What about the backend and data?',
        answer:
          'We build the full stack: auth, databases, file storage, notifications and APIs - documented so your future team can extend them. If you already have a backend, we integrate with it.',
      },
      {
        question: 'Can you take over an existing app?',
        answer:
          'Yes. We start with a technical review of the codebase, architecture and store standing before proposing a plan.',
      },
      {
        question: 'What does store submission involve?',
        answer:
          'We prepare submission materials, manage the review process and handle anything reviewers request so launch is not delayed.',
      },
      {
        question: 'Who owns the app and its accounts?',
        answer:
          'You do. Store listings, signing keys, repositories and infrastructure transfer in full at handover - with documentation your next team can actually use.',
      },
      {
        question: 'What happens after the launch build?',
        answer:
          'The app enters iteration: crash monitoring, analytics reviews and a ranked backlog shipped on a weekly or fortnightly cadence. Launch is the starting line.',
      },
    ],
    metaTitle: 'App Development - MVPs & Mobile Products | AgencyStudio',
    metaDescription:
      'Native and cross-platform app development focused on retention: MVPs, backends, store launch and post-launch iteration. See our process, pricing and FAQs.',
    relatedProjects: ['1onetwo9', 'b24by7-news', 'salestracker'],
  },
  {
    slug: 'seo',
    number: '03',
    title: 'SEO',
    eyebrow: 'SEO',
    heroHeadline: 'Organic growth you can measure in revenue.',
    heroDescription:
      'SEO fails when it is sold as rankings. It works when it is run as a revenue program: technical foundations fixed first, content aimed at pages that can actually rank and convert, and reporting that connects search traffic to money - not just positions.',
    shortDescription: 'Search visibility built around real business goals.',
    description:
      'We build sustainable organic growth through technical SEO, content strategy and authority building.',
    heroImage: '',
    heroImageAlt: '',
    intro: [
      'Most SEO engagements drift because nobody agreed what winning looks like. Rankings move, traffic moves, and yet revenue does not - because the pages that rank were never the pages that could convert. We start every SEO program by modelling where search demand meets your commercial reality: which queries your best customers type, which of your pages can plausibly win them, and what each win is worth.',
      'Then we work the foundations in order. Technical barriers first - crawl, indexation, speed, structured data - because content cannot outrank a site Google cannot read. Content second, aimed at real intent gaps rather than keyword volume. Authority third, earned through digital PR and assets people link to because they are useful. And reporting throughout that ties rankings to sessions to revenue, so the program is steered by money, not vanity.',
    ],
    whatWeDo: [
      {
        name: 'Technical audits and fixes',
        description:
          'Full crawl diagnostics - indexation, canonicals, hreflang, Core Web Vitals, structured data - with fixes prioritised by impact, not by how easy they are to report.',
      },
      {
        name: 'Keyword and demand modelling',
        description:
          'Search demand mapped against your funnel and margins, so effort goes to queries that produce customers, not just clicks.',
      },
      {
        name: 'On-page and template work',
        description:
          'Titles, meta, headings and internal linking rebuilt at the template level - so every new page inherits good SEO instead of depending on someone remembering it.',
      },
      {
        name: 'Content with a job to do',
        description:
          'Buying guides, comparisons and service pages written to a brief that specifies intent, angle and conversion path - reviewed against the pages currently winning.',
      },
      {
        name: 'Authority and digital PR',
        description:
          'Original data, tools and stories journalists and bloggers actually want to cite. Links are the exhaust of useful work, not the work itself.',
      },
      {
        name: 'Revenue-connected reporting',
        description:
          'Rankings, sessions and revenue by page and category, reviewed monthly - so you always know which half of the program is earning its keep.',
      },
    ],
    capabilities: [
      'Technical SEO Audit',
      'Content Strategy',
      'Link Building',
      'Local SEO',
      'E-commerce SEO',
      'SEO Reporting',
    ],
    deliverables: [
      {
        name: 'Technical SEO Audit',
        description:
          'Crawl, indexation, Core Web Vitals and structured-data review - with fixes prioritised by impact.',
      },
      {
        name: 'Keyword & Content Strategy',
        description:
          'Search demand mapped to your funnel, with editorial priorities and clear briefs.',
      },
      {
        name: 'On-Page Optimization',
        description:
          'Title, meta, heading and internal-link work that follows intent, not templates.',
      },
      {
        name: 'Content Production',
        description:
          'Search-led articles, guides and hubs written to earn rankings and convert readers.',
      },
      {
        name: 'Authority Building',
        description: 'Digital PR and link acquisition through genuinely useful, shareable assets.',
      },
      {
        name: 'SEO Reporting',
        description:
          'Rankings, traffic and revenue reporting tied to the business outcomes that matter.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Technical Audit',
        description:
          'A crawl-level diagnosis of what stands between you and rankings - indexation, speed, structure - with every issue priced by impact.',
      },
      {
        step: '02',
        title: 'Strategy',
        description:
          'Demand modelled against funnel and margins, then sequenced: quick wins first, compound plays second, moonshots last.',
      },
      {
        step: '03',
        title: 'On-Page Work',
        description:
          'Templates rebuilt so titles, meta, headings and internal links follow intent automatically - including pages you have not created yet.',
      },
      {
        step: '04',
        title: 'Content',
        description:
          'Briefed, drafted and edited against the pages currently winning your targets - each piece assigned a page to rank and a job to do.',
      },
      {
        step: '05',
        title: 'Authority',
        description:
          'Data, tools and stories pitched to publications that move the needle, building the citation profile competitors cannot copy overnight.',
      },
      {
        step: '06',
        title: 'Measure & Iterate',
        description:
          'Monthly review of rankings, sessions and revenue by category - winners get more budget, losers get diagnosed or dropped.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'Technical foundations, fixed',
        price: 'From $1,900/mo',
        features: [
          'Technical audit & fixes',
          'On-page optimization',
          'Quarterly keyword strategy',
          'Monthly reporting',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Foundations plus a content engine',
        price: 'From $3,500/mo',
        features: [
          'Everything in Essential',
          'Monthly content production',
          'Link acquisition',
          'Traffic and revenue reporting',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Full organic growth program',
        price: 'From $6,500/mo',
        features: [
          'Full SEO program',
          'Multi-market content',
          'Digital PR & authority',
          'Dedicated SEO lead',
        ],
      },
    ],

    results: [
      {
        value: 'Revenue-first',
        label:
          'Every program reports sessions-to-revenue, so growth is proven in money - not impressions.',
      },
      {
        value: '3 layers',
        label:
          'Technical, content and authority worked in order - nothing skipped, nothing duplicated.',
      },
      {
        value: 'Monthly',
        label:
          'Reviews with decisions attached: what earns more budget, what gets fixed, what gets dropped.',
      },
    ],

    faq: [
      {
        question: 'How long until we see results?',
        answer:
          'Technical fixes can move rankings within weeks, but meaningful organic growth typically compounds over 4-6 months. We set staged expectations and report progress monthly.',
      },
      {
        question: 'Do you guarantee rankings?',
        answer:
          'No - and you should be suspicious of anyone who does. We guarantee process, work quality and transparent reporting, and we win on terms where the work is competitive.',
      },
      {
        question: 'What do you need from us to start?',
        answer:
          'Search console and analytics access, a point of contact who can approve publishing, and an hour a month for the review call. We handle everything else - briefs, drafts, outreach and implementation.',
      },
      {
        question: 'Do you rewrite our existing pages?',
        answer:
          'Usually, yes - most sites have pages targeting the right queries with the wrong structure. We rebuild them to match intent, keep what ranks, and redirect what should never have existed.',
      },
      {
        question: 'Can you work alongside our in-house team?',
        answer:
          'Yes. We regularly run technical SEO and strategy while in-house writers produce content under our briefs and templates.',
      },
      {
        question: 'Do you handle technical SEO and content together?',
        answer:
          'Yes - and we recommend it. A technical foundation without content limits growth, and content without a clean technical base rarely ranks.',
      },
      {
        question: 'How do we know the program is working?',
        answer:
          'The monthly report shows rankings, sessions and revenue by page and category. If revenue per category is not moving by month four, we change the plan - and tell you before you have to ask.',
      },
    ],
    metaTitle: 'SEO Services - Organic Growth Tied to Revenue | AgencyStudio',
    metaDescription:
      'Technical SEO, intent-led content and authority building run as a revenue program - with monthly reporting on rankings, sessions and revenue.',
    relatedProjects: [],
  },
  {
    slug: 'graphic-design',
    number: '04',
    title: 'Graphic Design',
    eyebrow: 'Graphic Design',
    heroHeadline: 'Brands people recognise in three seconds.',
    heroDescription:
      'Attention is won before a single word is read - on a shelf, in a feed, on a slide. We build visual systems with a point of view: identity, packaging, collateral and campaign assets that look unmistakably like you, everywhere they appear.',
    shortDescription: 'Visual systems that make brands instantly recognizable.',
    description:
      'Brand identity, visual language and print/digital design that works across every touchpoint.',
    heroImage: '',
    heroImageAlt:
      'Brand identity design materials including logo, color palette, and typography laid out on a clean white surface',
    intro: [
      'Most design work fails the three-second test. A customer glances at a pack, a post or a pitch deck - and nothing registers. Not because the product is bad, but because the visuals say nothing distinctive: stock layouts, borrowed trends, a logo that could belong to anyone. In crowded categories, forgettable is expensive.',
      'Our design work starts with positioning, not decoration. Who are you for, what must people feel in the first glance, and where will this actually live - shelf, screen, stage? From there we build a system, not a set of files: colour, type, layout rules and image direction that hold together across a business card and a billboard, and that your team can extend without a designer in the room.',
    ],
    whatWeDo: [
      {
        name: 'Brand identity from scratch',
        description:
          'Naming support, logo, colour, typography and art direction - a complete identity with the reasoning documented, delivered with usage rules that survive contact with reality.',
      },
      {
        name: 'Packaging that wins the shelf',
        description:
          'Structural thinking, hierarchy and print craft for physical products - tested against the actual shelf context, not just a flat mockup.',
      },
      {
        name: 'Marketing and sales collateral',
        description:
          'Brochures, one-pagers, decks and leave-behinds designed around the argument they must make, in rooms you will never be in.',
      },
      {
        name: 'Social and campaign creatives',
        description:
          'Feed-first static and layout systems for launches and always-on content - built as templates your team can run with.',
      },
      {
        name: 'Presentation systems',
        description:
          'Investor decks, sales decks and keynote systems with real hierarchy: the story carries, the numbers land, and every slide looks like the same company made it.',
      },
      {
        name: 'Print management',
        description:
          'Stock, finishes, colour proofs and supplier liaison - because a beautiful file that prints badly is not beautiful.',
      },
    ],
    capabilities: [
      'Brand Identity',
      'Logo Design',
      'Typography Systems',
      'Print Design',
      'Illustration',
      'Brand Guidelines',
    ],
    deliverables: [
      {
        name: 'Brand Identity',
        description:
          'Logo, colour and typography systems that make the brand instantly recognisable.',
      },
      {
        name: 'Visual Language',
        description:
          'Design principles, photography direction and graphic devices that keep everything on-brand.',
      },
      {
        name: 'Packaging & Print',
        description: 'Shelf-ready packaging, collateral and print production managed end to end.',
      },
      {
        name: 'Marketing Collateral',
        description: 'Campaign key visuals, decks, ads and social templates from one system.',
      },
      {
        name: 'Rebrands & Refreshes',
        description:
          'Evolution of an existing identity - updating what dates the brand while protecting the recognition it has earned.',
      },
      {
        name: 'Brand Guidelines',
        description: 'Documented standards that keep the brand consistent as your team scales.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Discovery & Positioning',
        description:
          'A working session on audience, competitors and the feeling the brand must own - ending in a positioning statement we both sign off on.',
      },
      {
        step: '02',
        title: 'Research & Moodboards',
        description:
          'The category mapped visually: who looks like what, where the gaps are, and three territories worth exploring before any logo is drawn.',
      },
      {
        step: '03',
        title: 'Design Explorations',
        description:
          'Two distinct creative routes presented in context - on packs, screens and print - with the reasoning behind each, not a menu of marks.',
      },
      {
        step: '04',
        title: 'Refinement',
        description:
          'The chosen route stress-tested across real applications: small sizes, bad printers, dark mode, awkward photography. Weaknesses fixed now, not later.',
      },
      {
        step: '05',
        title: 'Build the System',
        description:
          'Everything codified - colour values, type scales, layout rules, image direction - so the tenth supplier and the tenth teammate get it right too.',
      },
      {
        step: '06',
        title: 'Handover & Guidelines',
        description:
          'Files, fonts, templates and a guidelines walkthrough with your team - plus 30 days of questions answered while the system beds in.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'A sharp identity for a focused brand',
        price: 'From $3,200',
        features: [
          'Logo system',
          'Core colour & type',
          'Business stationery',
          'Digital usage files',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Identity plus the system to run it',
        price: 'From $6,800',
        features: [
          'Full identity system',
          'Typography & colour systems',
          'Brand guidelines',
          'Marketing template pack',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Identity rolled out across touchpoints',
        price: 'From $12,000',
        features: [
          'Complete brand system',
          'Packaging or campaign rollout',
          'Photography direction',
          'Ongoing design support',
        ],
      },
    ],

    results: [
      {
        value: '3 sec',
        label: 'The recognition window every identity is designed against - shelf, feed or slide.',
      },
      {
        value: '1 system',
        label:
          'One documented system covering print, digital and packaging - no parallel versions.',
      },
      {
        value: '30 days',
        label: 'Post-handover support while your team and suppliers bed the system in.',
      },
    ],

    faq: [
      {
        question: 'How many concepts do we get?',
        answer:
          'We develop two to three distinct design routes and present them with the reasoning behind each. Refinement happens on the strongest route rather than across all of them.',
      },
      {
        question: 'What if we do not like the direction?',
        answer:
          'Direction changes are part of the process up to a point. We agree on the positioning before design begins so feedback is about execution, not foundation.',
      },
      {
        question: 'Do you handle naming too?',
        answer:
          'Yes - shortlists with trademark and domain screening, tested against the positioning. Naming sits inside the identity engagement rather than as a separate invoice.',
      },
      {
        question: 'Do you deliver print-ready files?',
        answer:
          'Yes - press-ready print files, editable source files and digital exports, all organised and documented for your team.',
      },
      {
        question: 'Can you design packaging from scratch?',
        answer:
          'Yes, including structural thinking, dielines liaison with your printer, hierarchy for the shelf, and variants that stay distinguishable at a glance.',
      },
      {
        question: 'Can you extend an existing brand?',
        answer:
          'Yes. Auditing what you have and extending the system is often faster and safer than starting over.',
      },
      {
        question: 'Will our team be able to use the system?',
        answer:
          'That is the point of the guidelines and templates: a non-designer should be able to produce an on-brand social post or one-pager. We run a handover session to prove it.',
      },
    ],
    metaTitle: 'Graphic Design - Brand Identity & Packaging | AgencyStudio',
    metaDescription:
      'Brand identity, packaging, collateral and campaign systems designed for instant recognition. See what a graphic design engagement covers and costs.',
    relatedProjects: [],
  },
  {
    slug: 'ui-ux-design',
    number: '05',
    title: 'UI/UX Design',
    eyebrow: 'UI/UX Design',
    heroHeadline: 'Interfaces that feel obvious - because the research was not.',
    heroDescription:
      'Confusing products are not a taste problem; they are an evidence problem. We study how your users actually behave, prototype the riskiest flows first, and hand developers a system - so what ships feels effortless and converts better.',
    shortDescription: 'Interfaces designed around how people actually behave.',
    description:
      'Research-driven UI/UX design that reduces friction, increases conversion and makes products feel effortless.',
    heroImage: '',
    heroImageAlt:
      'UI/UX design process with wireframes, prototypes, and design mockups displayed on tablet and desktop screens',
    intro: [
      'Every product team has a version of the same argument: users “should” understand this screen, this flow, this button. And every support queue proves they do not. The gap between what a team finds obvious and what a first-time user finds obvious is where signups die, carts get abandoned and features go unused - and opinion cannot close it. Only watching real people try will.',
      'That is what our UI/UX engagements do. We research behaviour before drawing screens, prototype the flows that carry the most commercial risk, and test them with users before engineering commits. What ships is then built on a design system with tokens, components and documentation - so developers build exactly what was tested, and the next feature does not reopen every old argument.',
    ],
    whatWeDo: [
      {
        name: 'Research that finds the real friction',
        description:
          'Interviews, session analysis and task-based testing that separate what users say from what they do - documented as findings, not vibes.',
      },
      {
        name: 'Information architecture',
        description:
          'Navigation, page hierarchy and content grouping rebuilt around mental models - card sorts and tree tests where the stakes justify them.',
      },
      {
        name: 'Flows and wireframes',
        description:
          'The skeleton of the product: critical journeys mapped screen by screen, stripped of visual noise so structure can be argued about honestly.',
      },
      {
        name: 'High-fidelity interface design',
        description:
          'Production-ready screens with real content, real states and real edge cases - empty, loading, error and permission-denied included.',
      },
      {
        name: 'Prototypes for decisions',
        description:
          'Clickable prototypes tuned to the question at hand: user testing, stakeholder sign-off, or fundraising - each with a different level of polish.',
      },
      {
        name: 'Design systems and handoff',
        description:
          'Tokens, components and usage rules in Figma, plus annotated handoff and office hours with engineers - so the build matches the design.',
      },
    ],
    capabilities: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Usability Testing',
      'Interaction Design',
    ],
    deliverables: [
      {
        name: 'User Research',
        description:
          'Interviews, testing and analytics review that ground design decisions in real behaviour.',
      },
      {
        name: 'Flow & Wireframe Design',
        description:
          'User journeys and wireframes that validate structure before a pixel of visual design.',
      },
      {
        name: 'Interactive Prototypes',
        description:
          'Clickable prototypes for user testing, stakeholder sign-off and developer reference.',
      },
      {
        name: 'UI Design',
        description: 'High-fidelity screens built on a coherent, intentional visual system.',
      },
      {
        name: 'Design Systems',
        description:
          'Tokens, components and documentation that keep product teams fast and consistent.',
      },
      {
        name: 'Usability Testing',
        description: 'Structured tests that catch friction before it ships to real users.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Research',
        description:
          'Five to eight user interviews plus analytics review, ending in a findings doc ranked by commercial damage - worst friction first.',
      },
      {
        step: '02',
        title: 'Definition',
        description:
          'The flows we will fix, the metric each must move, and the scope line: what changes and what stays. Signed off before a screen is drawn.',
      },
      {
        step: '03',
        title: 'Wireframes',
        description:
          'Grey-box structure of every critical journey. You review flows, not fonts - so structural mistakes die while they are cheap.',
      },
      {
        step: '04',
        title: 'Prototypes & Testing',
        description:
          'Clickable prototypes tested with real users on their own devices. Two rounds minimum: find the breakage, fix it, prove the fix.',
      },
      {
        step: '05',
        title: 'UI Design',
        description:
          'Visual design applied to tested structure - real content, all states, accessibility contrast checked - in a component system, not one-off screens.',
      },
      {
        step: '06',
        title: 'Design System & Handoff',
        description:
          'Tokens, components and documentation in Figma, annotated for engineers, with office hours during build so nothing gets lost in translation.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'One flow, fixed properly',
        price: 'From $4,200',
        features: [
          'Targeted user research',
          'Wireframes & flows',
          'High-fidelity UI',
          'Developer handoff',
        ],
      },
      {
        name: 'Growth',
        tagline: 'A full surface, tested end to end',
        price: 'From $9,800',
        features: [
          'Research & testing',
          'Complete UX journey',
          'Full UI design',
          'Interactive prototype',
          'Usability testing',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Research plus a living design system',
        price: 'From $18,000',
        features: [
          'Deep research program',
          'Full redesign or new product',
          'Design system',
          'Embedded design support',
        ],
      },
    ],

    results: [
      {
        value: '2 rounds',
        label: 'Minimum user-testing rounds on every engagement - find it, fix it, prove it.',
      },
      {
        value: 'All states',
        label: 'Empty, loading, error and permission states designed - the screens teams forget.',
      },
      {
        value: '1 system',
        label: 'Tokens, components and docs your engineers build from - not screenshots.',
      },
    ],

    faq: [
      {
        question: 'Do you run user testing?',
        answer:
          'Yes. Depending on scope we run moderated interviews, unmoderated tests or prototype tests - and we design with them from the start rather than as a final check.',
      },
      {
        question: 'What do you need from us to do research?',
        answer:
          'Access to five to eight users - customers, trial users, or a recruited panel we organise - plus your analytics and support tickets. We handle recruiting, scripting, sessions and synthesis.',
      },
      {
        question: 'Can you work with our existing product?',
        answer:
          'Absolutely. Much of our best work is improving an existing product rather than starting fresh - audits, redesigns and design-system rollouts.',
      },
      {
        question: 'What do you deliver for developers?',
        answer:
          'A design system with tokens and components, annotated screens, prototypes and a structured handoff - plus a working relationship through implementation.',
      },
      {
        question: 'Do you design in Figma?',
        answer:
          'Yes - component-based files with auto-layout, variants and design tokens, organised so your team can maintain them after handover.',
      },
      {
        question: 'How do you measure design success?',
        answer:
          'Against the metrics defined at the start - activation, completion time, conversion, error rate - not against aesthetic opinion.',
      },
      {
        question: 'Can you redesign without breaking what works?',
        answer:
          'Yes. Research tells us which parts users rely on, and we protect those while fixing the rest. Big-bang redesigns are a last resort, not a default.',
      },
    ],
    metaTitle: 'UI/UX Design - Research-Led Interfaces | AgencyStudio',
    metaDescription:
      'User research, flows, prototypes, tested UI and design systems that reduce friction and lift conversion. See our UX process, pricing and FAQs.',
    relatedProjects: ['elder-india', 'nine-plus-nine-wholesale', 'passport-bangalore'],
  },
  {
    slug: 'video-editing',
    number: '06',
    title: 'Video Editing',
    eyebrow: 'Video Editing',
    heroHeadline: 'Cuts that hold attention - on every platform.',
    heroDescription:
      'Nobody finishes a boring video. And nobody converts from one they never finish. We edit for the first three seconds first: pacing, story and captions engineered per platform, so viewers stay, understand and act.',
    shortDescription: 'Video content that communicates clearly and converts.',
    description:
      'From brand films to social content - edited, colour-graded and delivered for every platform.',
    heroImage: '',
    heroImageAlt:
      'Video editing workspace with timeline software open on a large monitor in a professional studio with cinematic lighting',
    intro: [
      'Video is where most marketing fails hardest - not for lack of footage, but for lack of an edit. Hours of raw material arrive with no story, no hook and captions added as an afterthought. The result plays like a meeting recording: technically watchable, practically skipped at second four.',
      'Editing is where attention is actually manufactured. We cut for retention first: the hook in the first three seconds, the story beat every fifteen, the caption file that carries the silent majority. Every deliverable is mastered per platform - aspect ratio, safe zones, sound-off legibility, length - because a video edited for YouTube and posted to TikTok performs like neither.',
    ],
    whatWeDo: [
      {
        name: 'Short-form social edits',
        description:
          'Reels, TikToks and Shorts cut for the scroll: cold opens, jump-cut pacing, burnt-in captions styled to your brand - delivered in batches, not one-offs.',
      },
      {
        name: 'Product and demo videos',
        description:
          'Screen recordings and footage turned into explainers a prospect can follow without sound: callouts, pacing matched to the learning curve, chapters where they help.',
      },
      {
        name: 'Paid social ad creatives',
        description:
          'Hook-first variants built for testing - same message, three opens, three endings - so media buyers get creative volume instead of one fragile hero.',
      },
      {
        name: 'Brand films and interviews',
        description:
          'Longer pieces with actual structure: selects, story arcs, B-roll that earns its place, and a grade that looks intentional rather than filtered.',
      },
      {
        name: 'Motion graphics and captions',
        description:
          'Titles, lower-thirds, animated callouts and animated captions - plus accurate caption files in every format platforms demand.',
      },
      {
        name: 'Platform masters and libraries',
        description:
          'Every edit delivered as 16:9, 9:16 and 1:1 masters with organised project files - so future edits start from your library, not from zero.',
      },
    ],
    capabilities: [
      'Brand Films',
      'Social Content',
      'Product Videos',
      'Motion Graphics',
      'Colour Grading',
      'Captions & Subtitles',
    ],
    deliverables: [
      {
        name: 'Brand Films',
        description:
          'Narrative films that communicate what a business actually does - clearly and memorably.',
      },
      {
        name: 'Product & Demo Videos',
        description: 'Explainer and product videos built for the page, the pitch and the press.',
      },
      {
        name: 'Social Content',
        description:
          "Vertical, sound-off-first edits cut for each platform's rhythms and audience.",
      },
      {
        name: 'Ad Creative',
        description: 'Paid cuts engineered for hook rate, retention and conversion.',
      },
      {
        name: 'Motion Graphics',
        description:
          'Animated titles, captions, product moves and lower-thirds that add meaning, not noise.',
      },
      {
        name: 'Post-Production',
        description: 'Colour grading, audio clean-up, captions and master exports in every format.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Brief & Review',
        description:
          'We watch everything first: the footage, the audience, the platforms. Then a one-page treatment agrees the story, the length and the deliverables.',
      },
      {
        step: '02',
        title: 'Edit Structure',
        description:
          'Selects and a rough assembly lock the narrative arc before any polish - so feedback happens when changes are cheap.',
      },
      {
        step: '03',
        title: 'First Cut',
        description:
          'A full watchable pass with temp captions. You review story and pacing, not pixels - frame notes come next.',
      },
      {
        step: '04',
        title: 'Motion & Grade',
        description:
          'Titles, lower-thirds, motion callouts, colour grade and audio mix - the finish that makes it feel produced rather than assembled.',
      },
      {
        step: '05',
        title: 'Platform Masters',
        description:
          'Each edit reframed per platform: 16:9, 9:16, 1:1, safe zones checked, captions burnt in or exported as files per spec.',
      },
      {
        step: '06',
        title: 'Delivery & Library',
        description:
          'Masters, project files and a selects library archived and organised - so the next brief starts from footage, not from scratch.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'One finished piece, done properly',
        price: 'From $1,200',
        features: [
          'One edit, one cut',
          'Platform master',
          'Captions & subtitles',
          'Colour grading',
        ],
      },
      {
        name: 'Growth',
        tagline: 'A launch with content to sustain it',
        price: 'From $2,800',
        features: [
          'Brand film or hero edit',
          'Social pack (3-5 cuts)',
          'Motion graphics',
          'Platform masters',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Always-on video output',
        price: 'From $6,500/mo',
        features: [
          'Monthly content volume',
          'Dedicated editor',
          'Full creative direction',
          'Fast turnaround',
        ],
      },
    ],

    results: [
      {
        value: '3 sec',
        label: 'Every edit is engineered around the hook window - attention first, story second.',
      },
      {
        value: '3 ratios',
        label: '16:9, 9:16 and 1:1 masters on every deliverable - no cropped-afterthought exports.',
      },
      {
        value: '100%',
        label: 'Caption coverage on social cuts - because the majority watch without sound.',
      },
    ],

    faq: [
      {
        question: 'Can you work with footage we have already shot?',
        answer:
          'Yes - reviewing, structuring and finishing existing footage is most of what we do. We will tell you honestly what is usable and what is missing.',
      },
      {
        question: 'How do you approach the first three seconds?',
        answer:
          'The hook is cut before anything else: a cold open, a question, or the payoff framed as a promise. If the first three seconds do not earn the next ten, the rest of the edit is decoration.',
      },
      {
        question: 'Do you plan shoots or just edit?',
        answer:
          'Both. We can direct, plan and art-direct shoots, or simply take raw footage and make it excellent. Most clients start with editing and add production later.',
      },
      {
        question: 'What formats do you deliver?',
        answer:
          'Platform-specific masters - 16:9, 1:1, 9:16 - with and without captions, plus broadcast-grade exports and organised source files.',
      },
      {
        question: 'How do you keep captions accurate?',
        answer:
          'Captions are placed by hand for timing and readability, then exported as burn-in or sidecar files - not left to auto-generator guesses.',
      },
      {
        question: 'Can you cut ad variants for testing?',
        answer:
          'Yes - that is one of the highest-value uses of editing. Same message with different hooks and endings, delivered as a set so media teams can test instead of guess.',
      },
      {
        question: 'Who owns the project files?',
        answer:
          'You do. Timelines, selects, graphics and exports are archived and handed over in full - no ransom, no mystery formats.',
      },
    ],
    metaTitle: 'Video Editing - Retention-First Cuts | AgencyStudio',
    metaDescription:
      'Video editing for social, ads and brand films: hooks, pacing, captions and platform masters. See our editing process, pricing and FAQs.',
    relatedProjects: [],
  },
  {
    slug: 'ad-marketing',
    number: '07',
    title: 'Ad Marketing',
    eyebrow: 'Ad Marketing',
    heroHeadline: 'Paid media that answers to the P&L.',
    heroDescription:
      'Ad accounts do not fail from lack of spend - they fail from untested creative, fuzzy targets and landing pages that leak. We run paid as a controlled experiment: clear unit economics first, creative tested in volume, budgets that follow evidence, not hope.',
    shortDescription: 'Paid campaigns engineered for measurable return.',
    description:
      'Paid search, paid social and display campaigns built around your acquisition goals and unit economics.',
    heroImage: '',
    heroImageAlt: '',
    intro: [
      'Every wasted ad pound has the same root cause: the account was optimised for the platform, not for the business. Clicks go up, costs go up, and the finance team asks an awkward question nobody can answer - what did this actually make? The distance between platform metrics and commercial reality is where paid budgets quietly die.',
      'We close that distance before spending a penny. First we agree the numbers that matter: allowable acquisition cost, payback window, the landing pages that must convert. Then we build the machine - account structure, tracking you can trust, creative produced in testable volume - and scale only what the data defends. When something stops working, you hear it from us first, with the plan attached.',
    ],
    whatWeDo: [
      {
        name: 'Paid search that captures intent',
        description:
          'Google and Bing campaigns structured around commercial intent - exact-match discipline, negative hygiene, and Quality Score work that lowers the cost of every click.',
      },
      {
        name: 'Paid social that earns attention',
        description:
          'Meta, TikTok and LinkedIn campaigns with creative testing built in: hooks, angles and formats rotated on a calendar, losers killed fast, winners scaled deliberately.',
      },
      {
        name: 'Landing pages that convert',
        description:
          'Dedicated pages matched to each campaign and audience - message match, proof placement and forms tested, because the ad is only half the funnel.',
      },
      {
        name: 'Creative production for testing',
        description:
          'Static, video and UGC-style creative produced in batches with testing hypotheses attached - volume is the strategy, not a luxury.',
      },
      {
        name: 'Tracking you can actually trust',
        description:
          'Server-side tagging, conversion APIs and CRM import - so optimisation and reporting run on revenue data, not modelled guesses.',
      },
      {
        name: 'Budget governance and reporting',
        description:
          'Weekly spend reviews against CAC and ROAS targets, with a single report that shows spend, revenue and what we are doing next.',
      },
    ],
    capabilities: [
      'Google Ads',
      'Meta Ads',
      'LinkedIn Ads',
      'Retargeting',
      'Creative Testing',
      'Campaign Analytics',
    ],
    deliverables: [
      {
        name: 'Paid Search',
        description:
          'Google Ads structured around commercial intent, quality score and clean account architecture.',
      },
      {
        name: 'Paid Social',
        description: 'Meta, LinkedIn and TikTok campaigns built on structured creative testing.',
      },
      {
        name: 'Display & Retargeting',
        description: 'Programmatic display and win-back funnels that convert warm audiences.',
      },
      {
        name: 'Creative Testing',
        description:
          'A production pipeline that tests hooks, formats and angles against real data.',
      },
      {
        name: 'Landing Pages',
        description: 'Conversion-focused pages that carry traffic from click to action.',
      },
      {
        name: 'Campaign Analytics',
        description: 'Blended CAC, payback and ROAS reporting tied to business outcomes.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Audit & Unit Economics',
        description:
          'Existing accounts forensically reviewed; allowable CAC, payback and targets agreed from your margins - the numbers everything else answers to.',
      },
      {
        step: '02',
        title: 'Channel Strategy',
        description:
          'Search, social and display allocated by intent and economics - where each pound works hardest, with test budgets ring-fenced.',
      },
      {
        step: '03',
        title: 'Creative Production',
        description:
          'First test batch produced with hypotheses: hooks, angles, formats. Volume planned on a calendar, not begged for mid-month.',
      },
      {
        step: '04',
        title: 'Launch & Testing',
        description:
          'Campaigns live with tracking verified end to end - server-side where it counts - and kill criteria agreed before spend starts.',
      },
      {
        step: '05',
        title: 'Optimization',
        description:
          'Weekly reallocation to proven winners: bids, budgets, audiences and landing pages tuned against CAC, not click-through rate.',
      },
      {
        step: '06',
        title: 'Scale & Report',
        description:
          'Winners scaled in deliberate steps with creative refreshed to fight fatigue; one report shows spend, revenue and the next move.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'One channel, run properly',
        price: 'From $1,500/mo',
        features: [
          'One channel (search or social)',
          'Campaign setup & management',
          'Basic creative',
          'Monthly reporting',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Search plus social with testing',
        price: 'From $3,200/mo',
        features: [
          'Search + social',
          'Creative testing program',
          'Landing pages',
          'Weekly optimization',
          'Blended CAC reporting',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Full-funnel paid operation',
        price: 'From $6,000/mo',
        features: [
          'Full-funnel media',
          'In-house creative engine',
          'Retargeting & win-back',
          'Dedicated media lead',
        ],
      },
    ],

    results: [
      {
        value: 'CAC-first',
        label:
          'Every account optimised against allowable acquisition cost - not clicks, not impressions.',
      },
      {
        value: 'Weekly',
        label: 'Budget reallocation rhythm: winners funded, losers killed, fatigue watched.',
      },
      {
        value: '1 report',
        label:
          'Spend, revenue and next actions in one place - readable by finance, not just media buyers.',
      },
    ],

    faq: [
      {
        question: 'What ad platforms do you run?',
        answer:
          'Google Search, Meta, LinkedIn, TikTok and programmatic display. We recommend the channels that fit your buyer - not the ones we happen to be fluent in (though we are fluent in most).',
      },
      {
        question: 'How much should we spend on ads?',
        answer:
          'Enough to test properly: as a rule, a monthly test budget of at least 3-5x your target acquisition cost per audience, sustained for 6-8 weeks. We will tell you honestly if your budget cannot buy a statistically meaningful test.',
      },
      {
        question: 'How do you handle creative?',
        answer:
          'Creative is a structured testing system, not a monthly guess. Hooks and formats are produced in batches, tested against data, and winning angles are scaled.',
      },
      {
        question: 'Do you build landing pages?',
        answer:
          'Yes - and we usually insist on it, because sending paid traffic to a generic homepage is the fastest way to burn budget. Campaign-matched pages with message match are part of Growth and Scale.',
      },
      {
        question: 'What reporting do we get?',
        answer:
          'A single dashboard tying spend, creative performance and revenue, plus a monthly narrative: what worked, what did not, and what we will do next.',
      },
      {
        question: 'How fast will we see results?',
        answer:
          'Search campaigns can convert within days; social testing needs 4-6 weeks of structured experiments before scaling. Anyone promising instant ROAS is selling you their retainer, not your growth.',
      },
      {
        question: 'Can you scale spend up and down?',
        answer:
          'Yes. Campaigns are built with controls and testing budgets so spend can flex with the season, the product launch or the business cycle without losing structure.',
      },
    ],
    metaTitle: 'Ad Marketing - Paid Media That Answers to the P&L | AgencyStudio',
    metaDescription:
      'Google and Meta ads run against unit economics: creative testing, landing pages, trustworthy tracking and CAC-first reporting. See process, pricing and FAQs.',
    relatedProjects: [],
  },
  {
    slug: 'social-media-management',
    number: '08',
    title: 'Social Media Management',
    eyebrow: 'Social Media',
    heroHeadline: 'A presence that compounds - not posts that fill a calendar.',
    heroDescription:
      'Dead feeds do not come from lack of posting; they come from posts nobody needed. We run social as an editorial operation: a point of view, a content system, real community management - and reporting that separates attention from vanity.',
    shortDescription: 'Consistent brand presence across the channels that matter.',
    description:
      'Content strategy, creation and community management that builds an audience and keeps them engaged.',
    heroImage: '',
    heroImageAlt: '',
    intro: [
      'The average brand account is a chore to follow: announcements nobody asked for, trends chased three weeks late, engagement that consists of replying “thanks!” to compliments. The platforms reward something else entirely - consistency, native formats, and accounts that behave like publishers rather than billboards.',
      'That is how we run it. Every engagement starts with positioning: what this account is for, who must follow it, and what success looks like in pipeline terms, not follower counts. Then we build the machine: content pillars, a production calendar, creative direction that holds across formats, publishing handled end to end, and community management that treats comments and DMs as a sales channel - because they are.',
    ],
    whatWeDo: [
      {
        name: 'Channel strategy and positioning',
        description:
          'Which platforms earn their keep for your buyers, what each account is for, and the voice and visual rules that keep it coherent.',
      },
      {
        name: 'Content pillars and calendars',
        description:
          'Themes mapped to funnel stages, planned a month ahead - so content serves the business instead of reacting to the week.',
      },
      {
        name: 'Creative production',
        description:
          'Static, carousel, short-form video and stories produced in-house to one art direction - native to each platform, not resized everywhere.',
      },
      {
        name: 'Publishing and scheduling',
        description:
          'Posting, captions, hashtags, tagging and first-comment strategy handled - with a review loop that keeps approvals fast and quality high.',
      },
      {
        name: 'Community management',
        description:
          'Comments answered, DMs triaged, conversations started - with escalation paths to your team when a thread needs an insider.',
      },
      {
        name: 'Reporting that means something',
        description:
          'Reach, saves, shares, profile actions and pipeline contribution by platform - plus what we are changing next month based on it.',
      },
    ],
    capabilities: [
      'Content Strategy',
      'Content Creation',
      'Community Management',
      'Analytics',
      'Influencer Outreach',
      'Platform Growth',
    ],
    deliverables: [
      {
        name: 'Content Strategy',
        description:
          'Channel plans and content pillars tied to real business goals, not vanity metrics.',
      },
      {
        name: 'Content Creation',
        description: 'Posts, stories, reels and video edits produced consistently on brand.',
      },
      {
        name: 'Community Management',
        description: 'Comments, DMs and engagement that build relationships, not just reach.',
      },
      {
        name: 'Influencer Outreach',
        description:
          'Structured collaborations that introduce the brand to relevant new audiences.',
      },
      {
        name: 'Analytics & Reporting',
        description:
          'Growth, engagement and conversion reporting - monthly, honest and actionable.',
      },
      {
        name: 'Platform Growth',
        description: 'Profile optimisation, cross-promotion and content testing that grows reach.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Audit & Positioning',
        description:
          'Current channels scored honestly: what earns attention, what earns pipeline, what is dead weight - plus competitors dissected for gaps.',
      },
      {
        step: '02',
        title: 'Content Strategy',
        description:
          'Pillars, formats and a voice guide agreed against pipeline goals - with example posts so “on-brand” is visible, not vibes.',
      },
      {
        step: '03',
        title: 'Production',
        description:
          'Monthly batches shot, designed and written ahead of schedule - approved in one review round, not a daily message thread.',
      },
      {
        step: '04',
        title: 'Scheduling & Publishing',
        description:
          'Published natively per platform at tested times, with captions, tagging and first comments handled - no autopost-and-pray.',
      },
      {
        step: '05',
        title: 'Community & Engagement',
        description:
          'Daily comment and DM management with escalation paths to your team - every conversation treated as pipeline until proven otherwise.',
      },
      {
        step: '06',
        title: 'Report & Iterate',
        description:
          'Monthly readout on attention and pipeline by platform - pillars reweighted, formats retired or doubled down, next month planned.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'One channel, run like a publisher',
        price: 'From $1,200/mo',
        features: ['1 platform', '12 posts / month', 'Community management', 'Monthly reporting'],
      },
      {
        name: 'Growth',
        tagline: 'Multi-platform with video',
        price: 'From $2,400/mo',
        features: [
          '3 platforms',
          'Posts + stories + reels',
          'Content creation & scheduling',
          'Community management',
          'Monthly strategy call',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Full editorial operation',
        price: 'From $4,200/mo',
        features: [
          'All platforms that matter',
          'Video & creative production',
          'Influencer outreach',
          'Paid amplification support',
        ],
      },
    ],

    results: [
      {
        value: '30 days',
        label: 'Content planned a month ahead - no scrambling, no filler, no missed moments.',
      },
      {
        value: 'Daily',
        label: 'Community management cadence: comments and DMs handled as pipeline.',
      },
      {
        value: 'Monthly',
        label: 'Reporting that reweights pillars and formats - the strategy visibly evolves.',
      },
    ],

    faq: [
      {
        question: 'Which platforms should we be on?',
        answer:
          'The ones your customers use to make decisions - which is rarely all of them. We audit where your audience actually is and build a presence there properly.',
      },
      {
        question: 'Do you create the content or just post it?',
        answer:
          'We produce the full content - strategy, design, copy and video - in-house. If you have an in-house creative team, we can run strategy and publishing while they create.',
      },
      {
        question: 'How do you handle approvals?',
        answer:
          'One monthly batch review with a 48-hour turnaround window. Urgent moments get a same-day path. Slow approvals are the number-one killer of social momentum, so the process is designed to prevent them.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'Against goals set at the start: reach, engagement, traffic, and where it is measurable, enquiries and sales. Vanity metrics are reported but never allowed to define the work.',
      },
      {
        question: 'How quickly do you respond to comments and DMs?',
        answer:
          'Within hours during business hours for managed accounts. Response speed is a ranking signal and a relationship signal, so we treat it seriously.',
      },
      {
        question: 'Can you work with our in-house marketer?',
        answer:
          'Yes - that is a common setup. We run the editorial system and production; your marketer owns approvals and internal coordination. Monthly strategy calls keep both sides aligned.',
      },
      {
        question: 'Do you do paid social too?',
        answer:
          'Amplification and boosting sit inside Scale. Full paid campaigns - creative testing, budgets, CAC targets - belong to our Ad Marketing service, and the two work best run together.',
      },
    ],
    metaTitle: 'Social Media Management - Editorial-Grade Presence | AgencyStudio',
    metaDescription:
      'Social media strategy, production, publishing and community management run as an editorial operation. See what a managed presence covers and costs.',
    relatedProjects: [],
  },
  {
    slug: 'automation',
    number: '09',
    title: 'Automation',
    eyebrow: 'Automation',
    heroHeadline: 'Hours back every week - without hiring.',
    heroDescription:
      'Copy-paste work is a tax your team pays every day: retyping leads, chasing approvals, rebuilding the same report weekly. We find where the hours leak, automate the judgement-free middle, and measure the return in time returned - usually within the first month.',
    shortDescription: 'Workflows that remove manual work and scale without headcount.',
    description:
      'Business process automation, API integrations and custom tooling that frees your team to focus on work that matters.',
    heroImage: '',
    heroImageAlt: '',
    intro: [
      'Nobody joins a company to retype data between systems - yet in most businesses that is half the job. Quotes copied into spreadsheets, leads sitting unassigned for days, invoices chased by hand, the same weekly report rebuilt from scratch. It does not feel like a big problem because it happens in ten-minute increments. Add it up and it is usually a full salary, sometimes several.',
      'Automation done well does not replace judgement; it removes everything around it. We map the workflow as it actually runs - spreadsheets, inboxes, workarounds included - then automate the repeatable middle: capture, route, sync, notify, report. Exceptions surface to humans with context instead of vanishing. And every workflow ships with a measured baseline, so you see the hours returned rather than taking our word for it.',
    ],
    whatWeDo: [
      {
        name: 'Lead capture and routing',
        description:
          'Every enquiry captured, enriched, scored and routed to the right person in minutes - with SLAs visible, so nothing sits unassigned over a weekend.',
      },
      {
        name: 'CRM cleanup and automation',
        description:
          'Pipelines, stages, reminders and follow-up sequences rebuilt so the CRM reflects reality - and updates itself instead of relying on memory.',
      },
      {
        name: 'Approvals and notifications',
        description:
          'Quotes, expenses, time-off and content approvals routed with one-click decisions and automatic chasing - no more “just checking on this” threads.',
      },
      {
        name: 'Data sync between systems',
        description:
          'CRM, finance, support and marketing tools kept in agreement through APIs and webhooks - enter data once, trust it everywhere.',
      },
      {
        name: 'AI-assisted workflows',
        description:
          'Summarisation, classification, drafting and extraction where a model genuinely helps - always with a human checkpoint where accuracy matters.',
      },
      {
        name: 'Reporting that runs itself',
        description:
          'Dashboards and scheduled digests generated from live data - the weekly report your team rebuilds by hand, delivered without the rebuilding.',
      },
    ],
    capabilities: [
      'Workflow Automation',
      'CRM Integration',
      'API Connections',
      'Data Pipelines',
      'Reporting Dashboards',
      'Custom Tooling',
    ],
    deliverables: [
      {
        name: 'Process Mapping',
        description:
          'Documentation of current workflows, owners and handoffs - and where the waste actually is.',
      },
      {
        name: 'Workflow Automation',
        description:
          'Rule-based workflows that remove manual steps without adding fragile complexity.',
      },
      {
        name: 'CRM & Tool Integration',
        description: 'Connecting the systems your team already uses so data stops being rekeyed.',
      },
      {
        name: 'Custom Tooling',
        description:
          'Small web apps, scripts and internal tools that close genuine gaps off-the-shelf tools miss.',
      },
      {
        name: 'Data Pipelines',
        description: 'Automated collection, cleaning and syncing of data between business systems.',
      },
      {
        name: 'Reporting Dashboards',
        description: 'Live dashboards that run themselves - no weekly spreadsheet archaeology.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Process Audit',
        description:
          'We shadow the actual work - screens, inboxes, spreadsheets - and time it. The audit ends with a costed list of what the manual work is worth killing.',
      },
      {
        step: '02',
        title: 'Design the Workflow',
        description:
          'The target flow drawn end to end before anything is built: triggers, rules, exceptions and who gets notified when the rules do not apply.',
      },
      {
        step: '03',
        title: 'Build & Integrate',
        description:
          'Workflows built against the systems you already use - APIs and webhooks first, RPA only where there is genuinely no API to call.',
      },
      {
        step: '04',
        title: 'Test in Production',
        description:
          'Run in parallel with the manual process for two weeks, every output compared, before the old way is switched off. Trust is earned with receipts.',
      },
      {
        step: '05',
        title: 'Train & Document',
        description:
          'Your team learns the new flow with runbooks and a handover session - plus what to do when (not if) an exception lands in their inbox.',
      },
      {
        step: '06',
        title: 'Measure & Expand',
        description:
          'Hours returned reported against the baseline monthly - then the winning pattern expands to the next workflow on the audit list.',
      },
    ],

    pricing: [
      {
        name: 'Essential',
        tagline: 'One bottleneck, eliminated',
        price: 'From $2,500',
        features: [
          'One workflow automated',
          'Core integrations',
          'Documentation',
          '30-day support',
        ],
      },
      {
        name: 'Growth',
        tagline: 'Connected operations, measured',
        price: 'From $6,000',
        features: [
          'Up to 3 workflows',
          'CRM & tool integrations',
          'Reporting dashboard',
          'Training & documentation',
          '60-day support',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        tagline: 'Standing automation capability',
        price: 'From $15,000',
        features: [
          'Full process audit',
          'Multi-system automation',
          'Custom tooling',
          'Ongoing optimization',
        ],
      },
    ],

    results: [
      {
        value: 'Hrs / week',
        label: 'Every workflow measured in time returned - reported monthly against the baseline.',
      },
      {
        value: '2 weeks',
        label: 'Parallel-run validation before any manual process is switched off.',
      },
      {
        value: '0 re-entry',
        label: 'Data entered once and synced everywhere - the copy-paste tax, gone.',
      },
    ],

    faq: [
      {
        question: 'What tools do you automate?',
        answer:
          'CRMs, spreadsheets, email, project management, invoicing, databases and anything with an API. If a tool has no API, we can usually still bridge it with careful, safe automation.',
      },
      {
        question: 'How do you scope automation projects?',
        answer:
          'We start with a process audit that measures the current cost of the workflow. The proposal always shows hours and value saved, not just features built.',
      },
      {
        question: 'What if we do not know our own processes?',
        answer:
          'That is normal - that is why the audit exists. We map what actually happens, including the undocumented parts, before proposing anything.',
      },
      {
        question: 'Do you use Zapier, Make, or custom code?',
        answer:
          'Whichever fits: no-code platforms for speed and maintainability, custom code where logic, volume or reliability demands it. We optimise for what your team can maintain - and document either way.',
      },
      {
        question: 'What happens when an automation breaks?',
        answer:
          'Every workflow ships with error handling, failure notifications and a runbook. Breakages announce themselves to the right person immediately instead of silently corrupting data.',
      },
      {
        question: 'How do you measure saved time?',
        answer:
          'We baseline the manual effort before the change and report the delta monthly. You see the return in the same numbers used to justify the project.',
      },
      {
        question: 'Can automation replace headcount?',
        answer:
          'Honestly: sometimes it avoids a hire you were about to make, more often it gives the existing team their week back. We scope on hours returned, not roles removed - and we will tell you if a workflow is not worth automating.',
      },
    ],
    metaTitle: 'Automation - Hours Back Every Week | AgencyStudio',
    metaDescription:
      'Workflow automation across CRM, approvals, data sync and reporting - measured in hours returned. See what automation covers, our process and pricing.',
    relatedProjects: [],
  },
];

export { projects } from './projects';
