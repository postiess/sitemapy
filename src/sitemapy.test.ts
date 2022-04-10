import {generateElement, checkConfig} from "./helpers"

import createSitemap, {SitemapElement, SitemapConfig} from "./sitemapy"

const siteRootMock: string = "https://google.com"

const pagesMock: Array<SitemapElement> = [
    {
        url: siteRootMock,
        priority: 0.75
    },
]

const configEmptyMock: any = {}


const configMock: SitemapConfig = {
    pages: pagesMock,
    siteRoot: siteRootMock
}

test("Check error handling with no parameters given", () => {
    try {
        checkConfig(configEmptyMock)
    } catch (error: any) {
        expect(error.message).toBe("Sitemapy missing options in config: siteRoot,pages")
    }
});

test("Check error handling with all parameters given & correct", () => {
    expect(checkConfig(configMock))
});

test("Check URL XML child generation", () => {
    const expectedResult = `<url><loc>https://google.com/https://google.com</loc><priority>0.75</priority></url>`
    expect(generateElement(pagesMock[0], "https://google.com")).toBe(expectedResult)
})

test("Check sitemap generation", () => {
    const expectedResult = `<?xmlversion="1.0"encoding="UTF-8"?><urlsetxmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://google.com/https://google.com</loc><priority>0.75</priority></url></urlset>`
    const sitemap = createSitemap({
       pages: pagesMock,
       siteRoot: siteRootMock
    })
    expect(sitemap).toBe(expectedResult)
})

