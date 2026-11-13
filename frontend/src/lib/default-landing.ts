import type {
  CaseStudyItem,
  FooterData,
  LandingPayload,
  NavbarData,
  PageItem,
  PartnerLogo,
  ProcessStep,
  ProductItem,
  ServiceItem,
  SiteSetting,
  TestimonialItem,
} from '@/types/strapi';

export const DEFAULT_SITE_SETTING: SiteSetting = {
  siteName: 'Walstar Technologies',
  logoAccentText: 'TECHNOLOGIES',
  footerLogoAccentText: 'TECHNOLOGIES PVT. LTD.',
  topbarEmail: 'sales@walstartechnologies.com',
  topbarPhone: '+919657764560',
  socialLinks: [
    { platform: 'LinkedIn', href: '#cta' },
    { platform: 'X', href: '#cta' },
    { platform: 'Facebook', href: '#cta' },
    { platform: 'Instagram', href: '#cta' },
  ],
  navLinks: [
    { label: 'Home', href: '/', hasDropdown: false },
    { label: 'Services', href: '/service-1', hasDropdown: true },
    { label: 'Industries', href: '/#prod', hasDropdown: false },
    { label: 'Our Work', href: '/#case', hasDropdown: false },
    { label: 'About Us', href: '/about-us', hasDropdown: false },
    { label: 'Contact', href: '/contact', hasDropdown: false },
  ],
  headerCtaLabel: 'Book a strategy call ↗',
  headerCtaHref: '/contact',
  contactEmail: 'info@walstartechnologies.com',
  footerAbout:
    'Results-driven digital agency building secure, scalable solutions for global businesses.',
  footerAboutLogo: null,
  footerNewsletterTitle: 'Have Project in mind ?',
  footerNewsletterSubtitle: 'Let’s create something great.',
  footerNewsletterButtonLabel: 'Free Consultation ↗',
  footerBigPrefix: 'Build',
  footerBigSerif: 'AI Products',
  footerBigSuffix: 'that actually Ships.',
  footerCtaLabel: 'Contact Now ↗',
  footerCtaHref: '/contact',
  footerPrimaryLinks: [
    { label: 'Home', href: '/', hasDropdown: false },
    { label: 'About', href: '/about-us', hasDropdown: false },
    { label: 'Blog', href: '/welcome', hasDropdown: false },
    { label: 'Portfolio', href: '/#case', hasDropdown: false },
  ],
  footerSecondaryLinks: [
    { label: 'Services', href: '/service-1', hasDropdown: false },
    { label: 'Career', href: '/about-us', hasDropdown: false },
    { label: 'Contact', href: '/contact', hasDropdown: false },
    { label: 'Events & Programs', href: '/#prod', hasDropdown: false },
  ],
  officeAddress:
    '2103/47 E, Rukmini Nagar, Front of Datta Mandir Kolhapur, Maharashtra 416005',
  officePhones: '+91 9665764568\n+44 787 791 0843\n+18178109184',
  copyrightText:
    'Copyright © 2028 All Rights Reserved, Terms of Use and Privacy Policy',
};

const DEFAULT_PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'BIGCOMMERCE' },
  { name: '◆ shopify partner' },
  { name: 'BLACKSMITH' },
  { name: 'Razorpay' },
  { name: '◉ Certified' },
  { name: '■ Clutch' },
];

const DEFAULT_TRUSTED_LOGOS: PartnerLogo[] = [
  { name: 'LEON' },
  { name: 'Mathew Trutman' },
  { name: 'LEXOPULUS' },
  { name: '24G' },
  { name: 'CENTURY' },
  { name: 'WebWorks89' },
  { name: 'LifeSpring' },
  { name: 'GLN' },
  { name: 'JOCKEY' },
  { name: 'NEXT LEVEL US' },
];

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & AI Audit',
    description:
      'Mapping your workflows, data and tools to find the AI use cases with the highest return.',
    isHighlighted: false,
  },
  {
    stepNumber: 2,
    title: 'Solution Design & Prototyping',
    description:
      'Rapid prototypes and model selection, tailored to your data, stack and compliance needs.',
    isHighlighted: false,
  },
  {
    stepNumber: 3,
    title: 'Build, Train & Integrate',
    description:
      'Building agents, fine-tuning models and wiring them into the tools your team already uses.',
    isHighlighted: true,
  },
  {
    stepNumber: 4,
    title: 'Launch, Monitor & Improve',
    description:
      'Continuous evaluation, monitoring and retraining to keep accuracy high and costs low.',
    isHighlighted: false,
  },
];

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    documentId: 'seed-service-1',
    title: 'AI Solutions & Business Automation',
    slug: 'ai-solutions-business-automation',
    description:
      'We build AI chatbots, process automation, and intelligent digital solutions that streamline operations, boost efficiency, and deliver smarter, modern experiences.',
    icon: '✦',
    themeVariant: 'a',
    order: 1,
  },
  {
    documentId: 'seed-service-2',
    title: 'Digital Marketing & Performance Growth',
    slug: 'digital-marketing-performance-growth',
    description:
      'Improve AI-search visibility, attract relevant visitors, generate qualified leads, and optimize digital campaigns using measurable performance data.',
    icon: '◀',
    themeVariant: 'b',
    order: 2,
  },
  {
    documentId: 'seed-service-3',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    description:
      'Simplify business operations with custom ERP systems, CRM platforms, inventory management, automated workflows, and connected business applications.',
    icon: '▣',
    themeVariant: 'c',
    order: 3,
  },
  {
    documentId: 'seed-service-4',
    title: 'Web & SaaS Product Development',
    slug: 'web-saas-product-development',
    description:
      'Fast, secure, search-friendly websites and scalable SaaS platforms, built on modern technology with performance and SEO included from day one.',
    icon: '◉',
    themeVariant: 'd',
    order: 4,
  },
  {
    documentId: 'seed-service-5',
    title: 'AI Agents & Integrations',
    slug: 'ai-agents-integrations',
    description:
      'Connect your tools with agents that plan, act and report across CRMs, support desks, ERPs, and internal data stores.',
    icon: '⚙',
    themeVariant: 'a',
    order: 5,
  },
];

