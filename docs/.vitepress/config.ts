import { defineConfig } from 'vitepress';
import { description, name, title, version } from '../../package.json';

const isProd = process.env.NODE_ENV === 'production';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  head: [['link', { rel: 'icon', href: '/icon-dark.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: '/icon-dark.svg',
      light: '/icon-light.svg',
      width: 24,
      height: 24,
    },
    nav: [
      { text: 'Guide', link: '/what-is-the-bed-stack' },
      {
        text: 'RealWorld',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/gothinkster/realworld',
          },
          {
            text: 'CodebaseShow',
            link: 'https://codebase.show/projects/realworld?category=backend',
          },
          {
            text: 'Documentation',
            link: 'https://realworld-docs.netlify.app/',
          },
          {
            text: 'Backend specs',
            link: 'https://realworld-docs.netlify.app/specifications/backend/introduction/',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'What is The BED Stack?',
            link: '/what-is-the-bed-stack',
          },
          { text: 'Getting Started', link: '/getting-started' },
        ],
        collapsed: false,
      },
      {
        text: 'Experimental',
        items: [
          {
            text: 'Developing in a Dev Container',
            link: '/dev-container',
          },
        ],
        collapsed: true,
      },
      {
        text: "Developer's Guide",
        link: 'https://github.com/agnyz/the-bed-stack/blob/main/CONTRIBUTING.md',
      },
      {
        text: 'Support',
        link: 'https://github.com/agnyz/the-bed-stack/blob/main/SUPPORT.md',
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/agnyz/the-bed-stack',
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/PH4rBdTU',
      },
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    editLink: {
      pattern: 'https://github.com/agnyz/the-bed-stack/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  // `name` should be the name of the repository
  base: isProd ? `/${name}/` : undefined,
});
