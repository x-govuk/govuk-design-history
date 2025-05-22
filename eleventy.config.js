import process from 'node:process'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'GOV.UK Design History'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/govuk-design-history-docs/assets/opengraph-image.png',
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    homeKey: serviceName,
    showBreadcrumbs: false,
    headingPermalinks: true,
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-design-history/',
    stylesheets: ['/assets/application.css'],
    header: {
      homepageUrl: 'https://x-govuk.github.io'
    },
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS
        ? '/govuk-design-history/'
        : '/',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      copyright: {
        text: '© X-GOVUK'
      },
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-design-history-docs/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      }
    },
    rebrand: true
  })

  // Collections
  eleventyConfig.addCollection('homepage', (collection) =>
    collection
      .getFilteredByGlob([
        'docs/introduction.md',
        'docs/case-study.md',
        'docs/directory.md'
      ])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Pass through
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', true)

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-design-history/'
  }
}