export const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    documentId: 'seed-prod-1',
    name: 'NRI Circle',
    slug: 'nri-circle',
    tagline: 'NRI Service Management Platform',
    description:
      'NRI Circle is a digital service-management platform designed to help Indians living abroad manage their families, properties, and everyday responsibilities in India.',
    isFeatured: true,
    accentGradient: 'linear-gradient(135deg,#0d1230,#1a2b6b 60%,#2f80ff)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/nri-circle',
    order: 1,
  },
  {
    documentId: 'seed-prod-2',
    name: 'Talk2site',
    slug: 'talk2site',
    tagline: 'Turn Website Visitors into AI Sales',
    description:
      'Talk2Site is an AI-powered sales assistant platform that transforms traditional business websites into autonomous revenue engines.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#fff,#ffd9c2)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/talk2site',
    order: 2,
  },
  {
    documentId: 'seed-prod-3',
    name: 'Panchayat Pro',
    slug: 'panchayat-pro',
    tagline: 'Digital governance and citizen services',
    description:
      'Panchayat Pro is a digital Panchayat management platform designed to modernize village-level administration.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#5b8a4a,#2e3d2c)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/panchayat-pro',
    order: 3,
  },
  {
    documentId: 'seed-prod-4',
    name: 'Smart Aptitude',
    slug: 'smart-aptitude',
    tagline: 'Tests for Modern Institutions',
    description:
      'Create, manage, and analyze aptitude exams with a powerful multi-tenant SaaS platform. Go from setup to results fast.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#1a1a1a,#c9a227)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/smart-aptitude',
    order: 4,
  },
  {
    documentId: 'seed-prod-5',
    name: 'Multispecialty Hospital',
    slug: 'multispecialty-hospital',
    tagline: 'Management System',
    description:
      'All-in-One Hospital Software: EMR, Billing, Appointments, Labs, Pharmacy, Analytics. For Hospital Management.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#0b2d52,#2fb5d9)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/multispecialty-hospital',
    order: 5,
  },
  {
    documentId: 'seed-prod-6',
    name: 'Swift Reach',
    slug: 'swift-reach',
    tagline: 'Vehicle Service App',
    description:
      'Smart vehicle service platform with Booking, Payments, Tracking and Automation. Streamline operations and more.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#8aa0a8,#2c3a40)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/swift-reach',
    order: 6,
  },
  {
    documentId: 'seed-prod-7',
    name: 'Chat Walstargroup',
    slug: 'chat-walstargroup',
    tagline: 'WhatsApp Automation Tool',
    description:
      'WhatsApp marketing platform with chatbots, drip campaigns, and CRM integration. Automate engagement.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#7a8a8f,#d6dde0)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/chat-walstargroup',
    order: 7,
  },
];

