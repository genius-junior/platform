import { DEV_MODE } from './common';

export const siteConfig = {
  name: 'RMIT Neo Culture Tech',
  url: DEV_MODE ? 'http://localhost:7803' : 'https://tuturuuu.com',
  ogImage: DEV_MODE
    ? 'http://localhost:7803/media/logos/og-image.jpg'
    : 'https://tuturuuu.com/media/logos/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/tutur3u',
    github: 'https://github.com/tutur3u/tutur3u',
  },
};

export type SiteConfig = typeof siteConfig;
