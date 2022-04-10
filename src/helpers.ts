import { MissingOption } from "./errors";
import { SitemapConfig, SitemapElement } from "./sitemapy";


export const generateElement = (config: SitemapElement, siteRoot: string) => {
  if(typeof config.url == 'undefined'){ //must at minimum have url provided
    throw new MissingOption("url")
  }
  return `<url><loc>${siteRoot}/${config.url}</loc>
      ${config.lastmod ? `<lastmod>${config.lastmod}</lastmod>` : ""}
      <priority>${config.priority}</priority>
      ${
        config.changefreq ? `<changefreq>${config.changefreq}</changefreq>` : ""
      }
      </url>`.replace(/\s+/g, '');
};

export const checkConfig = (config: SitemapConfig) => {
  let options: Array<string> = [];
  if (typeof config.siteRoot == "undefined") {
    options.push("siteRoot");
  }
  if (typeof config.pages == "undefined" || config.pages == null) {
    options.push("pages");
  }
  if (options.length > 0) {
    throw new MissingOption(options);
  }
};
