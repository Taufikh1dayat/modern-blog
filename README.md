# Modern Tech Blog

Blog statis modern untuk publikasi artikel teknologi dengan fokus pada performa, SEO, dan pengalaman membaca.

## Tech Stack

- **Astro** v5 — Static Site Generator
- **TypeScript** — Strict mode
- **Tailwind CSS** v4 — Utility-first CSS
- **MDX** — Content dengan JSX
- **Pagefind** — Static search
- **Lucide Icons** — Icon set
- **Cloudflare Pages / Vercel** — Deployment

## Memulai

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## Struktur Folder

```
src/
├── components/   # UI components
├── layouts/      # Layout templates
├── pages/        # Routes
├── content/blog/ # MDX articles
├── styles/       # Global styles
├── utils/        # Utility functions
├── types/        # TypeScript types
└── config/       # Site configuration
```

## Deployment

### Cloudflare Pages

1. Push ke GitHub
2. Hubungkan repo ke Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

### Vercel

1. Push ke GitHub
2. Import project ke Vercel
3. Framework: Astro
4. Build command: `npm run build`

## Menulis Artikel

Buat file `.mdx` di `src/content/blog/` dengan frontmatter:

```mdx
---
title: 'Judul Artikel'
description: 'Deskripsi singkat'
pubDate: 2026-07-23
author: 'Penghijauan Team'
tags: ['tag1', 'tag2']
category: 'Kategori'
featured: false
draft: false
---

Konten artikel dalam Markdown...
```

## Lisensi

Hak cipta dilindungi. Konten tidak boleh digunakan untuk tujuan komersial tanpa izin.