export const DEFAULT_CASE_STUDIES: CaseStudyItem[] = [
  {
    documentId: 'seed-cs-1',
    title: 'Jockey Australia.Website Revamp',
    slug: 'jockey-australia-website-revamp',
    category: 'E-commerce',
    metaOneLabel: 'CLIENT',
    metaOneValue: 'LCG ( Leon Capital Group)',
    metaTwoLabel: 'REGION',
    metaTwoValue: 'United States',
    metaThreeLabel: 'PROJECT TYPE',
    metaThreeValue: 'B2B Saas, Financial services',
    summary:
      'Modernized storefront architecture, performance optimization, and high-converting checkout flows for Jockey Australia.',
    themeVariant: 'a',
    order: 1,
  },
  {
    documentId: 'seed-cs-2',
    title: 'Building A High-Conversion Patient Financing Website',
    slug: 'high-conversion-patient-financing-website',
    category: 'Healthcare',
    metaOneLabel: '',
    metaOneValue: '',
    metaTwoLabel: '',
    metaTwoValue: '',
    metaThreeLabel: '',
    metaThreeValue: '',
    summary:
      'Engineered an accessible patient financing portal integrating provider onboarding, eligibility workflows, and measurable funnel analytics.',
    themeVariant: 'b',
    order: 2,
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    documentId: 'seed-tm-1',
    authorName: 'Nathan Fowler',
    quote:
      'Walstar Technologies Pvt Ltd has delivered working websites that drive engagement, strengthen brands, and support business growth.',
    companyName: 'Company name',
    rating: 5,
    isHighlighted: false,
    order: 1,
  },
  {
    documentId: 'seed-tm-2',
    authorName: 'Fred Fuller',
    quote:
      'I was impressed with their communications, knowledge, and fair pricing, along with their professionalism, commitment to delivering quality results.',
    companyName: 'Company name',
    rating: 5,
    isHighlighted: true,
    order: 2,
  },
  {
    documentId: 'seed-tm-3',
    authorName: 'Derek Campbell',
    quote:
      'Working with Walstar Technologies was a great experience. Their team provided excellent support throughout the project.',
    companyName: 'Company name',
    rating: 5,
    isHighlighted: false,
    order: 3,
  },
];

const SHARED_CTA_BAND = {
  __component: 'sections.cta-band' as const,
  pill: 'CTA',
  heading: 'For Instant Support, Please Contact Us',
  subheading: 'Have a project in mind?',
  buttonLabel: 'Connect With Us ↗',
  buttonHref: '#footer-consultation',
};

const CONTACT_INTEREST_OPTIONS = [
  'ERP & CRM Development',
  'Web Development',
  'AI & Automation Solutions',
  'Cyber security',
  'Digital Marketing',
  'Maintenance & Support',
  'UX Design',
  'Mobile App Development',
  'Amazon Service',
].map((label) => ({ label }));

const CONTACT_BUDGET_OPTIONS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
].map((label) => ({ label }));

const SHARED_GLOBAL_OFFICES = {
  __component: 'sections.global-offices' as const,
  pill: 'Areas we serve',
  headingPrefix: 'Our Global',
  headingSerif: 'Offices',
  showWorldMap: true,
  mapPins: [
    {
      label: 'Dallas, TX USA',
      leftPercent: 12,
      topPx: 0,
      flagVariant: 'us' as const,
    },
    {
      label: 'Kolhapur | Pune, India',
      leftPercent: 46,
      topPx: 14,
      flagVariant: 'in' as const,
    },
    {
      label: 'Brisbane, QLD Australia',
      leftPercent: 64,
      topPx: 118,
      flagVariant: 'au' as const,
    },
  ],
  offices: [
    {
      regionLabel: 'India · HQ',
      title: 'SHIVAJI PARK',
      cityRegion: 'Kolhapur, Maharashtra',
      address:
        '2103/47 E, Rukmini Nagar, Back side of Sayaji Hotel, Kolhapur, Maharashtra 416005',
      isHeadquarters: true,
    },
    {
      regionLabel: 'USA',
      title: 'McKinney',
      cityRegion: 'Texas, USA',
      address: '5860 Collin McKinney Pkwy, St# 601, McKinney TX 75070 USA',
      isHeadquarters: false,
    },
    {
      regionLabel: 'Australia',
      title: 'Carindale',
      cityRegion: 'Queensland, Australia',
      address: '105 Bridgnorth Street, Carindale Qld 4152, Australia',
      isHeadquarters: false,
    },
    {
      regionLabel: 'UK',
      title: 'Burgess Hill',
      cityRegion: 'England, UK',
      address: 'Wolstonbury Court Burgess Hill, RH15',
      isHeadquarters: false,
    },
    {
      regionLabel: 'India',
      title: 'Warje',
      cityRegion: 'Pune, India',
      address:
        'Wallstreet 24, Above Mc-Donald, Mumbai-Banglore Highway. Warje, Pune 411058',
      isHeadquarters: false,
    },
    {
      regionLabel: 'India',
      title: 'Goregaon West',
      cityRegion: 'Mumbai, India',
      address:
        '7/213, Siddharth nagar, SV Road, Goregaon West, Maharashtra 400104',
      isHeadquarters: false,
    },
  ],
};

