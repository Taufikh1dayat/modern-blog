import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '../config/site'

export async function GET(context: { site: string }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/articles/${post.slug}/`,
      })),
    customData: `<language>${SITE.lang}</language>`,
    trailingSlash: false,
  })
}
