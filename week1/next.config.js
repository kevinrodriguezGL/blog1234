const withCSS = require('@zeit/next-css');
const { createClient } = require('contentful');

const CTF_SPACE_ID = '2yyqu727iw3x';
const CTF_CDA_ACCESS_TOKEN = 'd9qtCt0_5cXHjQ5wF4dcbLvCznnY8_mqLc7kyjY04cg';

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  publicRuntimeConfig: {
    CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN,
  },
  // async exportPathMap() {
  //   const contentfulClient = createClient({
  //     space: CTF_SPACE_ID,
  //     accessToken: CTF_CDA_ACCESS_TOKEN,
  //   });
  //   const pages = {
  //     '/': { page: '/' },
  //     '/en': { page: '/[lang]', query: { lang: 'en' } },
  //     '/es': { page: '/[lang]', query: { lang: 'es' } },
  //   };
  //   const enUS_Entries = await contentfulClient.getEntries({
  //     content_type: 'blogPost',
  //     locale: 'en-US',
  //     select: 'fields.slug',
  //   });
  //   const esCR_Entries = await contentfulClient.getEntries({
  //     content_type: 'blogPost',
  //     locale: 'es-CR',
  //     select: 'fields.slug',
  //   });
  //   const enUS_slugs = enUS_Entries.items.map(i => i.fields.slug);
  //   enUS_slugs.forEach(slug => {
  //     pages[`/en/blog/posts/${slug}`] = {
  //       page: '/[lang]/blog/posts/[slug]',
  //       query: {
  //         lang: 'en',
  //         slug,
  //       },
  //     };
  //   });
  //   const esCR_slugs = esCR_Entries.items.map(i => i.fields.slug);
  //   esCR_slugs.forEach(slug => {
  //     pages[`/es/blog/posts/${slug}`] = {
  //       page: '/[lang]/blog/posts/[slug]',
  //       query: {
  //         lang: 'es',
  //         slug,
  //       },
  //     };
  //   });
  //   return pages;
  // },
});
