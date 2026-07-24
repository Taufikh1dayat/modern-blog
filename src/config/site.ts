export const SITE = {
  title: 'TaufikDev',
  description: 'Blog tentang teknologi, pemrograman, dan pengembangan web modern.',
  url: 'https://penghijauan.my.id',
  author: 'Belajar Teknologi Terbaru',
  locale: 'id-ID',
  lang: 'id',

  nav: [
    { text: 'Beranda', link: '/' },
    { text: 'Artikel', link: '/articles' },
    { text: 'Kategori', link: '/categories' },
    { text: 'Tags', link: '/tags' },
    { text: 'Tentang', link: '/about' },
  ],

  social: {
    github: 'https://github.com/Taufikh1dayat',
    linkedin: 'https://www.linkedin.com/in/m-taufik-hidayat-051541240/',
  },
} as const

export const BLOG = {
  postsPerPage: 9,
  featuredPostsCount: 3,
  relatedPostsCount: 3,
} as const
