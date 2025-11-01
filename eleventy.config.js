import process from 'node:process'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'GOV.UK Design History'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    footer: {
      copyright: {
        text: '© X-GOVUK'
      },
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-design-history/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      }
    },
    header: {
      homepageUrl: 'https://x-govuk.org'
    },
    headingPermalinks: true,
    homeKey: serviceName,
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://x-govuk.org/govuk-design-history/assets/opengraph-image.png',
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS ? '/govuk-design-history/' : '/',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    showBreadcrumbs: false,
    stylesheets: ['/assets/application.css'],
    templates: {
      searchIndex: true
    },
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    url:
      process.env.GITHUB_ACTIONS && 'https://x-govuk.org/govuk-design-history/'
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
