import type { NewsItem } from "@shared/types"

/**
 * Hinata - Empty Project Template
 *
 * This is an empty news source template that can be used as a starting point
 * for creating new news scrapers. Currently disabled by default.
 *
 * To enable this source:
 * 1. Set `disable: false` in shared/pre-sources.ts
 * 2. Update the home URL to point to the actual news source
 * 3. Implement the scraping logic below
 * 4. Run `pnpm run presource` to regenerate sources
 */
export default defineSource(async () => {
  // This is an empty project template for "hinata"
  // Add your scraping logic here when you want to implement actual functionality

  const news: NewsItem[] = [
    {
      id: "hinata-placeholder",
      title: "Hinata 空项目模板",
      url: "https://example.com",
      extra: {
        info: "这是一个空的项目模板",
      },
    },
  ]

  return news
})
