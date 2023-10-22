import { defineConfig } from 'vitepress';
import { name, title, description, version } from '../../package.json';

const isProd = process.env.NODE_ENV === 'production';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  head: [['link', { rel: 'icon', href: '/logo-dark.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: '/logo-dark.svg',
      light: '/logo-light.svg',
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
            link: 'https://www.realworld.how/',
          },
          {
            text: 'Backend specs',
            link: 'https://www.realworld.how/docs/specs/backend-specs/introduction',
          },
        ],
      },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/agnyz/elysia-realworld-example-app/blob/main/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/agnyz/elysia-realworld-example-app/blob/main/CONTRIBUTING.md',
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
        collapsed: false,
      },
      {
        text: 'Contributing',
        link: 'https://github.com/agnyz/elysia-realworld-example-app/blob/main/CONTRIBUTING.md',
      },
      {
        text: 'Support',
        link: 'https://github.com/agnyz/elysia-realworld-example-app/blob/main/SUPPORT.md',
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/agnyz/elysia-realworld-example-app',
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
      pattern:
        'https://github.com/agnyz/elysia-realworld-example-app/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  // `name` should be the name of the repository
  base: isProd ? `/${name}/` : undefined,
});
