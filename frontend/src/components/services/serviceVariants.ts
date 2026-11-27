import { STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type {
  SvcApproachSection,
  SvcBenefitsSection,
  SvcCapabilitiesSection,
  SvcCtaSection,
  SvcIntroSection,
  SvcProcessSection,
} from '@/types/strapi';

export type ServiceScreenVariant =
  | 'ai-solutions'
  | 'custom-software'
  | 'digital-marketing'
  | 'web-saas'
  | 'mobile-app';

export interface IntroVariantConfig {
  mode: 'modern' | 'custom' | 'ai';
  defaultImage: string;
  defaultAlt: string;
  defaultPill: string;
  defaultHeadingPrefix: string;
  defaultHeadingSerif: string;
  defaultHeadingSuffix: string;
  defaultDescription: string;
  defaultCtaLabel: string;
  defaultCtaHref: string;
}

export const INTRO_VARIANT_CONFIGS: Record<ServiceScreenVariant, IntroVariantConfig> = {
  'mobile-app': {
    mode: 'modern',
    defaultImage: '/images/services/mobile-app.png',
    defaultAlt: 'Person holding a smartphone showing app analytics',
    defaultPill: 'Mobile App Development',
    defaultHeadingPrefix: 'Build Powerful Mobile Apps That\n Connect ',
    defaultHeadingSerif: 'Your Business With\n',
    defaultHeadingSuffix: 'Customers',
    defaultDescription:
      'We design and develop user-friendly, high-performance mobile applications that help businesses improve customer engagement, simplify operations, and grow digitally.',
    defaultCtaLabel: 'Discuss Your App Project ↗',
    defaultCtaHref: '#contact',
  },
  'web-saas': {
    mode: 'modern',
    defaultImage: '/images/services/web-saas.png',
    defaultAlt: 'Team working with web application dashboards',
    defaultPill: 'Web & SaaS',
    defaultHeadingPrefix: 'Build Powerful Web Experiences\n and ',
    defaultHeadingSerif: 'Scalable SaaS Products',
    defaultHeadingSuffix: '',
    defaultDescription:
      'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.',
    defaultCtaLabel: 'Discuss Your Web Project ↗',
    defaultCtaHref: '#contact',
  },
  'digital-marketing': {
    mode: 'modern',
    defaultImage: STRAPI_IMAGE_PLACEHOLDER,
    defaultAlt: 'Marketing team reviewing performance dashboards',
    defaultPill: 'Growth & Visibility',
    defaultHeadingPrefix: 'SEO, AI Search Visibility &',
    defaultHeadingSerif: 'Performance Marketing',
    defaultHeadingSuffix: '',
    defaultDescription:
      'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.',
    defaultCtaLabel: 'Free AI & SEO Audit ↗',
    defaultCtaHref: '#contact',
  },
  'custom-software': {
    mode: 'custom',
    defaultImage: STRAPI_IMAGE_PLACEHOLDER,
    defaultAlt: 'Developer typing on a laptop',
    defaultPill: 'Designed to Scale',
    defaultHeadingPrefix: 'Build',
    defaultHeadingSerif: 'Custom Software',
    defaultHeadingSuffix: 'That Works the Way Your Business Works',
    defaultDescription:
      'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.',
    defaultCtaLabel: 'Discuss Your Software Project ↗',
    defaultCtaHref: '#cta',
  },
  'ai-solutions': {
    mode: 'ai',
    defaultImage: STRAPI_IMAGE_PLACEHOLDER,
    defaultAlt: 'Developer typing on a laptop',
    defaultPill: 'AI Solutions & Business Automation',
    defaultHeadingPrefix: 'AI Agents and Automation that cut',
    defaultHeadingSerif: 'Manual Work',
    defaultHeadingSuffix: 'and bring in more Leads',
    defaultDescription: '',
    defaultCtaLabel: '',
    defaultCtaHref: '#cta',
  },
};

export function resolveIntroVariant(section: SvcIntroSection): ServiceScreenVariant {
  if (section.layoutVariant) return section.layoutVariant;
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const suffix = section.headingSuffix?.trim() || '';
  const pill = section.pill?.toLowerCase() || '';

  if (
    serif.includes('Your Business With') ||
    prefix.includes('Build Powerful Mobile Apps') ||
    pill.includes('mobile app')
  ) {
    return 'mobile-app';
  }
  if (
    serif.includes('Scalable SaaS Products') ||
    prefix.includes('Build Powerful Web Experiences') ||
    pill.includes('web & saas')
  ) {
    return 'web-saas';
  }
  if (
    serif.includes('Performance Marketing') ||
    prefix.includes('AI Search Visibility') ||
    pill.includes('growth & visibility')
  ) {
    return 'digital-marketing';
  }
  if (
    serif.includes('Custom Software') ||
    prefix.includes('Custom Software') ||
    suffix.includes('Business Works')
  ) {
    return 'custom-software';
  }
  return 'ai-solutions';
}

export function resolveCapabilitiesVariant(section: SvcCapabilitiesSection): ServiceScreenVariant {
  if (section.layoutVariant) return section.layoutVariant;
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const items = section.capabilityItems ?? [];

  if (
    (serif.includes('Your Business') && prefix.includes('Mobile App')) ||
    items.some((it) => it.tag?.includes('Android') || it.title.includes('Android App'))
  ) {
    return 'mobile-app';
  }
  if (
    (serif.includes('Your Business') && prefix.includes('Web & SaaS')) ||
    items.some((it) => it.tag || it.title.includes('Custom Website'))
  ) {
    return 'web-saas';
  }
  return 'ai-solutions';
}

export function resolveBenefitsVariant(section: SvcBenefitsSection): ServiceScreenVariant {
  if (section.layoutVariant) return section.layoutVariant;
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const items = section.benefitItems ?? section.benefitCards ?? [];

  if (
    (prefix.includes('Mobile App') &&
      (serif.includes('Development Process') || serif.includes('Benefits') || serif.includes('Process'))) ||
    items.some(
      (it) =>
        it.title.includes('Improve Customer Engagement') ||
        it.title.includes('Strengthen Your Digital Presence')
    )
  ) {
    return 'mobile-app';
  }
  if (
    (prefix.includes('Web & SaaS') && serif.includes('Business Grow')) ||
    items.some((it) => it.title.includes('Create Better') || it.title.includes('Turn Ideas Into'))
  ) {
    return 'web-saas';
  }
  if (
    serif.includes('Grow') ||
    prefix.includes('How Digital Marketing Helps') ||
    items.some(
      (it) => it.title.includes('Turn More Visitors') || it.title.includes('Relevant Customers')
    )
  ) {
    return 'digital-marketing';
  }
  if (
    serif.includes('Helps Your Business') ||
    prefix.includes('Custom Software') ||
    items.some((it) => it.isDark && it.title.includes('Connect Your Existing Systems'))
  ) {
    return 'custom-software';
  }
  return 'ai-solutions';
}

export function resolveProcessVariant(section: SvcProcessSection): ServiceScreenVariant {
  if (section.layoutVariant) return section.layoutVariant;
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const steps = section.steps ?? [];

  if (
    (prefix.includes('Mobile App') && serif.includes('Development Process')) ||
    steps.some(
      (s) =>
        s.title.includes('Discovery &\n Requirement') ||
        s.title.includes('Deployment & App')
    )
  ) {
    return 'mobile-app';
  }
  if (
    (prefix.includes('Web & SaaS') && serif.includes('Development Process')) ||
    steps.some(
      (s) =>
        s.title.includes('Discovery & Product') ||
        s.title.includes('Strategy & Technical')
    )
  ) {
    return 'web-saas';
  }
  if (
    (serif.includes('Process') && prefix.includes('Digital Marketing')) ||
    steps.some(
      (s) =>
        s.title.includes('Discovery & Goal') ||
        s.title.includes('Measurement & Analysis')
    )
  ) {
    return 'digital-marketing';
  }
  if (
    serif.includes('Development Process') ||
    prefix.includes('Custom Software') ||
    steps.length === 6
  ) {
    return 'custom-software';
  }
  return 'ai-solutions';
}

export function resolveApproachVariant(section: SvcApproachSection): ServiceScreenVariant {
  if (section.layoutVariant) return section.layoutVariant;
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const items = section.getBoxItems ?? [];

  if (
    (prefix.includes('Built for Performance') && serif.includes('Usability & Scalability')) ||
    items.some(
      (it) =>
        it.label.includes('Intuitive and user-friendly') ||
        it.label.includes('Responsive experiences across supported')
    )
  ) {
    return 'mobile-app';
  }
  if (
    (prefix.includes('Built for Performance') && serif.includes('Flexibility & Growth')) ||
    items.some(
      (it) =>
        it.label.includes('Responsive and user-friendly') ||
        it.label.includes('Scalable and maintainable')
    )
  ) {
    return 'web-saas';
  }
  if (
    (serif.includes('Your Business') && prefix.includes('Digital Growth')) ||
    items.some(
      (it) =>
        it.label.includes('Useful Content') ||
        it.label.includes('Continuous Improvement')
    )
  ) {
    return 'digital-marketing';
  }
  if (
    serif.includes('Business Requirements') ||
    prefix.includes('Software Designed Around') ||
    items.length === 7 ||
    items.some((it) => Boolean(it.icon))
  ) {
    return 'custom-software';
  }
  return 'ai-solutions';
}

export function resolveCtaVariant(section: SvcCtaSection): ServiceScreenVariant {
  if (section.layoutVariant) return section.layoutVariant;
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const bodyOne = section.bodyOne || '';

  if (
    (prefix.includes('Have an Idea for a') && serif.includes('Mobile App?')) ||
    bodyOne.includes('mobile experience that helps your business')
  ) {
    return 'mobile-app';
  }
  if (
    (prefix.includes('Have an Idea for Your') && serif.includes('Digital Product?')) ||
    bodyOne.includes('launching a SaaS startup')
  ) {
    return 'web-saas';
  }
  if (serif.includes('Business Growth?') || prefix.includes('Turn Your Digital')) {
    return 'digital-marketing';
  }
  if (
    prefix.includes('Ready to Build Software') ||
    serif.includes('Around Your Business')
  ) {
    return 'custom-software';
  }
  return 'ai-solutions';
}