export const DEFAULT_PAGES: PageItem[] = [
  {
    documentId: 'seed-page-home',
    title: 'Homepage',
    slug: 'home',
    isHomepage: true,
    pageType: 'homepage',
    order: 1,
    summary:
      'Primary Walstar Technologies landing page controlled via Strapi Dynamic Zone sections.',
    seo: {
      metaTitle: 'Walstar Technologies | AI, Automation & Software',
      metaDescription:
        'AI-powered innovation, intelligent automation, and modern software engineering powered by Next.js, Strapi CMS, and PostgreSQL.',
    },
    sections: [
      {
        __component: 'sections.hero',
        chip: 'AI-Powered Innovation • Digital Solutions • Business Growth',
        headlinePrefix: 'Transform Your Business With',
        headlineSerif: 'The Power',
        headlineSuffix: 'of AI.',
        description:
          'We combine artificial intelligence, intelligent automation, and modern software engineering to help brands work smarter, innovate faster, and scale with confidence.',
        primaryCtaLabel: 'Explore AI Solutions ↗',
        primaryCtaHref: '#cap',
        secondaryCtaLabel: 'Discover your Project ↗',
        secondaryCtaHref: '#case',
      },
      {
        __component: 'sections.partner-strip',
        ariaLabel: 'Partners',
        animationDurationSeconds: 24,
        scrollDirection: 'left',
        logos: DEFAULT_PARTNER_LOGOS,
      },
      {
        __component: 'sections.about',
        tag: 'About us',
        headingPrefix: 'The team behind',
        headingSerif: 'smarter',
        headingSuffix: 'automation',
        description:
          'From intelligent agents to connected business workflows, we design and implement practical AI solutions that help businesses save time, improve decisions, and deliver better customer experiences every day.',
        highlightTitle: 'Engineering an Intelligent Future',
        highlightDescription:
          'We specialize in designing & deploying production AI systems that combine security, cost efficiency and lasting performance.',
        ctaLabel: 'More About Us ↗',
        ctaHref: '/about-us',
      },
      {
        __component: 'sections.capabilities',
        pill: 'Capabilities',
        headingPrefix: 'What we',
        headingSerif: 'do',
        subtitle:
          'End-to-end AI services engineered for performance, data security',
        ctaLabel: 'View Services ↗',
        ctaHref: '/service-1',
        showAllServices: true,
        showProcess: true,
        processPill: 'What we do',
        processHeadingPrefix: 'From',
        processHeadingSerif: 'idea',
        processHeadingSuffix: 'to production',
        processNote:
          'Attaining the best, yet through a certain measure of time, it comes about with great labor and pain. Indeed, even to the slightest degree.',
        processVideoLabel: 'Video Presentation',
        processVideoUrl: '#cta',
        processSteps: DEFAULT_PROCESS_STEPS,
      },
      {
        __component: 'sections.products-showcase',
        tag: 'Our products',
        headingPrefix: 'Everything you need to create',
        headingSerif: 'smarter, faster',
        subtitle: 'Products built to simplify business',
        showAllProducts: true,
      },
      {
        __component: 'sections.trust-banner',
        tag: 'Trust',
        headingPrefix: 'Trusted by 10k+',
        headingSerif: 'fast-growing',
        headingSuffix: 'businesses',
        logos: DEFAULT_TRUSTED_LOGOS,
      },
      {
        __component: 'sections.case-studies',
        tag: 'Case studies',
        headingPrefix: 'A closer look at',
        headingSerif: 'our work',
        subtitle:
          'Selected technology projects built where clean engineering meets measurable business impact, reliability and data-led performance.',
        ctaLabel: 'View All Case Studies ↗',
        ctaHref: '#case',
        showAllCaseStudies: true,
      },
      {
        __component: 'sections.testimonials',
        tag: 'Honest clients',
        headingPrefix: 'Trusted by',
        headingSerif: 'thousands',
        showAllTestimonials: true,
      },
      {
        __component: 'sections.before-after',
        beforeEyebrow: 'BEFORE',
        beforeTitle: 'Your Team Today',
        beforeCaption: '40 hrs / week of manual work',
        afterEyebrow: 'AFTER',
        afterTitle: 'With Walstar AI',
        afterCaption: '85% less manual effort. 05 hrs / week',
      },
      SHARED_CTA_BAND,
    ],
  },
  {
    documentId: 'seed-page-about',
    title: 'About Us',
    slug: 'about-us',
    isHomepage: false,
    pageType: 'about',
    order: 2,
    summary:
      'Building digital experiences that move business forward. Meet the leadership, engineering teams, and global offices of Walstar Technologies.',
    seo: {
      metaTitle: 'About Us | Walstar Technologies',
      metaDescription:
        'Building digital experiences that move business forward. Meet the leadership, engineering teams, and global offices of Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● About Walstar Technologies',
        headlinePrefix: 'Building Digital',
        headlineSerif: 'Experiences',
        headlineSuffix: '\nThat Move Business Forward.',
      },
      {
        __component: 'sections.who-we-are',
        pill: 'Who we are',
        headingPrefix: 'A trusted partner for\n',
        headingSerif: 'what’s next',
        description: [
          'Founded with a mission to transform digital experiences, Walstar Technologies has grown into a trusted IT partner for startups, SMEs, and enterprises worldwide.',
          'We focus on performance, security, scalability, and user-centric design to maximize engagement and conversions.',
        ].join('\n'),
        ctaLabel: 'See what we do',
        ctaHref: '/service-1',
      },
      {
        __component: 'sections.journey-stats',
        pill: 'The Walstar Way',
        headingPrefix: 'From first idea to',
        headingSerif: 'lasting impact',
        description:
          'We combine innovation, technology, and creativity to build solutions that improve user experience, increase online visibility, and boost revenue growth.',
        milestones: [
          {
            era: '2017',
            title: 'Where It Began',
            description:
              'Walstar Technologies was established with a mission to transform digital experiences.',
            isCurrent: false,
          },
          {
            era: 'Today',
            title: 'A Trusted Partner',
            description:
              'Serving startups, SMEs, and enterprises worldwide with secure, scalable solutions.',
            isCurrent: true,
          },
          {
            era: 'NEXT',
            title: 'What Comes Next',
            description:
              'Becoming a global leader in intelligent, secure, and customer-centric IT services.',
            isCurrent: false,
          },
        ],
        stats: [
          { value: '12+', label: 'Years of\nexperience' },
          { value: '1K+', label: 'Projects\ndelivered' },
          { value: '5+', label: 'Global\noffices' },
          { value: '∞', label: 'Ideas\nin motion' },
        ],
      },
      {
        __component: 'sections.solutions-grid',
        pill: 'What we do',
        headingPrefix: 'Digital solutions\nbuilt to',
        headingSerif: 'Scale',
        subtitle:
          'Our multi-disciplinary team of designers, developers, strategists, and digital marketers works collaboratively to deliver meaningful outcomes.',
        hasTopOverlap: true,
        items: [
          {
            number: '01',
            title: 'AI & Automation Solutions',
            category: 'AI-Powered Business Automation',
            href: '/services/ai-solutions-business-automation',
          },
          {
            number: '02',
            title: 'ERP & CRM Development',
            category: 'Business Management Solutions',
            href: '/services/custom-software-development',
          },
          {
            number: '03',
            title: 'Website & ECommerce Development',
            category: 'Digital Growth Solutions',
            href: '/services/web-saas-product-development',
          },
          {
            number: '04',
            title: 'Mobile App Development',
            category: 'Scalable Mobile Solutions',
            href: '/service-1',
          },
          {
            number: '05',
            title: 'Cloud & DevOps Engineering',
            category: 'Scalable Cloud Solutions',
            href: '/services/digital-marketing-performance-growth',
          },
          {
            number: '06',
            title: 'UI/UX Design & Branding',
            category: 'User Experience & Identity',
            href: '/service-1',
          },
          {
            number: '07',
            title: 'Software Testing & QA',
            category: 'Quality Assurance & Testing',
            href: '/contact',
          },
          {
            number: '08',
            title: 'Emerging Tech & Web3',
            category: 'Decentralized & Future Tech',
            href: '/contact',
          },
        ],
      },
      {
        __component: 'sections.why-choose',
        pill: 'Why choose Walstar',
        headingPrefix: 'Built different. ',
        headingSerif: 'Built for impact.',
        reasons: [
          {
            icon: '▭',
            title: 'Customized Web And App Solutions',
            description:
              'We don’t believe in templates. Every website and application is built from scratch based on business objectives and user behavior.',
          },
          {
            icon: '✪',
            title: '8+ Years Of Industry Experience',
            description:
              'Since 2017, we have successfully delivered 500+ digital projects across multiple industries worldwide.',
          },
          {
            icon: '▤',
            title: 'Cost-Effective Development',
            description:
              'We provide high-quality web design and software development at competitive pricing without compromising performance.',
          },
          {
            icon: '▥',
            title: 'Conversion-Focused Approach',
            description:
              'Our websites are not just visually appealing. They are optimized for SEO, speed, and lead generation.',
          },
          {
            icon: '◍',
            title: 'Global Clientele',
            description:
              'We proudly serve clients across India, the United States, Australia, and the United Kingdom.',
          },
        ],
        tickerItems: [
          { label: 'Improve User Experience' },
          { label: 'Increase Online Visibility' },
          { label: 'Generate Qualified Leads' },
          { label: 'Boost Revenue Growth' },
        ],
      },
      {
        __component: 'sections.vision-mission',
        pill: 'Walstar Group',
        headingPrefix: 'Shaping the',
        headingSerif: 'future',
        headingSuffix: '\ntogether',
        visionIcon: '◎',
        visionTitle: 'Our Vision',
        visionDescription:
          'To become a trusted global technology partner by delivering innovative digital solutions that shape the future of businesses.',
        visionCtaLabel: 'Work With Us ↗',
        visionCtaHref: '/contact',
        missionIcon: '◎',
        missionTitle: 'Our Mission',
        missionDescription:
          'Our mission is to empower businesses with reliable, scalable technology solutions. We combine creativity, innovation, and expertise to build digital experiences that help clients grow.',
      },
      {
        __component: 'sections.team-showcase',
        pill: 'Our Team',
        headingPrefix: 'We do things that\n',
        headingSerif: 'matters',
        executiveLabel: 'Executive Team',
        executiveQuote: '“Quality Is Not Optional. It Is Our Foundation.”',
        executiveQuoteAuthor: '-Walstar Technologies',
        executives: [
          {
            name: 'Ashish Manwadkar',
            role: 'Founder & Managing Director',
            linkedinUrl: '#cta',
          },
          {
            name: 'Chetan Patil',
            role: 'Co-Founder & CEO',
            linkedinUrl: '#cta',
          },
          {
            name: 'Snehal Manwadkar',
            role: 'Co-Founder & Director',
            linkedinUrl: '#cta',
          },
        ],
        advisoryTitle: 'Global Advisory Panel',
        advisoryMembers: [
          {
            name: 'Vasant Manwadkar',
            role: 'Advisor',
            linkedinUrl: '#cta',
          },
          {},
          {},
        ],
        salesTitle: 'Global Sales Leadership',
        salesMembers: [
          {
            name: 'James Turner',
            role: 'Regional Sales\nManager (USA)',
            linkedinUrl: '#cta',
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
      },
      {
        __component: 'sections.global-offices',
        pill: 'Areas we serve',
        headingPrefix: 'Our global',
        headingSerif: 'offices',
        showWorldMap: true,
        mapPins: [
          {
            label: 'Dallas,TX USA',
            leftPercent: 12,
            topPx: 0,
            flagVariant: 'us',
          },
          {
            label: 'Kolhapur | Pune, India',
            leftPercent: 46,
            topPx: 14,
            flagVariant: 'in',
          },
          {
            label: 'Brisbane, QLD Australia',
            leftPercent: 64,
            topPx: 118,
            flagVariant: 'au',
          },
        ],
        offices: [
          {
            regionLabel: 'India · HQ',
            title: 'SHIVAJI PARK',
            cityRegion: 'Kolhapur, Maharashtra',
            address:
              '2103/47 E, Rukmini Nagar, Back side of Sayaji Hotel, Kolhapur, Maharashtra 416005',
            isHeadquarters: true,
          },
          {
            regionLabel: 'USA',
            title: 'McKinney',
            cityRegion: 'Texas, USA',
            address:
              '5860 Collin McKinney Pkwy, St# 601, McKinney TX 75070 USA',
            isHeadquarters: false,
          },
          {
            regionLabel: 'Australia',
            title: 'Carindale',
            cityRegion: 'Queensland, Australia',
            address: '105 Bridgnorth Street, Carindale Qld 4152, Australia',
            isHeadquarters: false,
          },
          {
            regionLabel: 'UK',
            title: 'Burgess Hill',
            cityRegion: 'England, UK',
            address: 'Wolstonbury Court Burgess Hill, RH15',
            isHeadquarters: false,
          },
          {
            regionLabel: 'India',
            title: 'Warje',
            cityRegion: 'Pune, India',
            address:
              'Wallstreet 24, Above Mc-Donald, Mumbai-Banglore Highway. Warje, Pune 411058',
            isHeadquarters: false,
          },
          {
            regionLabel: 'India',
            title: 'Goregaon West',
            cityRegion: 'Mumbai, India',
            address:
              '7/213, Siddharth nagar, SV Road, Goregaon West, Maharashtra 400104',
            isHeadquarters: false,
          },
        ],
      },
      {
        ...SHARED_CTA_BAND,
        pill: 'CTA',
        heading: 'Ready to build something iconic?',
        subheading: 'Walstar Technologies is ready to power your digital growth.',
        buttonLabel: 'Schedule a Consultation ↗',
        buttonHref: '/contact',
      },
    ],
  },
  {
    documentId: 'seed-page-contact',
    title: 'Contact',
    slug: 'contact',
    isHomepage: false,
    pageType: 'contact',
    order: 3,
    summary:
      'Connect with Walstar Technologies for AI solutions, automation audits, and custom software engineering.',
    seo: {
      metaTitle: 'Contact Us | Walstar Technologies',
      metaDescription:
        'Book a strategy call or send a project inquiry to Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        chip: 'Contact Walstar',
        headlinePrefix: 'Your Next',
        headlineSerif: 'Digital Journey',
        headlineSuffix: 'Starts Here',
        variant: 'compact',
      },
      {
        __component: 'sections.contact-interest',
        tag: 'Contact Walstar',
        headingPrefix: "Let's build something\n",
        headingSerif: 'great',
        headingSuffix: 'together',
        subtitle:
          'Have an idea, project, or challenge in mind? Let’s connect and turn it into something impactful.',
        options: CONTACT_INTEREST_OPTIONS,
      },
      {
        __component: 'sections.contact-section',
        tag: "Let's talk about your business",
        headingPrefix: 'Reach out',
        headingSerif: 'directly',
        subtitle:
          "Prefer a quick conversation? We're just a call or email away.",
        showOfficeDetails: true,
        callLabel: 'Call Us :',
        callPhones: '+91 9665784568\n+44 7877 910843\n+1 617 610 9184',
        emailLabel: 'Email Us :',
        emailAddresses:
          'career@walstartechnologies.com\nsales@walstartechnologies.com',
        formTitle: "Let's Get Started",
        formSubtitle:
          'Receive a free consultation for your project to discuss ideas, solutions, and next steps.',
        formButtonLabel: 'Send Message ↗',
        formSource: 'contact-page',
        budgetOptions: CONTACT_BUDGET_OPTIONS,
        serviceOptions: CONTACT_INTEREST_OPTIONS,
      },
      SHARED_GLOBAL_OFFICES,
      {
        ...SHARED_CTA_BAND,
        pill: 'CTA',
        heading: 'Ready to make your next move?',
        subheading: 'Walstar Technologies is ready to power your digital growth.',
        buttonLabel: 'Connect With Us ↗',
        buttonHref: '#contact-form',
      },
    ],
  },
  {
    documentId: 'seed-page-service-1',
    title: 'Service 1',
    slug: 'service-1',
    isHomepage: false,
    pageType: 'service',
    order: 4,
    summary:
      'AI Solutions, Business Automation, Custom Software, and SaaS Product Engineering capabilities.',
    sections: [
      {
        __component: 'sections.hero',
        chip: 'Service 1 • AI Solutions & Business Automation',
        headlinePrefix: 'AI Systems',
        headlineSerif: 'Built for',
        headlineSuffix: 'Real ROI.',
        description:
          'From autonomous customer agents and ERP integrations to cloud SaaS architecture, we engineer end-to-end systems that ship smoothly into production.',
        primaryCtaLabel: 'Explore Capabilities ↓',
        primaryCtaHref: '#cap',
        secondaryCtaLabel: 'Book Consultation ↗',
        secondaryCtaHref: '/contact',
      },
      {
        __component: 'sections.capabilities',
        pill: 'Capabilities',
        headingPrefix: 'What we',
        headingSerif: 'do',
        subtitle:
          'End-to-end AI services engineered for performance, data security',
        ctaLabel: 'Book a Strategy Call ↗',
        ctaHref: '/contact',
        showAllServices: true,
        showProcess: true,
        processPill: 'Delivery Process',
        processHeadingPrefix: 'From',
        processHeadingSerif: 'idea',
        processHeadingSuffix: 'to production',
        processNote:
          'Every engagement follows a clear 4-stage blueprint designed for speed, security, and measurable impact.',
        processVideoLabel: 'Video Presentation',
        processVideoUrl: '/contact',
        processSteps: DEFAULT_PROCESS_STEPS,
      },
      {
        __component: 'sections.before-after',
        beforeEyebrow: 'BEFORE',
        beforeTitle: 'Your Team Today',
        beforeCaption: '40 hrs / week of manual work',
        afterEyebrow: 'AFTER',
        afterTitle: 'With Walstar AI',
        afterCaption: '85% less manual effort. 05 hrs / week',
      },
      {
        __component: 'sections.case-studies',
        tag: 'Proof of Work',
        headingPrefix: 'Featured',
        headingSerif: 'client outcomes',
        subtitle:
          'See how modern architecture and automation translate into faster teams and higher conversions.',
        ctaLabel: 'Discuss Your Project ↗',
        ctaHref: '/contact',
        showAllCaseStudies: true,
      },
      {
        ...SHARED_CTA_BAND,
        buttonHref: '/contact',
      },
    ],
  },
  {
    documentId: 'seed-page-welcome',
    title: 'Welcome to Walstar Technologies',
    slug: 'welcome',
    isHomepage: false,
    pageType: 'standard',
    order: 5,
    summary:
      'Explore how Next.js, Strapi v5, and PostgreSQL power dynamic content across the Walstar platform.',
    sections: [
      {
        __component: 'sections.rich-content',
        tag: 'CMS Powered',
        headingPrefix: 'Manage every page from',
        headingSerif: 'Strapi Admin',
        body: [
          'Every route under the Page collection (home, about-us, contact, service-1, and any additional pages you create later) is composed from reusable Dynamic Zone sections.',
          '',
          'Add, reorder, or customize sections inside Strapi Content Manager -> Page, publish your changes, and Next.js automatically renders the updated layout.',
        ].join('\n'),
        ctaLabel: 'Back to Homepage ↗',
        ctaHref: '/',
      },
      {
        ...SHARED_CTA_BAND,
        buttonHref: '/contact',
      },
    ],
  },
];

