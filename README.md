# Sitemapy

[![tests](https://github.com/postiess/sitemapy/actions/workflows/test.yml/badge.svg)](https://github.com/postiess/sitemapy/actions/workflows/test.yml)

Simple utility to generate sitemaps

## 👀 How to use ?

```sh
npm i sitemapy
```

```js

import {createSitemap} from "sitemapy"

const siteRoot = "https://github.com"

let pages = [
    {
        url: "/about", //all optional except url
        priority: 1,
        changefreq: "daily",
        lastmod: "10-04-22"
    }
]

const sitemap = createSitemap({pages, siteRoot}) //returns string of sitemap XML

```

## Typescript

```js

import {createSitemap} from "sitemapy"
import type {SitemapElement, SitemapConfig} from "sitemapy"

const siteRoot = "https://github.com"

let pages: Array<SitemapElement> = [
    {
        url: "/about", //all optional except url
        priority: 1,
        changefreq: "daily",
        lastmod: "10-04-22"
    }
]

const config: SitemapConfig = {pages, siteRoot}

const sitemap = createSitemap(config) //returns string of sitemap XML

```

## Examples

With express

```js

import axios from "axios"
import {createSitemap} from "sitemapy"

app.get("/sitemap.xml", async (req, res) => {
    const siteRoot = "https://github.com"
    const {data} = await axios.get("/api/sitemapData")

    const sitemap = createSitemap({pages: data, siteRoot})

    res.setHeader('Content-Type', 'application/xml')
    res.send(sitemap)
})

```

## Breaking changes on sitemapy versions >=2.4.0

In versions prior to 2.4.0, urls would already have the starting slash prefixed.
Now that is left for the user to define themselves, it makes more sense.



Prior to 2.4.0

```js
const url = "about";
 ```

Would result in "https://example.com/about"

After and including version 2.4.0

```js
const url = "/about";
 ```
Would result in "https://example.com/about"
