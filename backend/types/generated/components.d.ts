import type { Schema, Struct } from '@strapi/strapi';

export interface AboutMapPin extends Struct.ComponentSchema {
  collectionName: 'components_about_map_pins';
  info: {
    displayName: 'World Map Pin';
    icon: 'earth';
  };
  attributes: {
    flagVariant: Schema.Attribute.Enumeration<['us', 'in', 'au', 'uk']> &
      Schema.Attribute.DefaultTo<'in'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    leftPercent: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<50>;
    topPx: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<14>;
  };
}

export interface AboutMilestone extends Struct.ComponentSchema {
  collectionName: 'components_about_milestones';
  info: {
    displayName: 'Journey Milestone';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    era: Schema.Attribute.String & Schema.Attribute.Required;
    isCurrent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutOfficeLocation extends Struct.ComponentSchema {
  collectionName: 'components_about_office_locations';
  info: {
    displayName: 'Office Location';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    cityRegion: Schema.Attribute.String;
    isHeadquarters: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mapUrl: Schema.Attribute.String;
    regionLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_about_solution_items';
  info: {
    displayName: 'Solution Card';
    icon: 'grid';
  };
  attributes: {
    category: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/service-1'>;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutStatItem extends Struct.ComponentSchema {
  collectionName: 'components_about_stat_items';
  info: {
    displayName: 'Stat Counter';
    icon: 'chartBubble';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_about_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String;
  };
}

export interface AboutTickerItem extends Struct.ComponentSchema {
  collectionName: 'components_about_ticker_items';
  info: {
    displayName: 'Ticker Item';
    icon: 'check';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutWhyReason extends Struct.ComponentSchema {
  collectionName: 'components_about_why_reasons';
  info: {
    displayName: 'Why Choose Reason';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u25AD'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'Footer Column';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.footer-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    route: Schema.Attribute.String;
  };
}

export interface HomeProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_home_process_steps';
  info: {
    displayName: 'Process Step';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isHighlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'Nav Item';
    icon: 'bulletList';
  };
  attributes: {
    hasDropdown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isHighlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    route: Schema.Attribute.String;
    subItems: Schema.Attribute.Component<'navigation.sub-nav-item', true>;
  };
}

export interface NavigationSubNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_nav_items';
  info: {
    displayName: 'Sub Nav Item';
    icon: 'arrowRight';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    route: Schema.Attribute.String;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About Section';
    icon: 'information';
  };
  attributes: {
    ctaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/about-us'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'More About Us \u2197'>;
    description: Schema.Attribute.Text;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The team behind'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'smarter'>;
    headingSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'automation'>;
    highlightDescription: Schema.Attribute.Text;
    highlightIcon: Schema.Attribute.Media<'images'>;
    highlightTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Engineering an Intelligent Future'>;
    primaryImage: Schema.Attribute.Media<'images'>;
    secondaryImage: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'About us'>;
  };
}

export interface SectionsBeforeAfter extends Struct.ComponentSchema {
  collectionName: 'components_sections_before_afters';
  info: {
    displayName: 'Before & After Comparison';
    icon: 'contrast';
  };
  attributes: {
    afterCaption: Schema.Attribute.Text;
    afterEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The Solution'>;
    afterImage: Schema.Attribute.Media<'images'>;
    afterTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'With Walstar'>;
    beforeCaption: Schema.Attribute.Text;
    beforeEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The Problem'>;
    beforeImage: Schema.Attribute.Media<'images'>;
    beforeTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Before Walstar'>;
  };
}

export interface SectionsCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_sections_capabilities';
  info: {
    displayName: 'Capabilities & Process';
    icon: 'cog';
  };
  attributes: {
    animationDurationSeconds: Schema.Attribute.Integer &
      Schema.Attribute.CustomField<'global::speed-slider'> &
      Schema.Attribute.SetMinMax<
        {
          max: 120;
          min: 6;
        },
        number
      > &
      Schema.Attribute.DefaultTo<36>;
    ctaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/service-1'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Services \u2197'>;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What we'>;
    headingSerif: Schema.Attribute.String & Schema.Attribute.DefaultTo<'do'>;
    pill: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Capabilities'>;
    processHeadingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'From'>;
    processHeadingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'idea'>;
    processHeadingSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'to production'>;
    processNote: Schema.Attribute.Text;
    processPill: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What we do'>;
    processSteps: Schema.Attribute.Component<'home.process-step', true>;
    processVideoLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Video Presentation'>;
    processVideoUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#cta'>;
    scrollDirection: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    showAllServices: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showProcess: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_studies';
  info: {
    displayName: 'Case Studies Section';
    icon: 'briefcase';
  };
  attributes: {
    caseStudies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    ctaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#cta'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Discover all Projects \u2197'>;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Results That'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Speak for Themselves'>;
    showAllCaseStudies: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text;
    tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Case Study'>;
  };
}

export interface SectionsContactInterest extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_interests';
  info: {
    displayName: 'Contact Interest';
    icon: 'handHeart';
  };
  attributes: {
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's build something">;
    headingSerif: Schema.Attribute.String & Schema.Attribute.DefaultTo<'great'>;
    headingSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'together'>;
    image: Schema.Attribute.Media<'images'>;
    options: Schema.Attribute.Component<'shared.interest-option', true>;
    subtitle: Schema.Attribute.Text;
    tag: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Walstar'>;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'envelop';
  };
  attributes: {
    formSource: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'contact-page'>;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's Build">;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Something Great'>;
    showOfficeDetails: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text;
    tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Contact Us'>;
  };
}

export interface SectionsCtaBand extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_bands';
  info: {
    displayName: 'CTA Band';
    icon: 'rocket';
  };
  attributes: {
    buttonHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#footer-contact'>;
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Schedule a Demo Call \u2197'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ready to Make Something Awesome?'>;
    pill: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Get in touch'>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsGlobalOffices extends Struct.ComponentSchema {
  collectionName: 'components_sections_global_offices';
  info: {
    displayName: 'Global Offices';
    icon: 'globe';
  };
  attributes: {
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our global'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'offices'>;
    headingSuffix: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    mapPins: Schema.Attribute.Component<'about.map-pin', true>;
    offices: Schema.Attribute.Component<'about.office-location', true>;
    pill: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Areas we serve'>;
    showWorldMap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero Section';
    icon: 'crown';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    backgroundVideoUrl: Schema.Attribute.String;
    chip: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI-Powered Innovation \u2022 Digital Solutions \u2022 Business Growth'>;
    description: Schema.Attribute.Text;
    headlinePrefix: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Transform Your Business With'>;
    headlineSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The Power'>;
    headlineSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'of AI.'>;
    primaryCtaHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#cap'>;
    primaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore AI Solutions \u2197'>;
    secondaryCtaHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#case'>;
    secondaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Discover your Project \u2197'>;
    variant: Schema.Attribute.Enumeration<['default', 'compact']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsJourneyStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_journey_stats';
  info: {
    displayName: 'Journey & Stats';
    icon: 'chartCircle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'From first idea to'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'lasting impact'>;
    headingSuffix: Schema.Attribute.String;
    milestones: Schema.Attribute.Component<'about.milestone', true>;
    pill: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The Walstar Way'>;
    stats: Schema.Attribute.Component<'about.stat-item', true>;
  };
}

export interface SectionsPartnerStrip extends Struct.ComponentSchema {
  collectionName: 'components_sections_partner_strips';
  info: {
    displayName: "Partner Logo's";
    icon: 'apps';
  };
  attributes: {
    animationDurationSeconds: Schema.Attribute.Integer &
      Schema.Attribute.CustomField<'global::speed-slider'> &
      Schema.Attribute.SetMinMax<
        {
          max: 120;
          min: 4;
        },
        number
      > &
      Schema.Attribute.DefaultTo<24>;
    ariaLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Partners'>;
    logos: Schema.Attribute.Component<'shared.partner-logo', true>;
    scrollDirection: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsProductsShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_products_showcases';
  info: {
    displayName: 'Products Showcase';
    icon: 'shoppingCart';
  };
  attributes: {
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Everything you need to create'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'smarter, faster'>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    showAllProducts: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text;
    tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our products'>;
  };
}

export interface SectionsRichContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_contents';
  info: {
    displayName: 'Rich Content Block';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    headingPrefix: Schema.Attribute.String;
    headingSerif: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface SectionsSolutionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_solutions_grids';
  info: {
    displayName: 'Solutions Grid';
    icon: 'apps';
  };
  attributes: {
    hasTopOverlap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Digital solutions\nbuilt to'>;
    headingSerif: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Scale'>;
    headingSuffix: Schema.Attribute.String;
    items: Schema.Attribute.Component<'about.solution-item', true>;
    pill: Schema.Attribute.String & Schema.Attribute.DefaultTo<'What we do'>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsTeamShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_showcases';
  info: {
    displayName: 'Team Showcase';
    icon: 'manyWays';
  };
  attributes: {
    advisoryMembers: Schema.Attribute.Component<'about.team-member', true>;
    advisoryTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Global Advisory Panel'>;
    executiveLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Executive Team'>;
    executiveQuote: Schema.Attribute.Text;
    executiveQuoteAuthor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'-Walstar Technologies'>;
    executives: Schema.Attribute.Component<'about.team-member', true>;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'We do things that\n'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'matters'>;
    headingSuffix: Schema.Attribute.String;
    pill: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our Team'>;
    salesMembers: Schema.Attribute.Component<'about.team-member', true>;
    salesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Global Sales Leadership'>;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials Section';
    icon: 'message';
  };
  attributes: {
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What Clients Say'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Us'>;
    showAllTestimonials: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Testimonials'>;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SectionsTrustBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_trust_banners';
  info: {
    description: 'Dual-row trusted brands marquee';
    displayName: 'Trust Banner';
    icon: 'shield';
  };
  attributes: {
    bottomRowLogos: Schema.Attribute.Component<'shared.partner-logo', true>;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by'>;
    headingSerif: Schema.Attribute.String & Schema.Attribute.DefaultTo<'70+'>;
    headingSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'High-Growth Companies Globally'>;
    logos: Schema.Attribute.Component<'shared.partner-logo', true>;
    tag: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by Brands'>;
    topRowLogos: Schema.Attribute.Component<'shared.partner-logo', true>;
  };
}

export interface SectionsVisionMission extends Struct.ComponentSchema {
  collectionName: 'components_sections_vision_missions';
  info: {
    displayName: 'Vision & Mission';
    icon: 'eye';
  };
  attributes: {
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Shaping the'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'future'>;
    headingSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\ntogether'>;
    missionDescription: Schema.Attribute.Text;
    missionIcon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u25CE'>;
    missionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Mission'>;
    pill: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Walstar Group'>;
    visionCtaHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/contact'>;
    visionCtaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Work With Us \u2197'>;
    visionDescription: Schema.Attribute.Text;
    visionIcon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u25CE'>;
    visionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Vision'>;
  };
}

export interface SectionsWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_sections_who_we_ares';
  info: {
    displayName: 'Who We Are';
    icon: 'information';
  };
  attributes: {
    ctaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/service-1'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See what we do'>;
    description: Schema.Attribute.Text;
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'A trusted partner for\n'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'what\u2019s next'>;
    headingSuffix: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    pill: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Who we are'>;
  };
}

export interface SectionsWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_chooses';
  info: {
    displayName: 'Why Choose Walstar';
    icon: 'star';
  };
  attributes: {
    headingPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Built different.'>;
    headingSerif: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Built\nfor impact.'>;
    headingSuffix: Schema.Attribute.String;
    pill: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why choose Walstar'>;
    reasons: Schema.Attribute.Component<'about.why-reason', true>;
    tickerItems: Schema.Attribute.Component<'about.ticker-item', true>;
  };
}

export interface SharedInterestOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_interest_options';
  info: {
    displayName: 'Interest Option';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    hasDropdown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPartnerLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_logos';
  info: {
    displayName: 'Partner Logo';
    icon: 'star';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'globe';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.map-pin': AboutMapPin;
      'about.milestone': AboutMilestone;
      'about.office-location': AboutOfficeLocation;
      'about.solution-item': AboutSolutionItem;
      'about.stat-item': AboutStatItem;
      'about.team-member': AboutTeamMember;
      'about.ticker-item': AboutTickerItem;
      'about.why-reason': AboutWhyReason;
      'footer.footer-column': FooterFooterColumn;
      'footer.footer-link': FooterFooterLink;
      'home.process-step': HomeProcessStep;
      'navigation.nav-item': NavigationNavItem;
      'navigation.sub-nav-item': NavigationSubNavItem;
      'sections.about': SectionsAbout;
      'sections.before-after': SectionsBeforeAfter;
      'sections.capabilities': SectionsCapabilities;
      'sections.case-studies': SectionsCaseStudies;
      'sections.contact-interest': SectionsContactInterest;
      'sections.contact-section': SectionsContactSection;
      'sections.cta-band': SectionsCtaBand;
      'sections.global-offices': SectionsGlobalOffices;
      'sections.hero': SectionsHero;
      'sections.journey-stats': SectionsJourneyStats;
      'sections.partner-strip': SectionsPartnerStrip;
      'sections.products-showcase': SectionsProductsShowcase;
      'sections.rich-content': SectionsRichContent;
      'sections.solutions-grid': SectionsSolutionsGrid;
      'sections.team-showcase': SectionsTeamShowcase;
      'sections.testimonials': SectionsTestimonials;
      'sections.trust-banner': SectionsTrustBanner;
      'sections.vision-mission': SectionsVisionMission;
      'sections.who-we-are': SectionsWhoWeAre;
      'sections.why-choose': SectionsWhyChoose;
      'shared.interest-option': SharedInterestOption;
      'shared.link': SharedLink;
      'shared.partner-logo': SharedPartnerLogo;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
