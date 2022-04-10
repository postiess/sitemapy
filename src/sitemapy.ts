import { checkConfig, generateElement } from "./helpers";


export interface SitemapElement {
    url: string;
    priority?: number;
    changefreq?: string;
    lastmod?: Date | string | number;
}

export interface SitemapConfig {
    pages: Array<SitemapElement>;
    siteRoot?: string;
}


const start = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

const end = `</urlset>`



const createSitemap = (config: SitemapConfig): any => {
    checkConfig(config)
    const {siteRoot, pages} = config
    let sitemap = start + (pages as Array<any>).map(page => generateElement(page, siteRoot as string)).join("") + end
    return sitemap
}

export default createSitemap