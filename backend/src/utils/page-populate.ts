import type { Core } from '@strapi/strapi';

export const NAVBAR_POPULATE = {
  logoImage: true,
  items: {
    populate: {
      page: {
        fields: ['title', 'slug', 'isHomepage'],
      },
      subItems: {
        populate: {
          page: {
            fields: ['title', 'slug', 'isHomepage'],
          },
        },
      },
    },
  },
} as const;

export const FOOTER_POPULATE = {
  logoImage: true,
  aboutLogo: true,
  socialLinks: {
    populate: ['icon'],
  },
  linkColumns: {
    populate: {
      links: {
        populate: {
          page: {
            fields: ['title', 'slug', 'isHomepage'],
          },
        },
      },
    },
  },
} as const;

export const PAGE_POPULATE = {
  navbar: {
    populate: NAVBAR_POPULATE,
  },
  footer: {
    populate: FOOTER_POPULATE,
  },
  seo: {
    populate: ['ogImage'],
  },
  sections: {
    on: {
      'sections.hero': {
        populate: ['backgroundImage', 'backgroundVideo'],
      },
      'sections.partner-strip': {
        populate: {
          logos: {
            populate: ['image'],
          },
        },
      },
      'sections.about': {
        populate: ['primaryImage', 'secondaryImage', 'highlightIcon'],
      },
      'sections.capabilities': {
        populate: {
          services: {
            populate: ['image', 'iconImage'],
            sort: { order: 'asc' },
          },
          processSteps: true,
        },
      },
      'sections.products-showcase': {
        populate: {
          products: {
            populate: ['image'],
            sort: { order: 'asc' },
          },
        },
      },
      'sections.trust-banner': {
        populate: {
          logos: {
            populate: ['image'],
          },
          topRowLogos: {
            populate: ['image'],
          },
          bottomRowLogos: {
            populate: ['image'],
          },
        },
      },
      'sections.case-studies': {
        populate: {
          caseStudies: {
            populate: ['coverImage'],
            sort: { order: 'asc' },
          },
        },
      },
      'sections.testimonials': {
        populate: {
          testimonials: {
            populate: ['avatar'],
            sort: { order: 'asc' },
          },
        },
      },
      'sections.before-after': {
        populate: ['beforeImage', 'afterImage'],
      },
      'sections.cta-band': true,
      'sections.rich-content': true,
      'sections.contact-section': {
        populate: ['budgetOptions', 'serviceOptions'],
      },
      'sections.contact-interest': {
        populate: ['image', 'options'],
      },
      'sections.who-we-are': {
        populate: ['image'],
      },
      'sections.journey-stats': {
        populate: ['milestones', 'stats'],
      },
      'sections.solutions-grid': {
        populate: ['items'],
      },
      'sections.why-choose': {
        populate: ['reasons', 'tickerItems'],
      },
      'sections.vision-mission': true,
      'sections.team-showcase': {
        populate: {
          executives: { populate: ['photo'] },
          advisoryMembers: { populate: ['photo'] },
          salesMembers: { populate: ['photo'] },
        },
      },
      'sections.global-offices': {
        populate: ['image', 'mapPins', 'offices'],
      },
    },
  },
} as const;

export const SITE_SETTING_POPULATE = {
  siteLogo: true,
  footerAboutLogo: true,
  topbarEmailIcon: true,
  topbarPhoneIcon: true,
  socialLinks: {
    populate: ['icon'],
  },
  navLinks: true,
  footerPrimaryLinks: true,
  footerSecondaryLinks: true,
} as const;

export async function fetchDefaultNavbar(strapi: Core.Strapi) {
  const navbarDoc = strapi.documents('api::navbar.navbar');
  const primary = await navbarDoc.findFirst({
    filters: { isDefault: true },
    status: 'published',
    populate: NAVBAR_POPULATE as never,
  });
  if (primary) return primary;

  return navbarDoc.findFirst({
    status: 'published',
    populate: NAVBAR_POPULATE as never,
  });
}

export async function fetchDefaultFooter(strapi: Core.Strapi) {
  const footerDoc = strapi.documents('api::footer.footer');
  const primary = await footerDoc.findFirst({
    filters: { isDefault: true },
    status: 'published',
    populate: FOOTER_POPULATE as never,
  });
  if (primary) return primary;

  return footerDoc.findFirst({
    status: 'published',
    populate: FOOTER_POPULATE as never,
  });
}

export async function fetchSiteContext(strapi: Core.Strapi) {
  const [navbar, footer, siteSetting, services, products, caseStudies, testimonials, pages] =
    await Promise.all([
      fetchDefaultNavbar(strapi),
      fetchDefaultFooter(strapi),
      strapi.documents('api::site-setting.site-setting').findFirst({
        status: 'published',
        populate: SITE_SETTING_POPULATE as never,
      }),
      strapi.documents('api::service.service').findMany({
        status: 'published',
        sort: { order: 'asc' },
        populate: ['image', 'iconImage'],
      }),
      strapi.documents('api::product.product').findMany({
        status: 'published',
        sort: { order: 'asc' },
        populate: ['image'],
      }),
      strapi.documents('api::case-study.case-study').findMany({
        status: 'published',
        sort: { order: 'asc' },
        populate: ['coverImage'],
      }),
      strapi.documents('api::testimonial.testimonial').findMany({
        status: 'published',
        sort: { order: 'asc' },
        populate: ['avatar'],
      }),
      strapi.documents('api::page.page').findMany({
        status: 'published',
        fields: ['title', 'slug', 'pageType', 'isHomepage', 'order'],
        sort: { order: 'asc' },
      }),
    ]);

  return {
    navbar,
    footer,
    siteSetting,
    services,
    products,
    caseStudies,
    testimonials,
    pages,
  };
}
