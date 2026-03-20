import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Obsidian Components',
  tagline: 'Build your own Obsidian workspace',
  favicon: './img/favicon-128.ico',

  url: 'https://cp.cc1234.cc',
  baseUrl: '/',

  organizationName: 'vran',
  projectName: 'components',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'zh-Hant', 'en'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-CN',
        label: '简体中文',
      },
      'zh-Hant': {
        htmlLang: 'zh-TW',
        label: '繁體中文',
      },
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
    },
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: 'keywords', content: 'obsidian,components,database,component,plugin,knowledge management' },
      {
        name: 'description',
        content: 'Obsidian Components helps you build visual systems, dashboards, and data-driven workflows in Obsidian.',
      },
    ],
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'WQzn_X1rrhY2HHCuTYlY750m0YcuY3H73Z3T-OFsDOM',
      },
    },
  ],
  plugins: [
    async function tailwindcss() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
