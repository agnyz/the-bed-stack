import { defineConfig } from 'vitepress';
import { name, title, description } from '../../package.json';

const isProd = process.env.NODE_ENV === 'production';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  // `name` should be the name of the repository
  base: isProd ? `/${name}/` : undefined,
});
