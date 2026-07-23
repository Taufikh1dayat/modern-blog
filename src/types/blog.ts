import type { CollectionEntry } from 'astro:content'

export interface Post extends Omit<CollectionEntry<'blog'>, 'data'> {
  readingTime: number
  title: string
  description: string
  pubDate: Date
  updatedDate?: Date
  author: string
  image?: string
  tags: string[]
  category: string
  featured: boolean
  draft: boolean
}

export interface Category {
  name: string
  count: number
}

export interface Tag {
  name: string
  count: number
}
