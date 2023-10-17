import { defineConfig } from 'vitepress';
import { name, title, description } from '../../package.json';

const isProd = process.env.NODE_ENV === 'production';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Guide', link: '/what-is-elysiajs-realworld' }],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'What is ElysiaJS RealWorld?',
            link: '/what-is-elysiajs-realworld',
          },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/agnyz/elysia-realworld-example-app',
      },
    ],
  },
  // `name` should be the name of the repository
  base: isProd ? `/${name}/` : undefined,
});