export const DEFAULT_HOMEPAGE_PAGE = DEFAULT_PAGES[0];

export const DEFAULT_NAVBAR: NavbarData = {
  documentId: 'seed-navbar-main',
  name: 'Primary Navbar',
  slug: 'main',
  isDefault: true,
  logoHref: '/',
  items: [
    {
      label: 'Home',
      route: '/',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'Services',
      route: '/service-1',
      hasDropdown: true,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [
        {
          label: 'AI Solutions & Automation',
          description: 'AI agents, chatbots & workflow automation',
          route: '/service-1',
          badge: 'Service 1',
          openInNewTab: false,
        },
        {
          label: 'Digital Marketing & Growth',
          description: 'AI-search visibility & qualified lead growth',
          route: '/services/digital-marketing-performance-growth',
          openInNewTab: false,
        },
        {
          label: 'Custom Software & ERP',
          description: 'Connected ERPs, CRMs & enterprise systems',
          route: '/services/custom-software-development',
          openInNewTab: false,
        },
        {
          label: 'Web & SaaS Product Engineering',
          description: 'Fast, secure multi-tenant SaaS platforms',
          route: '/services/web-saas-product-development',
          openInNewTab: false,
        },
      ],
    },
    {
      label: 'Industries',
      route: '/#prod',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'Our Work',
      route: '/#case',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'About Us',
      route: '/about-us',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'Contact',
      route: '/contact',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
  ],
  ctaShow: true,
  ctaLabel: 'Book a strategy call',
  ctaRoute: '/contact',
  ctaOpenInNewTab: false,
};

export const DEFAULT_FOOTER: FooterData = {
  documentId: 'seed-footer',
  name: 'Primary Footer',
  slug: 'primary-footer',
  isDefault: true,
  logoAccentText: 'TECHNOLOGIES PVT. LTD.',
  aboutText:
    'Results-driven digital agency building secure, scalable solutions for global businesses.',
  aboutLogo: null,
  consultationShow: true,
  consultationTitle: 'Have Project in mind ?',
  consultationSubtitle: 'Let’s create something great.',
  consultationButtonLabel: 'Free Consultation ↗',
  headlinePrefix: 'Build',
  headlineSerif: 'AI Products',
  headlineSuffix: 'that actually Ships.',
  ctaLabel: 'Contact Now ↗',
  ctaRoute: '/contact',
  ctaOpenInNewTab: false,
  linkColumns: [
    {
      title: 'Company',
      links: [
        { label: 'Home', route: '/', openInNewTab: false },
        { label: 'About', route: '/about-us', openInNewTab: false },
        { label: 'Blog', route: '/welcome', openInNewTab: false },
        { label: 'Portfolio', route: '/#case', openInNewTab: false },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Services', route: '/service-1', openInNewTab: false },
        { label: 'Career', route: '/about-us', openInNewTab: false },
        { label: 'Contact', route: '/contact', openInNewTab: false },
        { label: 'Events & Programs', route: '/#prod', openInNewTab: false },
      ],
    },
  ],
  officeAddress:
    '2103/47 E, Rukmini Nagar, Front of Datta Mandir Kolhapur, Maharashtra 416005',
  officePhones: '+91 9665764568\n+44 787 791 0843\n+18178109184',
  contactEmail: 'sales@walstartechnologies.com',
  socialLinks: [
    { platform: 'X', href: '#cta' },
    { platform: 'Instagram', href: '#cta' },
    { platform: 'Facebook', href: '#cta' },
  ],
  copyrightText:
    'Copyright © 2028 All Rights Reserved, Terms of Use and Privacy Policy',
};

export function getDefaultPageBySlug(slug: string): PageItem | null {
  if (slug === 'home') return DEFAULT_HOMEPAGE_PAGE;
  return DEFAULT_PAGES.find((page) => page.slug === slug) ?? null;
}

export const DEFAULT_LANDING_DATA: LandingPayload = {
  navbar: DEFAULT_NAVBAR,
  footer: DEFAULT_FOOTER,
  siteSetting: DEFAULT_SITE_SETTING,
  page: DEFAULT_HOMEPAGE_PAGE,
  services: DEFAULT_SERVICES,
  products: DEFAULT_PRODUCTS,
  caseStudies: DEFAULT_CASE_STUDIES,
  testimonials: DEFAULT_TESTIMONIALS,
  pages: DEFAULT_PAGES.map(({ documentId, title, slug, pageType, isHomepage, order }) => ({
    documentId,
    title,
    slug,
    pageType,
    isHomepage,
    order,
  })),
};
