export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: StrapiPagination;
  };
}

export interface StrapiMedia {
  id?: number;
  documentId?: string;
  url: string;
  alternativeText?: string | null;
  mime?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface SharedLink {
  id?: number;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface SocialLink {
  id?: number;
  platform: string;
  href: string;
  icon?: StrapiMedia | null;
  openInNewTab?: boolean;
}

export interface PartnerLogo {
  id?: number;
  name: string;
  image?: StrapiMedia | null;
}

export interface ProcessStep {
  id?: number;
  stepNumber: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export interface SeoMetadata {
  id?: number;
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: StrapiMedia | null;
}

export interface SiteSetting {
  id?: number;
  documentId?: string;
  siteName: string;
  siteLogo?: StrapiMedia | null;
  logoAccentText: string;
  footerLogoAccentText: string;
  topbarEmail: string;
  topbarEmailIcon?: StrapiMedia | null;
  topbarPhone: string;
  topbarPhoneIcon?: StrapiMedia | null;
  socialLinks: SocialLink[];
  navLinks: SharedLink[];
  headerCtaLabel: string;
  headerCtaHref: string;
  tagline?: string | null;
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  contactEmail: string;
  footerAbout: string;
  footerAboutLogo?: StrapiMedia | null;
  footerNewsletterTitle: string;
  footerNewsletterSubtitle: string;
  footerNewsletterButtonLabel: string;
  footerBigPrefix: string;
  footerBigSerif: string;
  footerBigSuffix: string;
  footerCtaLabel: string;
  footerCtaHref: string;
  footerPrimaryLinks: SharedLink[];
  footerSecondaryLinks: SharedLink[];
  officeAddress: string;
  officePhones: string;
  copyrightText: string;
}

export interface ServiceItem {
  id?: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  tag?: string | null;
  more?: string | null;
  moreLabel?: string | null;
  moreHref?: string | null;
  isWide?: boolean | null;
  icon: string;
  iconImage?: StrapiMedia | null;
  themeVariant: 'a' | 'b' | 'c' | 'd';
  image?: StrapiMedia | null;
  order: number;
}

export interface ProductItem {
  id?: number;
  documentId: string;
  name: string;
  slug: string;
  tagline?: string | null;
  description: string;
  isFeatured: boolean;
  accentGradient?: string | null;
  image?: StrapiMedia | null;
  ctaLabel?: string | null;
  ctaUrl?: string | null;
  order: number;
}

export interface CaseStudyItem {
  id?: number;
  documentId: string;
  title: string;
  slug: string;
  category: string;
  metaOneLabel?: string | null;
  metaOneValue?: string | null;
  metaTwoLabel?: string | null;
  metaTwoValue?: string | null;
  metaThreeLabel?: string | null;
  metaThreeValue?: string | null;
  summary?: string | null;
  content?: string | null;
  themeVariant: 'a' | 'b';
  coverImage?: StrapiMedia | null;
  order: number;
}

export interface TestimonialItem {
  id?: number;
  documentId: string;
  authorName: string;
  quote: string;
  companyName: string;
  rating: number;
  isHighlighted: boolean;
  avatar?: StrapiMedia | null;
  order: number;
}

export interface HeroSection {
  __component: 'sections.hero';
  id?: number;
  variant?: 'default' | 'compact';
  chip?: string | null;
  headlinePrefix: string;
  headlineSerif?: string | null;
  headlineSuffix?: string | null;
  description?: string | null;
  primaryCtaLabel?: string | null;
  primaryCtaHref?: string | null;
  secondaryCtaLabel?: string | null;
  secondaryCtaHref?: string | null;
  backgroundImage?: StrapiMedia | null;
  backgroundVideo?: StrapiMedia | null;
  backgroundVideoUrl?: string | null;
}

export interface PartnerStripSection {
  __component: 'sections.partner-strip';
  id?: number;
  ariaLabel?: string | null;
  animationDurationSeconds?: number | null;
  scrollDirection?: 'left' | 'right' | null;
  logos?: PartnerLogo[];
}

export interface AboutSection {
  __component: 'sections.about';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  description?: string | null;
  highlightTitle?: string | null;
  highlightDescription?: string | null;
  highlightIcon?: StrapiMedia | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  primaryImage?: StrapiMedia | null;
  secondaryImage?: StrapiMedia | null;
}

export interface CapabilitiesSection {
  __component: 'sections.capabilities';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  subtitle?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  showAllServices?: boolean | null;
  services?: ServiceItem[];
  animationDurationSeconds?: number | null;
  scrollDirection?: 'left' | 'right' | null;
  showProcess?: boolean | null;
  processPill?: string | null;
  processHeadingPrefix?: string | null;
  processHeadingSerif?: string | null;
  processHeadingSuffix?: string | null;
  processNote?: string | null;
  processVideoLabel?: string | null;
  processVideoUrl?: string | null;
  processSteps?: ProcessStep[];
}

export interface ProductsShowcaseSection {
  __component: 'sections.products-showcase';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  subtitle?: string | null;
  showAllProducts?: boolean | null;
  products?: ProductItem[];
}

export interface TrustBannerSection {
  __component: 'sections.trust-banner';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  topRowLogos?: PartnerLogo[];
  bottomRowLogos?: PartnerLogo[];
  logos?: PartnerLogo[];
  topRowDurationSeconds?: number | null;
  topRowDirection?: 'left' | 'right' | null;
  bottomRowDurationSeconds?: number | null;
  bottomRowDirection?: 'left' | 'right' | null;
  animationDurationSeconds?: number | null;
  scrollDirection?: 'left' | 'right' | null;
}

export interface CaseStudiesSection {
  __component: 'sections.case-studies';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  subtitle?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  showAllCaseStudies?: boolean | null;
  caseStudies?: CaseStudyItem[];
}

export interface TestimonialsSection {
  __component: 'sections.testimonials';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  showAllTestimonials?: boolean | null;
  testimonials?: TestimonialItem[];
}

export interface BeforeAfterSection {
  __component: 'sections.before-after';
  id?: number;
  beforeEyebrow?: string | null;
  beforeTitle?: string | null;
  beforeCaption?: string | null;
  beforeImage?: StrapiMedia | null;
  afterEyebrow?: string | null;
  afterTitle?: string | null;
  afterCaption?: string | null;
  afterImage?: StrapiMedia | null;
}

export interface CtaBandSection {
  __component: 'sections.cta-band';
  id?: number;
  pill?: string | null;
  heading: string;
  subheading?: string | null;
  buttonLabel?: string | null;
  buttonHref?: string | null;
}

export interface RichContentSection {
  __component: 'sections.rich-content';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  body?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
}

export interface InterestOptionItem {
  id?: number;
  label: string;
}

export interface ContactSectionBlock {
  __component: 'sections.contact-section';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  subtitle?: string | null;
  showOfficeDetails?: boolean | null;
  callLabel?: string | null;
  callPhones?: string | null;
  emailLabel?: string | null;
  emailAddresses?: string | null;
  formTitle?: string | null;
  formSubtitle?: string | null;
  formButtonLabel?: string | null;
  formSource?: string | null;
  budgetOptions?: InterestOptionItem[];
  serviceOptions?: InterestOptionItem[];
}

export interface ContactInterestSection {
  __component: 'sections.contact-interest';
  id?: number;
  tag?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  subtitle?: string | null;
  image?: StrapiMedia | null;
  options?: InterestOptionItem[];
}

export interface JourneyMilestone {
  id?: number;
  era: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export interface StatCounterItem {
  id?: number;
  value: string;
  label: string;
}

export interface SolutionCardItem {
  id?: number;
  number: string;
  title: string;
  category?: string | null;
  href?: string | null;
}

export interface WhyChooseReason {
  id?: number;
  icon?: string | null;
  iconImage?: StrapiMedia | { url: string; alternativeText?: string } | null;
  title: string;
  description: string;
}

export interface TickerLabelItem {
  id?: number;
  label: string;
  iconImage?: StrapiMedia | { url: string; alternativeText?: string } | null;
}

export interface TeamMemberItem {
  id?: number;
  name?: string | null;
  role?: string | null;
  linkedinUrl?: string | null;
  photo?: StrapiMedia | null;
}

export interface OfficeLocationItem {
  id?: number;
  country?: string | null;
  regionLabel: string;
  title: string;
  cityRegion?: string | null;
  address: string;
  mapUrl?: string | null;
  isHeadquarters?: boolean;
  countryPreset?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export interface WorldMapPinItem {
  id?: number;
  label: string;
  leftPercent?: number;
  topPx?: number;
  flagVariant?: string | null;
  countryPreset?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export interface WhoWeAreSection {
  __component: 'sections.who-we-are';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  description?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  image?: StrapiMedia | null;
}

export interface JourneyStatsSection {
  __component: 'sections.journey-stats';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  description?: string | null;
  milestones?: JourneyMilestone[];
  stats?: StatCounterItem[];
}

export interface SolutionsGridSection {
  __component: 'sections.solutions-grid';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  subtitle?: string | null;
  hasTopOverlap?: boolean | null;
  direction?: 'left' | 'right' | null;
  speedSeconds?: number | null;
  items?: SolutionCardItem[];
}

export interface WhyChooseSection {
  __component: 'sections.why-choose';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  reasons?: WhyChooseReason[];
  tickerItems?: TickerLabelItem[];
}

export interface VisionMissionSection {
  __component: 'sections.vision-mission';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  visionIcon?: string | null;
  visionTitle?: string | null;
  visionDescription?: string | null;
  visionCtaLabel?: string | null;
  visionCtaHref?: string | null;
  missionIcon?: string | null;
  missionTitle?: string | null;
  missionDescription?: string | null;
}

export interface TeamShowcaseSection {
  __component: 'sections.team-showcase';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  executiveLabel?: string | null;
  executiveQuote?: string | null;
  executiveQuoteAuthor?: string | null;
  executives?: TeamMemberItem[];
  advisoryTitle?: string | null;
  advisoryMembers?: TeamMemberItem[];
  salesTitle?: string | null;
  salesMembers?: TeamMemberItem[];
}

export interface GlobalOfficesSection {
  __component: 'sections.global-offices';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  showWorldMap?: boolean | null;
  image?: StrapiMedia | null;
  mapPins?: WorldMapPinItem[];
  offices?: OfficeLocationItem[];
}


/* ─── Service page sub-items ─────────────────────────────────────── */
export interface SvcChallengeItem {
  id?: number;
  icon?: string | null;
  title: string;
  description?: string | null;
}

export interface SvcCapabilityItem {
  id?: number;
  icon?: string | null;
  title: string;
  description?: string | null;
  tag?: string | null;
  more?: string | null;
  isDark?: boolean | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
}

export interface SvcBenefitItem {
  id?: number;
  icon?: string | null;
  title: string;
  description?: string | null;
  isDark?: boolean | null;
}

export interface SvcProcessStepItem {
  id?: number;
  number: string;
  title: string;
  description?: string | null;
}

export interface SvcGetItem {
  id?: number;
  label: string;
  icon?: string | null;
}

/* ─── Service page sections ──────────────────────────────────────── */
export interface SvcIntroSection {
  __component: 'sections.svc-intro';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  description?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  image?: StrapiMedia | null;
}

export interface SvcChallengesSection {
  __component: 'sections.svc-challenges';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  bodyOne?: string | null;
  bodyTwo?: string | null;
  challengeItems?: SvcChallengeItem[];
}

export interface SvcCapabilitiesSection {
  __component: 'sections.svc-capabilities';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  description?: string | null;
  capabilityItems?: SvcCapabilityItem[];
}

export interface SvcBenefitsSection {
  __component: 'sections.svc-benefits';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  benefitItems?: SvcBenefitItem[];
}

export interface SvcProcessSection {
  __component: 'sections.svc-process';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  steps?: SvcProcessStepItem[];
}

export interface SvcApproachSection {
  __component: 'sections.svc-approach';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  bodyOne?: string | null;
  bodyTwo?: string | null;
  getBoxTitle?: string | null;
  getBoxItems?: SvcGetItem[];
}

export interface SvcCtaSection {
  __component: 'sections.svc-cta';
  id?: number;
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  bodyOne?: string | null;
  bodyTwo?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
}

export type PageSection =
  | HeroSection
  | PartnerStripSection
  | AboutSection
  | CapabilitiesSection
  | ProductsShowcaseSection
  | TrustBannerSection
  | CaseStudiesSection
  | TestimonialsSection
  | BeforeAfterSection
  | CtaBandSection
  | RichContentSection
  | ContactSectionBlock
  | ContactInterestSection
  | WhoWeAreSection
  | JourneyStatsSection
  | SolutionsGridSection
  | WhyChooseSection
  | VisionMissionSection
  | TeamShowcaseSection
  | GlobalOfficesSection
  | SvcIntroSection
  | SvcChallengesSection
  | SvcCapabilitiesSection
  | SvcBenefitsSection
  | SvcProcessSection
  | SvcApproachSection
  | SvcCtaSection;

export type PageType = 'homepage' | 'about' | 'contact' | 'service' | 'standard';


export interface NavPageRef {
  id?: number;
  documentId?: string;
  title?: string;
  slug?: string;
  isHomepage?: boolean;
}

export interface SubNavItem {
  id?: number;
  label: string;
  description?: string | null;
  route?: string | null;
  page?: NavPageRef | null;
  badge?: string | null;
  openInNewTab?: boolean;
}

export interface NavItem {
  id?: number;
  label: string;
  route?: string | null;
  page?: NavPageRef | null;
  hasDropdown?: boolean;
  isHighlighted?: boolean;
  openInNewTab?: boolean;
  subItems?: SubNavItem[];
}

export interface NavbarData {
  id?: number;
  documentId?: string;
  name: string;
  slug: string;
  isDefault?: boolean;
  logoImage?: StrapiMedia | null;
  logoHref?: string | null;
  items: NavItem[];
  ctaShow?: boolean;
  ctaLabel?: string | null;
  ctaRoute?: string | null;
  ctaOpenInNewTab?: boolean;
}

export interface FooterLink {
  id?: number;
  label: string;
  route?: string | null;
  page?: NavPageRef | null;
  openInNewTab?: boolean;
}

export interface FooterColumn {
  id?: number;
  title?: string | null;
  links?: FooterLink[];
}

export interface FooterData {
  id?: number;
  documentId?: string;
  name: string;
  slug: string;
  isDefault?: boolean;
  logoImage?: StrapiMedia | null;
  logoAccentText?: string | null;
  aboutText?: string | null;
  aboutLogo?: StrapiMedia | null;
  consultationShow?: boolean;
  consultationTitle?: string | null;
  consultationSubtitle?: string | null;
  consultationButtonLabel?: string | null;
  headlinePrefix?: string | null;
  headlineSerif?: string | null;
  headlineSuffix?: string | null;
  ctaLabel?: string | null;
  ctaRoute?: string | null;
  ctaOpenInNewTab?: boolean;
  linkColumns?: FooterColumn[];
  officeAddress?: string | null;
  officePhones?: string | null;
  contactEmail?: string | null;
  socialLinks?: SocialLink[];
  copyrightText?: string | null;
}

export interface PageItem {
  id?: number;
  documentId: string;
  title: string;
  slug: string;
  isHomepage?: boolean;
  pageType?: PageType;
  summary?: string | null;
  content?: string | null;
  order?: number;
  navbar?: NavbarData | null;
  footer?: FooterData | null;
  seo?: SeoMetadata | null;
  sections?: PageSection[];
}

export interface PageSummary {
  id?: number;
  documentId: string;
  title: string;
  slug: string;
  pageType?: PageType;
  isHomepage?: boolean;
  order?: number;
}

export interface LandingPayload {
  navbar?: NavbarData | null;
  footer?: FooterData | null;
  siteSetting: SiteSetting;
  page: PageItem;
  services: ServiceItem[];
  products: ProductItem[];
  caseStudies: CaseStudyItem[];
  testimonials: TestimonialItem[];
  pages?: PageSummary[];
}

export interface StrapiHealthStatus {
  ok: boolean;
  status: 'healthy' | 'unhealthy' | 'unreachable';
  service: string;
  database: {
    client: string;
    connected: boolean;
    error?: string;
  };
  timestamp: string;
}
