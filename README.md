# Personal portfolio (GitHub Pages)

## Running it
Install gems
```
bundle install
```

Build the HTML
```bash
jekyll build
```

Run
```bash
jekyll serve
```


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


The blog index automatically displays tags. Clicking a tag filters the posts on the page. You can also link to a tag with `/blog/#engineering`.
