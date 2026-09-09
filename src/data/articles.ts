export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readingTime: string;
  /** Optional hero image - only set when genuine imagery exists (never stock). */
  image?: string;
  imageAlt?: string;
  body: ArticleBlock[];
  relatedSlugs: string[];
}

export const articleCategories = [
  'All',
  'Engineering',
  'Design',
  'SEO',
  'Automation',
  'Growth',
  'Business',
];

export const articles: ArticleData[] = [
  {
    slug: 'performance-is-the-first-feature',
    title: 'Why performance is the first feature',
    excerpt:
      'Every page you ship is racing the attention span of the person who just clicked the result. Performance is not a footnote - it is the feature everything else depends on.',
    category: 'Engineering',
    date: 'Aug 24, 2026',
    author: 'Daniel Okafor',
    authorRole: 'Head of Engineering',
    readingTime: '7 min read',
    body: [
      {
        type: 'paragraph',
        text: 'Every page you ship is in a race. The race is not against a competitor homepage - it is against the attention span of the person who just clicked the result. And attention, in 2026, has a budget measured in fractions of a second.',
      },
      {
        type: 'paragraph',
        text: 'We treat performance as a product requirement, not a technical footnote. That means setting budgets before the design is approved: how fast the first paint must happen, what the page is allowed to cost in payload, where the Core Web Vitals floor sits. When the budget exists first, design and engineering negotiate over it - instead of shipping a beautiful page and hoping it behaves.',
      },
      {
        type: 'heading',
        text: 'The metrics that predict revenue',
      },
      {
        type: 'paragraph',
        text: 'Not every performance metric matters equally. The ones that correlate with revenue are the ones real users feel: time to interactive, largest contentful paint on the hero, and stability measured at p95 rather than p50. A page that is fast once and slow sometimes is a page that is slow.',
      },
      {
        type: 'quote',
        text: 'Speed is not a feature you add at the end. It is a constraint you design with from the start.',
        attribution: 'Daniel Okafor',
      },
      {
        type: 'list',
        items: [
          'Set a performance budget before design sign-off',
          'Test on real devices and real networks, not just desktop fibre',
          'Measure p95 in production, not just p50 in Lighthouse',
          'Review performance every sprint, not once before launch',
        ],
      },
      {
        type: 'paragraph',
        text: 'The projects that shipped the fastest pages did not have the most engineering time. They had the clearest constraints - and the discipline to make performance a conversation every single week instead of a launch-week firefight.',
      },
    ],
    relatedSlugs: ['seo-is-a-product-decision', 'design-systems-that-scale-beyond-the-brand'],
  },
  {
    slug: 'design-systems-that-scale-beyond-the-brand',
    title: 'Design systems that scale beyond the brand',
    excerpt:
      'A design system is not a component library. It is a decision-making tool - and the most useful ones survive far beyond the brand that started them.',
    category: 'Design',
    date: 'Jul 18, 2026',
    author: 'Sofia Reinhardt',
    authorRole: 'Head of Design',
    readingTime: '6 min read',
    body: [
      {
        type: 'paragraph',
        text: 'Most teams start a design system hoping it will make them consistent. That is a reasonable goal and the wrong problem. Consistency is a side effect. The real job of a design system is to let teams make hundreds of small decisions without an expensive committee reviewing each one.',
      },
      {
        type: 'paragraph',
        text: 'The systems that survive are the ones that document why a component exists, not just how it looks. Colour tokens carry their intent. Spacing rules explain the rhythm. A component that ships without its reasoning will be reinterpreted within two quarters - and the system quietly stops being a system.',
      },
      {
        type: 'heading',
        text: 'Build the rules around the exceptions',
      },
      {
        type: 'paragraph',
        text: 'Every brand has moments that do not fit the grid: a launch campaign, a seasonal push, a partner co-brand. Systems fail when they forbid these moments, and they rot when they quietly allow every exception. The durable answer is to design the exception path explicitly - a documented, intentional way to break the rules.',
      },
      {
        type: 'list',
        items: [
          'Document the why, not just the what',
          'Set an explicit, intentional exception path',
          'Name tokens by behaviour, not by pixel value',
          'Review the system quarterly with real product work',
        ],
      },
      {
        type: 'quote',
        text: 'A design system is a maintenance contract between the people who made it and the people who use it.',
        attribution: 'Sofia Reinhardt',
      },
      {
        type: 'paragraph',
        text: 'The measure of a system is not how many components it contains. It is how fast a product team can ship good work without asking anyone permission.',
      },
    ],
    relatedSlugs: ['performance-is-the-first-feature', 'content-that-earns-attention'],
  },
  {
    slug: 'seo-is-a-product-decision',
    title: 'SEO is a product decision, not a marketing line item',
    excerpt:
      'The sites that win in search are not the ones with the most content. They are the ones where technical, content and product decisions were made together.',
    category: 'SEO',
    date: 'Jul 2, 2026',
    author: 'Marcus Chen',
    authorRole: 'Head of Growth',
    readingTime: '6 min read',
    body: [
      {
        type: 'paragraph',
        text: 'When SEO lives in the marketing budget, it arrives too late. The site is designed, the product is built, the content is written - and then someone is tasked with ranking it. That is not an SEO strategy. That is damage control with a keyword tool.',
      },
      {
        type: 'paragraph',
        text: 'The engagements that move revenue treat search as a product decision. Information architecture is decided with the content team and the engineers together. Page templates are built around search intent, not aesthetic preference. Structured data is a launch requirement, not a stretch goal. Nothing about that is glamorous. Everything about it compounds.',
      },
      {
        type: 'heading',
        text: 'The moment of intent',
      },
      {
        type: 'paragraph',
        text: 'Almost every SEO win we have delivered traces back to one insight: the searcher is already trying to solve a problem. They searched because they have a need - a condition to understand, a product to compare, a contract to review. If the page answers that need better than anyone else, it does not need tricks to rank.',
      },
      {
        type: 'quote',
        text: 'Rankings are a report. Usefulness is the strategy.',
        attribution: 'Marcus Chen',
      },
      {
        type: 'list',
        items: [
          'Involve SEO in information architecture, not just content calendars',
          'Build templates around search intent before writing a word',
          'Make structured data part of the definition of done',
          'Report against revenue and appointments, not just rankings',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of this means content does not matter - it means content finally has a structure to work within. When the product and the search strategy share one roadmap, organic stops being a channel and starts being a moat.',
      },
    ],
    relatedSlugs: [
      'pricing-digital-projects-without-guesswork',
      'performance-is-the-first-feature',
    ],
  },
  {
    slug: 'the-case-for-fewer-automations',
    title: 'The case for fewer automations',
    excerpt:
      'Automation is now cheap enough to apply to anything and expensive enough to apply to everything. The discipline is knowing what not to automate.',
    category: 'Automation',
    date: 'Jun 19, 2026',
    author: 'Adam Bell',
    authorRole: 'Automation Engineer',
    readingTime: '5 min read',
    body: [
      {
        type: 'paragraph',
        text: 'A well-intentioned team can build a lot of automation in a year. The uncomfortable truth is that most of it will be torn out within eighteen months - not because the tools changed, but because the automation was built on top of a process nobody had actually understood.',
      },
      {
        type: 'paragraph',
        text: 'The pattern is always the same. A manual workflow is painful, so a workflow tool automates the visible steps. The invisible steps - the judgement calls, the exceptions, the institutional knowledge - stay manual, which means the automated system drifts away from reality until nobody trusts it.',
      },
      {
        type: 'heading',
        text: 'Automate the judgement-free middle',
      },
      {
        type: 'paragraph',
        text: 'The robust automations are the ones with a clear boundary: rules in, rules out, exceptions surfaced to a human. Data moves, statuses update, reports run - and the moment a workflow hits something the rules do not cover, a person gets a notification with context, not a ticket in a void.',
      },
      {
        type: 'quote',
        text: 'Automation does not remove the need for judgement. It removes the distraction of everything else.',
        attribution: 'Adam Bell',
      },
      {
        type: 'list',
        items: [
          'Document the process first, including the exceptions',
          'Automate in layers and measure each layer before the next',
          'Surface exceptions to humans instead of hiding them',
          'Audit every automation annually against the real workflow',
        ],
      },
      {
        type: 'paragraph',
        text: 'Some of the best automation projects we have run ended with fewer automations than the client expected - and more time saved than the original proposal promised. The constraint was not the tooling. It was the discipline to automate the right things.',
      },
    ],
    relatedSlugs: [
      'performance-is-the-first-feature',
      'pricing-digital-projects-without-guesswork',
    ],
  },
  {
    slug: 'content-that-earns-attention',
    title: 'Content that earns attention on social',
    excerpt:
      'The social feeds that work are not the loudest. They are the ones that give the audience something useful before asking for anything back.',
    category: 'Growth',
    date: 'May 21, 2026',
    author: 'Hannah Whitfield',
    authorRole: 'Content & Social Lead',
    readingTime: '5 min read',
    body: [
      {
        type: 'paragraph',
        text: 'Every brand feels the pressure to post more. The feeds that actually grow do the opposite: they post less, and they make the posts count. The difference is whether the content gives the audience something, or only takes attention from them.',
      },
      {
        type: 'paragraph',
        text: 'The giving category is wide: a genuinely useful tip, an honest behind-the-scenes, an answer to the question everyone in the industry silently has. The taking category is narrow and predictable - product promos, launch announcements and posts that were made because the calendar needed filling.',
      },
      {
        type: 'heading',
        text: 'Build the ratio first',
      },
      {
        type: 'paragraph',
        text: 'We structure content plans around a simple ratio: most of what you publish gives, some shares your point of view, and a small fraction asks for the sale. When the ratio is right, the asks perform better too - because the audience has learned the account is worth their time.',
      },
      {
        type: 'quote',
        text: 'Attention is not captured. It is earned, one useful post at a time.',
        attribution: 'Hannah Whitfield',
      },
      {
        type: 'list',
        items: [
          'Publish less, make each post count',
          'Give something useful before asking for anything',
          'Design every post to work with sound off',
          'Reply like a person - speed and honesty beat polish',
        ],
      },
      {
        type: 'paragraph',
        text: 'The platforms change every year. The principle does not: people follow accounts that make their lives or their work better. Build that transaction consistently and the growth numbers follow automatically.',
      },
    ],
    relatedSlugs: ['design-systems-that-scale-beyond-the-brand', 'the-case-for-fewer-automations'],
  },
  {
    slug: 'pricing-digital-projects-without-guesswork',
    title: 'Pricing digital projects without the guesswork',
    excerpt:
      'Clients do not mind paying for quality. They mind paying for uncertainty. A good proposal removes the guesswork for everyone.',
    category: 'Business',
    date: 'May 8, 2026',
    author: 'Elena Marsh',
    authorRole: 'Founder & Managing Director',
    readingTime: '6 min read',
    body: [
      {
        type: 'paragraph',
        text: 'The most expensive sentence in digital projects is not any number in the proposal. It is the sentence after the number: "and it depends." Scope depends, timelines depend, the number depends. What the client is really buying is confidence, and confidence has a price.',
      },
      {
        type: 'paragraph',
        text: 'We price projects the way we want to be priced ourselves: a clear scope, a clear timeline, and a number we can defend. That means doing real scoping work before the quote - understanding the pages, the flows, the integrations, the content - so the proposal is a plan, not a guess.',
      },
      {
        type: 'heading',
        text: 'Honesty about the edges',
      },
      {
        type: 'paragraph',
        text: 'Good projects have edges, and the proposal should mark them: what changes scope, what is a variation, what happens when a third party is slow. Pricing is not the place for optimism. The most successful engagements we have run started with a number both sides believed, then stayed honest about the edges as the work progressed.',
      },
      {
        type: 'quote',
        text: 'A price is a promise. Make it a promise you can keep.',
        attribution: 'Elena Marsh',
      },
      {
        type: 'list',
        items: [
          'Scope before you quote - the proposal is the plan',
          'Show the timeline behind the number',
          'Mark the edges: what changes scope and what does not',
          'Prefer a fixed number over hourly billing for defined work',
        ],
      },
      {
        type: 'paragraph',
        text: 'The result is a better kind of project. When the price and the scope are clear, the team spends its energy on the work rather than on protecting margins - and the client gets exactly what was promised, usually on time.',
      },
    ],
    relatedSlugs: ['seo-is-a-product-decision', 'the-case-for-fewer-automations'],
  },
];
