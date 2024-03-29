---
layout: sub-navigation
order: 5
title: Divide a design history into different sections
description: You can divide your design history site into different sections if your team is building multiple products or services.
---

If your service has different parts, for example a public facing service and an admin interface, you may want to divide your history into sections for each part.

## Set up a folder for each section

You can group posts together into sections using folders:

1. Create a folder for each section in `app/posts`. Use dashes instead of spaces in the the folder names.

2. Create a `.json` file in each folder. Use the same name as the folder. For the folder `app/posts/support-interface`, the JSON file would be `app/posts/support-interface/support-interface.json`.

3. This is a [directory data file](https://www.11ty.dev/docs/data-template-dir/), and it can be used to set the default values for all posts that sit within this folder.

4. In this JSON file, declare a the parent to use in the breadcrumb navigation (the parent being the name of this section). For example

   ```json
   {
     "eleventyNavigation": {
       "parent": "Service support interface"
     }
   }
   ```

## Create a collection for each section

Next, in the `eleventy.config.js` configuration file, use Eleventy’s [`addCollection` method](https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting) to collect all Markdown files within the folder you created for your section.

For example, to create a collection named `support-interface` that looks for posts in the `app/posts/support-interface` folder, add the following:

```js
  eleventyConfig.addCollection('support-interface', collection => {
    return collection.getFilteredByGlob('app/posts/support-interface/*.md')
  })
```

## Create an index page for each section

Next, create a page that lists these related posts. You can do that by creating an index page.

1. In the `posts` folder, create a markdown `.md` file for each section. For the folder `app/posts/support-interface/`, add the file `app/posts/support-interface.md`.

2. At the top of the markdown file for the section, add this front matter data:

   {% raw %}

   ```yaml
   ---
   layout: collection
   title: Service support interface
   description: A tool for support agents to manage the service
   pagination:
     data: collections.support-interface
     reverse: true
     size: 50
   permalink: "support-interface/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
   ---
   ```

   {% endraw %}

   The value for `pagination.data` should use the same name as that used for the collection in the `eleventy.config.js` configuration file. This tells the index page which posts to list.

   For example, if your collection is named `support-interface`, the value for `pagination.data` would be `collections.support-interface`.

   You do not need to add any body content, but if you do, this will appear above the list of posts in this section.

## Update the home page to link to each section

Currently the homepage lists all posts on the site. Change it so that only sections are linked to instead by removing these lines from `app/index.md`:

```yaml
pagination:
  data: collections.post
  reverse: true
  size: 50
```

You can change the content of the heading on the homepage by adding these lines to `app/index.md`:

```yaml
sections:
  title: Services
```
