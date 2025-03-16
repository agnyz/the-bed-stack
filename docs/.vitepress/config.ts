import { defineConfig } from 'vitepress';
import { description, name, title } from '../../package.json';

const isProd = process.env.NODE_ENV === 'production';
// `name` should be the name of the repository
const base = isProd ? `/${name}/` : '';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: `${base}icon-dark.svg` },
    ],
    // Fallback for browsers that don't support SVG favicons
    ['link', { rel: 'alternate icon', href: `${base}favicon.ico` }],
  ],
  base,
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: 'icon-dark.svg',
      light: 'icon-light.svg',
      width: 24,
      height: 24,
    },
    nav: [
      { text: 'Guide', link: '/what-is-bedstack' },
      { text: 'RealWorld apps', link: 'https://realworld-docs.netlify.app/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'What is Bedstack?',
            link: '/what-is-bedstack',
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
        link: 'https://github.com/agnyz/bedstack/blob/main/CONTRIBUTING.md',
      },
      {
        text: 'Support',
        link: 'https://github.com/agnyz/bedstack/blob/main/SUPPORT.md',
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/agnyz/bedstack',
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
      pattern: 'https://github.com/agnyz/bedstack/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-'),
      },
    },
  },
});
