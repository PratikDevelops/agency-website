export interface ServiceData {
    slug: string;
    number: string;
    title: string;
    shortDescription: string;
    description: string;
    heroImage: string;
    heroImageAlt: string;
    deliverables: Array<{ name: string; description: string; }>;
    process: Array<{ step: string; title: string; description: string; }>;
    pricing: Array<{
        name: string;
        tagline: string;
        price: string;
        features: string[];
        popular?: boolean;
    }>;
    faq: Array<{ question: string; answer: string; }>;
    capabilities: string[];
}

export const services: ServiceData[] = [
    {
        slug: 'web-development',
        number: '01',
        title: 'Web Development',
        shortDescription: 'Websites, platforms and digital products engineered for performance.',
        description:
            'We build fast, scalable web experiences - from marketing sites to complex web applications - designed around your business goals and your users.',
        heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_178fbac79-1772091570606.png",
        heroImageAlt: 'Modern web development workspace with multiple monitors displaying code and design interfaces in a bright, open studio environment',
        capabilities: ['Marketing Websites', 'E-commerce', 'Web Applications', 'CMS Integration', 'API Integration', 'Performance Optimization', 'Analytics', 'Deployment'],
        deliverables: [
            { name: 'Marketing Websites', description: 'Conversion-focused sites that communicate your value and generate qualified leads.' },
            { name: 'E-commerce', description: 'Custom storefronts built for growth - from product catalogues to checkout optimization.' },
            { name: 'Web Applications', description: 'Complex, interactive platforms that solve real business problems at scale.' },
            { name: 'CMS Integration', description: 'Headless and traditional CMS setups so your team can publish without engineering.' },
            { name: 'API Integration', description: 'Connect your web product to the tools and data your business already uses.' },
            { name: 'Performance Optimization', description: 'Core Web Vitals, load-speed improvements and technical SEO foundations.' }],

        process: [
            { step: '01', title: 'Discovery', description: 'We map your business goals, user needs and technical requirements before writing a line of code.' },
            { step: '02', title: 'Architecture', description: 'Tech stack selection, system design and project scoping to avoid expensive pivots later.' },
            { step: '03', title: 'UI Implementation', description: 'Design systems, component libraries and responsive layouts built for production.' },
            { step: '04', title: 'Development', description: 'Clean, maintainable code with regular reviews, staging environments and clear milestones.' },
            { step: '05', title: 'Testing', description: 'Cross-browser testing, performance audits, accessibility checks and QA sign-off.' },
            { step: '06', title: 'Launch', description: 'Deployment, monitoring setup, handover documentation and post-launch support.' }],

        pricing: [
            {
                name: 'Essential',
                tagline: 'Best for focused marketing sites',
                price: 'From $4,800',
                features: ['Up to 8 pages', 'Responsive design', 'CMS integration', 'Basic analytics', '30-day post-launch support']
            },
            {
                name: 'Growth',
                tagline: 'Best for growing businesses',
                price: 'From $9,500',
                features: ['Up to 20 pages', 'Custom design system', 'E-commerce or web app', 'API integrations', 'Performance optimization', '60-day support'],
                popular: true
            },
            {
                name: 'Scale',
                tagline: 'Best for complex digital products',
                price: 'From $22,000',
                features: ['Unlimited scope', 'Full product team', 'Custom architecture', 'Ongoing retainer option', 'Priority support']
            }],

        faq: [
            { question: 'What technologies do you use?', answer: 'We work with Next.js, React, TypeScript, Node.js, and headless CMS platforms like Sanity and Contentful. We recommend the right stack for your specific project, not a one-size-fits-all solution.' },
            { question: 'How long does a web project take?', answer: 'A focused marketing site takes 4–6 weeks. A web application or e-commerce platform typically runs 8–16 weeks depending on scope and integrations.' },
            { question: 'Do you handle design and development together?', answer: 'Yes. Our designers and developers work in parallel from day one, which eliminates the handoff problems that slow most projects down.' },
            { question: 'Can you work with our existing codebase?', answer: 'Absolutely. We regularly audit, refactor and extend existing codebases. We start with a technical review to understand what you have before proposing changes.' },
            { question: 'What happens after launch?', answer: 'All projects include a post-launch support period. We also offer ongoing retainers for teams that need continuous development, monitoring and iteration.' }]

    },
    {
        slug: 'app-development',
        number: '02',
        title: 'App Development',
        shortDescription: 'Mobile experiences built for real users on iOS and Android.',
        description: 'We design and build native and cross-platform mobile applications that people actually use.',
        heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1241d870c-1773026216292.png",
        heroImageAlt: 'Mobile app interface on smartphone screen showing clean UI design',
        capabilities: ['iOS Development', 'Android Development', 'React Native', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'seo',
        number: '03',
        title: 'SEO',
        shortDescription: 'Search visibility built around real business goals.',
        description: 'We build sustainable organic growth through technical SEO, content strategy and authority building.',
        heroImage: '',
        heroImageAlt: '',
        capabilities: ['Technical SEO Audit', 'Content Strategy', 'Link Building', 'Local SEO', 'E-commerce SEO', 'SEO Reporting'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'graphic-design',
        number: '04',
        title: 'Graphic Design',
        shortDescription: 'Visual systems that make brands instantly recognizable.',
        description: 'Brand identity, visual language and print/digital design that works across every touchpoint.',
        heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_124e8cb0d-1784262149281.png",
        heroImageAlt: 'Brand identity design materials including logo, color palette, and typography laid out on a clean white surface',
        capabilities: ['Brand Identity', 'Logo Design', 'Typography Systems', 'Print Design', 'Illustration', 'Brand Guidelines'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'ui-ux-design',
        number: '05',
        title: 'UI/UX Design',
        shortDescription: 'Interfaces designed around how people actually behave.',
        description: 'Research-driven UI/UX design that reduces friction, increases conversion and makes products feel effortless.',
        heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12f160d82-1772282690049.png",
        heroImageAlt: 'UI/UX design process with wireframes, prototypes, and design mockups displayed on tablet and desktop screens',
        capabilities: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing', 'Interaction Design'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'video-editing',
        number: '06',
        title: 'Video Editing',
        shortDescription: 'Video content that communicates clearly and converts.',
        description: 'From brand films to social content - edited, colour-graded and delivered for every platform.',
        heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_162cf7d96-1772209094477.png",
        heroImageAlt: 'Video editing workspace with timeline software open on a large monitor in a professional studio with cinematic lighting',
        capabilities: ['Brand Films', 'Social Content', 'Product Videos', 'Motion Graphics', 'Colour Grading', 'Captions & Subtitles'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'ad-marketing',
        number: '07',
        title: 'Ad Marketing',
        shortDescription: 'Paid campaigns engineered for measurable return.',
        description: 'Paid search, paid social and display campaigns built around your acquisition goals and unit economics.',
        heroImage: '',
        heroImageAlt: '',
        capabilities: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'Creative Testing', 'Campaign Analytics'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'social-media-management',
        number: '08',
        title: 'Social Media Management',
        shortDescription: 'Consistent brand presence across the channels that matter.',
        description: 'Content strategy, creation and community management that builds an audience and keeps them engaged.',
        heroImage: '',
        heroImageAlt: '',
        capabilities: ['Content Strategy', 'Content Creation', 'Community Management', 'Analytics', 'Influencer Outreach', 'Platform Growth'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    },
    {
        slug: 'automation',
        number: '09',
        title: 'Automation',
        shortDescription: 'Workflows that remove manual work and scale without headcount.',
        description: 'Business process automation, API integrations and custom tooling that frees your team to focus on work that matters.',
        heroImage: '',
        heroImageAlt: '',
        capabilities: ['Workflow Automation', 'CRM Integration', 'API Connections', 'Data Pipelines', 'Reporting Dashboards', 'Custom Tooling'],
        deliverables: [],
        process: [],
        pricing: [],
        faq: []
    }];


export const projects = [
    {
        slug: 'finora',
        title: 'Finora',
        industry: 'Fintech',
        services: ['Web Development', 'UI/UX Design'],
        outcome: '+42% qualified leads',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_114c3b0bd-1786177245925.png",
        imageAlt: 'Fintech dashboard interface with dark background, clean data visualization charts in orange and white tones, professional financial analytics UI',
        description: 'A financial analytics platform for mid-market investment teams.',
        challenge: 'Finora needed a web platform that communicated institutional credibility while remaining approachable to non-technical finance professionals.',
        results: ['+42% qualified leads', '2.4× conversion rate', '38% faster load time'],
        category: 'Web'
    },
    {
        slug: 'clearpath',
        title: 'Clearpath',
        industry: 'Logistics',
        services: ['App Development', 'UI/UX Design'],
        outcome: '3× faster onboarding',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_154bb386f-1771889687750.png",
        imageAlt: 'Logistics mobile app interface showing route optimization and delivery tracking on a clean white smartphone screen',
        description: 'A driver coordination app for a UK logistics network.',
        challenge: 'Drivers needed a simpler way to manage routes, communicate ETAs and log deliveries - without a steep learning curve.',
        results: ['3× faster onboarding', '61% fewer support tickets', '4.8 App Store rating'],
        category: 'Apps'
    },
    {
        slug: 'marka',
        title: 'Marka',
        industry: 'Consumer Goods',
        services: ['Graphic Design', 'UI/UX Design'],
        outcome: 'Full brand relaunch',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_178f82bf6-1788255865360.png",
        imageAlt: 'Premium brand identity design showing clean packaging, logo mark, and typography system on bright white background',
        description: 'Brand identity and packaging system for a premium food brand.',
        challenge: 'Marka was entering a premium retail segment with a brand that communicated commodity. They needed a full visual identity overhaul.',
        results: ['Full brand relaunch', 'Listed in 40+ retail locations', '22% revenue increase in year 1'],
        category: 'Branding'
    },
    {
        slug: 'grove-health',
        title: 'Grove Health',
        industry: 'Healthcare',
        services: ['Web Development', 'SEO'],
        outcome: '+180% organic traffic',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7db78fb-1764668283328.png",
        imageAlt: 'Healthcare web platform with clean minimal design, soft blue-gray tones, patient portal interface on desktop screen',
        description: 'SEO-led website rebuild for a telehealth platform.',
        challenge: 'Grove Health had strong clinical results but was invisible in organic search. A full technical SEO rebuild and content architecture overhaul was required.',
        results: ['+180% organic traffic', 'Page 1 for 34 target keywords', '2.1× appointment bookings'],
        category: 'Web'
    }];