# Sitemapy

[![tests](https://github.com/postiess/sitemapy/actions/workflows/test.yml/badge.svg)](https://github.com/postiess/sitemapy/actions/workflows/test.yml)

Simple utility to generate sitemaps

## How to use ?

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
        lastmod: 10-04-22
    },
]

const sitemap = createSitemap({pages, siteRoot}) //returns string of sitemap XML

```

## Examples

With express

```js

import axios from "axios"
import {createSitemap} from "sitemapy"

app.get("/sitemap.xml", async (req, res) => {
    const siteRoot = "https://github.com"
    const data = await axios.get("/api/sitemapData")

    const sitemap = createSitemap({pages: data, siteRoot})

    res.setHeader('Content-Type', 'application/xml')
    res.send(sitemap)
})

```