import type { StrapiApp } from '@strapi/strapi/admin';

function SpeedSliderIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8h12M6 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default {
  config: {
    locales: [],
  },
  register(app: StrapiApp) {
    app.customFields.register({
      name: 'speed-slider',
      type: 'integer',
      intlLabel: {
        id: 'global.speed-slider.label',
        defaultMessage: 'Animation Speed Slider',
      },
      intlDescription: {
        id: 'global.speed-slider.description',
        defaultMessage:
          'Slide to adjust animation speed in seconds (lower is faster).',
      },
      icon: SpeedSliderIcon,
      components: {
        Input: async () => import('./components/SpeedSliderInput'),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'global.speed-slider.range.section',
              defaultMessage: 'Slider Range',
            },
            items: [
              {
                name: 'min',
                type: 'number',
                defaultValue: 4,
                intlLabel: {
                  id: 'global.speed-slider.min.label',
                  defaultMessage: 'Minimum seconds (fastest)',
                },
                description: {
                  id: 'global.speed-slider.min.description',
                  defaultMessage: 'Fastest duration in seconds.',
                },
              },
              {
                name: 'max',
                type: 'number',
                defaultValue: 120,
                intlLabel: {
                  id: 'global.speed-slider.max.label',
                  defaultMessage: 'Maximum seconds (slowest)',
                },
                description: {
                  id: 'global.speed-slider.max.description',
                  defaultMessage: 'Slowest duration in seconds.',
                },
              },
            ],
          },
        ],
        advanced: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: 'global.speed-slider.required.label',
                  defaultMessage: 'Required field',
                },
                description: {
                  id: 'global.speed-slider.required.description',
                  defaultMessage:
                    "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
      },
    });
  },
};
