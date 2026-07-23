import type { Post } from '../types/blog'

export function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  )
}

export function getFeaturedPosts(posts: Post[], count = 3): Post[] {
  return sortPostsByDate(posts.filter((p) => p.featured)).slice(0, count)
}

export function getLatestPosts(posts: Post[], count?: number): Post[] {
  const sorted = sortPostsByDate(posts.filter((p) => !p.featured))
  return count ? sorted.slice(0, count) : sorted
}

export function getPostsByCategory(posts: Post[], category: string): Post[] {
  return sortPostsByDate(posts.filter((p) => p.category === category))
}

export function getPostsByTag(posts: Post[], tag: string): Post[] {
  return sortPostsByDate(posts.filter((p) => p.tags.includes(tag)))
}

export function getCategories(posts: Post[]): { name: string; count: number }[] {
  const counts = new Map<string, number>()
  posts.forEach((p) => {
    counts.set(p.category, (counts.get(p.category) || 0) + 1)
  })
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export function getTags(posts: Post[]): { name: string; count: number }[] {
  const counts = new Map<string, number>()
  posts.forEach((p) => {
    p.tags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) || 0) + 1)
    })
  })
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export function getRelatedPosts(
  posts: Post[],
  current: Post,
  count = 3
): Post[] {
  return sortPostsByDate(posts)
    .filter(
      (p) =>
        p.slug !== current.slug &&
        (p.category === current.category ||
          p.tags.some((t) => current.tags.includes(t)))
    )
    .slice(0, count)
}

export function getPrevNext(
  posts: Post[],
  current: Post
): { prev: Post | null; next: Post | null } {
  const sorted = sortPostsByDate(posts)
  const idx = sorted.findIndex((p) => p.slug === current.slug)
  return {
    prev: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    next: idx > 0 ? sorted[idx - 1] : null,
  }
}
