# TaufikDev

Blog statis modern — tutorial teknologi, pemrograman, dan pengembangan web. Dark/light mode, search, animasi smooth.

## Tech Stack

- **Astro** v5 — Static Site Generator
- **TypeScript** — Strict mode
- **Tailwind CSS** v4 — Utility-first CSS
- **MDX** — Content dengan JSX
- **Pagefind** — Static search
- **Cloudflare Pages** — Deployment

## Memulai

```bash
npm install
npm run dev      # dev server
npm run build    # build production
npm run preview  # preview build
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

Build command: `npm run build` — output `dist/`.

Deploy ke **Cloudflare Pages** atau **Vercel**:

1. Push ke GitHub
2. Hubungkan repo ke Cloudflare Pages / Vercel
3. Build command: `npm run build`
4. Output directory: `dist`

## Menulis Artikel

Buat file `.mdx` di `src/content/blog/`:

```mdx
---
title: 'Judul Artikel'
description: 'Deskripsi singkat'
pubDate: 2026-07-23
author: 'TaufikDev'
tags: ['tag1', 'tag2']
category: 'Kategori'
featured: false
draft: false
---

Konten artikel dalam Markdown...
```

## Lisensi

Hak cipta dilindungi. Konten tidak boleh digunakan untuk tujuan komersial tanpa izin.