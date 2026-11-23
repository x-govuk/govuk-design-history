---
layout: sub-navigation
order: 1
title: Get started
description: Install, customise and publish your own design history.
related:
  items:
    - text: GOV.UK Design History template on GitHub
      href: https://github.com/x-govuk/govuk-design-history-template
    - text: NHS.UK design history template on GitHub
      href: https://github.com/x-govuk/nhsuk-design-history-template
    - text: Eleventy documentation
      href: https://www.11ty.dev/docs/
---

The design history templates make it easy to:

- create pages of screenshots to document designs
- document designs using the [GOV.UK Design System](https://design-system.service.gov.uk/) or [NHS design system](https://service-manual.nhs.uk/design-system)
- print pages of designs
- make designs shareable and linkable

Both templates are built using the [Eleventy static site generator](https://www.11ty.dev/), meaning your design history site can be adapted as a service grows.

## Install

Choose the template that matches your service:

- [GOV.UK design history template](https://github.com/x-govuk/govuk-design-history-template)
- [NHS.UK design history template](https://github.com/x-govuk/nhsuk-design-history-template)

On the template’s GitHub page, click ‘Use this template’ to make a copy. You’ll be asked to choose a GitHub user or organisation that should own this new repository, and a name for your copy.

To start making changes, you’ll need to download the repository to your own computer. Assuming your GitHub user is `my-username`, and you called your repository `my-service-design-history`, using the Terminal you would type:

```shell
git clone git@github.com:my-username/my-service-design-history.git
```

Next, change into the downloaded folder, and install all the dependencies needed to run the design history project. Do this by typing the following:

```shell
cd my-service-design-history
npm install
```

## Preview

Before uploading your design history to a public URL, it can be useful to preview it locally, on your own computer. To do this type:

```shell
npm start
```

Once all the files have been generated, a URL will be shown which you can enter into your browser’s address bar (usually this is <http://localhost:8080>).

Whenever you add a new post, or edit an existing post, the browser will automatically refresh the page with any changes applied.

## Customise

Before adding posts, you’ll probably want to customise a few things for the site to make sense for your service.

### Change the name of the website

1. Open the file `eleventy.config.js`
2. Change the name in the header options:
   - for the GOV.UK template, change `header.productName`
   - for the NHS.UK template, change `header.service.text`

You can also customise other aspects of the header. See the options for the [GOV.UK Eleventy Plugin](https://govuk-eleventy-plugin.x-govuk.org/get-started/options/) or [NHS.UK Eleventy Plugin](https://nhsuk-eleventy-plugin.x-govuk.org/get-started/options/).

### Update the homepage

1. Open the file `app/index.md`
2. Change the value shown for `title`. The value you give here is used for the large heading shown at the top of the page
3. Change the value shown for `description`. The value you give here is used for the text that appears below the title. You can also remove this line if you don’t want to show anything here.

### Update the footer

If you want to link to other tools your team uses, you can place these in the footer.

1. Open the file `eleventy.config.js`
2. Within the plugin options, add values for the `footer` option. This takes the same values as the footer component in the relevant design system, allowing you to add navigation sections and links.

You can also change the copyright statement and content licence. See the plugin options for [GOV.UK](https://govuk-eleventy-plugin.x-govuk.org/get-started/options/) or [NHS.UK](https://nhsuk-eleventy-plugin.x-govuk.org/get-started/options/).

## Document

You’re now ready to start documenting your designs. To add a new post:

1. Create a folder for your post in `app/posts`, then create an `index.md` file inside it. Use dashes instead of spaces in the folder name.

   For example, `app/posts/first-designs/index.md` creates `<your-design-history>/posts/first-designs/` in either template.

2. Posts are made up of 2 parts: a front matter and its contents.

   A front matter starts and ends with `---` and is written using a key/value data format called YAML. In most cases, you will only need three bits of information: `title`, `description` and `date`. For example:

   ```yaml
   ---
   title: First designs for a minimum viable service
   description: A minimum viable service that could allow the providers to access and manage their ITT applications.
   date: 2020-02-19
   ---
   ```

   The content portion of a post uses Markdown, a lightweight markup language used to add formatting elements to plaintext text documents. You can [learn more about writing Markdown with this guide](https://www.markdownguide.org).

3. Put any images in the same folder as the post. You can include an image in the post using its filename:

   ```markdown
   ![Description of the image](first-design.png)
   ```

   See [how to add screenshots to a post](/generate-a-page-of-screenshots/) for another way to display a series of images.

4. Save the file, and visit the browser. You should see your new post listed on the home page.

## Launch

[Make things open, it makes them better](https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better). You can do this by deploying (or uploading) your design history to a third-party host. This project includes support for 2 different services, Heroku and Netlify.

### Heroku

Follow this [guide on connecting a GitHub repository to Heroku](https://devcenter.heroku.com/articles/github-integration). This is the easiest way to ensure changes are automatically deployed once they are merged to the default branch.

The process is very similar to [setting up a prototype on Heroku](https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku).

#### Password protect your design history

We’ve found it’s better to keep a design history public.

If you need to make yours private, you can add a username and password using “[Config vars](https://devcenter.heroku.com/articles/config-vars#managing-config-vars)” on Heroku.

From the Settings page, add 2 items with the keys `NODE_HTTP_SERVER_USERNAME` and `NODE_HTTP_SERVER_PASSWORD` and setting a username and password in the values (you can use the same phrase for both).

### Netlify

Follow this [guide on deploying websites to Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). When asked for a build command, use `npm run build`.
