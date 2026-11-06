# Personal portfolio (GitHub Pages)

A responsive, static Jekyll portfolio inspired by the clean Daniel Kim concept: oversized typography, a mountain hero, white space, and subtle blue accents.

## Customize first

1. Replace `Your Name`, `YN`, and the sample intro in `index.html`.
2. Update contact and social links in `_layouts/default.html`.
3. Edit projects in `_data/projects.yml`.
4. Replace the resume placeholders in `resume/index.html`.
5. Add your PDF at `assets/Your-Name-Resume.pdf` (or change the link).
6. Update `_config.yml` with your GitHub Pages URL if using a project repository.

## Add a blog post

Create a Markdown file in `_posts` named:

`YYYY-MM-DD-your-post-title.md`

Example front matter:

```yaml
---
layout: post
title: "My new article"
date: 2026-11-06
description: "A short summary shown in the blog list."
tags: [engineering, research]
---
```

Write normal Markdown below the front matter. Fenced code blocks work:

````markdown
```javascript
const greeting = "hello";
console.log(greeting);
```
````

The blog index automatically displays tags. Clicking a tag filters the posts on the page. You can also link to a tag with `/blog/#engineering`.

## Publish with GitHub Pages

1. Create a GitHub repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload the contents of this folder to the repository root (not the enclosing folder).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. GitHub Pages will build the Jekyll site and publish it at `https://YOUR_GITHUB_USERNAME.github.io`.

For a repository named something other than `YOUR_GITHUB_USERNAME.github.io`, set `baseurl: "/REPOSITORY_NAME"` in `_config.yml` and set `url` to `https://YOUR_GITHUB_USERNAME.github.io`.

## Notes

- GitHub Pages supports Jekyll and Markdown posts without a separate application server.
- The included sample post demonstrates fenced code blocks.
- The PDF link is a placeholder until you add your resume PDF.
- Update the placeholder project content and links before publishing.
