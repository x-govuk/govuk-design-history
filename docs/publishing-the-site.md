---
layout: sub-navigation
order: 1.2
title: Publishing the site
description: Publish a design history created with one of the templates.
---

You can publish a design history created with either template by deploying it to a hosting service. The templates include support for Heroku and Netlify, but you can use another host if you prefer.

## Heroku

Follow this [guide on connecting a GitHub repository to Heroku](https://devcenter.heroku.com/articles/github-integration). This is the easiest way to ensure changes are automatically deployed once they are merged to the default branch.

The process is very similar to [setting up a prototype on Heroku](https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku).

### Password protect your design history

We’ve found it’s better to keep a design history public.

If you need to make yours private, you can add a username and password using “[Config vars](https://devcenter.heroku.com/articles/config-vars#managing-config-vars)” on Heroku.

From the Settings page, add 2 items with the keys `NODE_HTTP_SERVER_USERNAME` and `NODE_HTTP_SERVER_PASSWORD`, setting a username and password in the values.

## Netlify

Follow this [guide on deploying websites to Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). When asked for a build command, use `npm run build`.
