import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Obsidian Comopnents',
  tagline: 'Build your own obsidian',
  favicon: './img/favicon-128.ico',

  // Set the production url of your site here
  url: 'https://cp.cc1234.cc',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vran', // Usually your GitHub org/user name.
  projectName: 'components', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans". 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    navbar: {
      title: 'Components',
      items: [
        {
          docId: "documentation",
          position: 'left',
          label: '文档',
          href: "https://wxycbt0cjk.feishu.cn/wiki/F14cwgZrGiM3CxkekUxcEr5YnSg"
        },
        {
          docId: "releaseNote",
          position: 'left',
          label: '更新日志',
          href: "https://wxycbt0cjk.feishu.cn/wiki/LVO1wtHqoiNON1kUVH4cbGv6ncP"
        }
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    async function tailwindcss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
