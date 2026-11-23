---
homepage: true
layout: product
includeInBreadcrumbs: true
title: A design history for your service
description: Document and share design decisions for your GOV.UK or NHS service. Create a permanent record of how your service has developed over time.
image:
  src: /assets/homepage-illustration.svg
  alt: Eleventy’s possum mascot hanging on a red balloon and floating above a laptop.
  hideOnMobile: true
startButton:
  href: /get-started
---

<div class="govuk-grid-row">
{% for item in collections.homepage %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-2">
      <a class="govuk-link--no-visited-state" href="{{ item.url }}">{{ item.data.title | smart }}</a>
    </h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
  </section>
{% endfor %}
  <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m">Contribute</h2>
    <p class="govuk-body">The project repositories are public and we welcome contributions from anyone.</p>
    <ul class="govuk-list govuk-list--bullet">
      <li><a class="govuk-link" href="https://github.com/x-govuk/govuk-design-history-template">GOV.UK design history template</a></li>
      <li><a class="govuk-link" href="https://github.com/x-govuk/nhsuk-design-history-template">NHS.UK design history template</a></li>
      <li><a class="govuk-link" href="https://github.com/x-govuk/govuk-design-history">Design histories guidance</a></li>
    </ul>
  </section>
</div>
