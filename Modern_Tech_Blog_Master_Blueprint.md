# Modern Tech Blog - Master Project Blueprint

> **All-in-One Documentation**
>
> This document combines: - Product Requirements Document (PRD) -
> Sitemap & Information Architecture - Low Fidelity Wireframe - Design
> System - High Fidelity UI Specification - Technical Design Document
> (TDD) - Folder Structure & Coding Standards - Development Task
> Breakdown - Implementation Roadmap

------------------------------------------------------------------------

# 1. Product Requirements Document (PRD)

## Vision

Modern Tech Blog adalah website statis modern untuk publikasi artikel
teknologi dengan fokus pada performa, SEO, pengalaman membaca, dan
kemudahan pengelolaan konten melalui Markdown/MDX.

## Goals

-   Website super cepat (Static Site)
-   SEO Excellent
-   Mobile First
-   Modern UI
-   Mudah dipelihara
-   Tanpa backend & database

## Target Audience

-   Developer
-   Mahasiswa IT
-   Tech Enthusiast
-   Open Source Contributor

## Success Metrics

  Metric           Target
  ---------------- --------
  Lighthouse       ≥95
  Accessibility    ≥95
  SEO              ≥95
  Best Practices   ≥95
  LCP              \<2s

## In Scope

-   Homepage
-   Articles
-   Categories
-   Tags
-   Search
-   RSS
-   Sitemap
-   MDX Content
-   Dark Mode

## Out of Scope

-   Backend
-   Database
-   CMS
-   Authentication
-   Comment System

------------------------------------------------------------------------

# 2. Sitemap & Information Architecture

    Home
    ├── Articles
    │   └── Article Detail
    ├── Categories
    │   └── Category Detail
    ├── Tags
    │   └── Tag Detail
    ├── Search
    ├── Archives
    ├── About
    ├── Contact
    ├── Privacy Policy
    ├── Terms
    ├── RSS
    └── 404

Navigation:

-   Logo
-   Articles
-   Categories
-   Tags
-   About
-   Search
-   GitHub
-   Theme Toggle

------------------------------------------------------------------------

# 3. Wireframe (Low Fidelity)

## Homepage

    +------------------------------------------------+
    | Navbar                                         |
    +------------------------------------------------+
    | Hero                                           |
    +------------------------------------------------+
    | Featured Article                               |
    +------------------------------------------------+
    | Latest Articles Grid                           |
    +------------------------------------------------+
    | Categories                                     |
    +------------------------------------------------+
    | Newsletter Placeholder                         |
    +------------------------------------------------+
    | Footer                                         |
    +------------------------------------------------+

## Article Page

    Breadcrumb

    Title

    Author • Date • Reading Time

    Cover Image

    Table of Contents

    Article Content

    Related Articles

    Previous | Next

    Footer

------------------------------------------------------------------------

# 4. Design System

## Typography

-   Heading: Geist / Inter
-   Body: Inter
-   Code: JetBrains Mono

## Colors

Primary: - Slate - Zinc

Accent: - Blue - Emerald

Semantic: - Success - Warning - Error - Info

## Spacing

-   4px scale
-   8px grid

## Radius

-   Small: 8px
-   Medium: 12px
-   Large: 20px

## Shadow

Subtle modern shadows only.

------------------------------------------------------------------------

# 5. High Fidelity UI Specification

## Style

-   Modern
-   Minimal
-   Spacious
-   Rounded
-   Clean

## Components

-   Navbar
-   Hero
-   Article Card
-   Category Card
-   Footer
-   Theme Toggle
-   Search Dialog
-   Reading Progress
-   Table of Contents
-   Breadcrumb
-   Pagination
-   Related Posts

## Responsive

-   Mobile
-   Tablet
-   Laptop
-   Desktop

------------------------------------------------------------------------

# 6. Technical Design Document (TDD)

## Tech Stack

-   Astro
-   TypeScript
-   Tailwind CSS
-   MDX
-   Pagefind
-   Lucide Icons

## Deployment

-   Cloudflare Pages
-   Vercel

## Content Source

    src/content/blog/*.mdx

## Features

-   Static Site Generation
-   Content Collections
-   RSS Feed
-   Sitemap
-   Syntax Highlight
-   Mermaid
-   Reading Time
-   SEO Metadata

------------------------------------------------------------------------

# 7. Folder Structure

    src/
    ├── components/
    ├── layouts/
    ├── pages/
    ├── content/
    │   └── blog/
    ├── styles/
    ├── utils/
    ├── assets/
    └── types/

    public/
    docs/

------------------------------------------------------------------------

# Coding Standards

-   TypeScript Strict Mode
-   ESLint
-   Prettier
-   Reusable Components
-   Semantic HTML
-   Accessibility First
-   Mobile First

Naming:

-   PascalCase → Components
-   camelCase → Variables
-   kebab-case → Routes
-   UPPER_SNAKE_CASE → Constants

------------------------------------------------------------------------

# 8. Development Task Breakdown

## Phase 1 --- Project Setup

-   Initialize Astro
-   Configure TypeScript
-   Install Tailwind
-   Configure ESLint & Prettier
-   Setup Git

## Phase 2 --- Core Layout

-   Navbar
-   Footer
-   Layout
-   Theme Toggle

## Phase 3 --- Content System

-   Content Collections
-   MDX
-   Article Template
-   Categories
-   Tags

## Phase 4 --- Homepage

-   Hero
-   Featured
-   Latest Articles
-   Category Section

## Phase 5 --- Article Experience

-   TOC
-   Reading Progress
-   Related Posts
-   Copy Code Button
-   Syntax Highlight

## Phase 6 --- Search & SEO

-   Pagefind
-   RSS
-   Sitemap
-   OpenGraph
-   JSON-LD

## Phase 7 --- Performance

-   Image Optimization
-   Lazy Loading
-   Font Optimization

## Phase 8 --- Testing

-   Responsive Testing
-   Lighthouse
-   Accessibility
-   Cross Browser

## Phase 9 --- Deployment

-   GitHub Actions
-   Cloudflare Pages
-   Vercel

------------------------------------------------------------------------

# 9. Implementation Guidelines

For every feature:

1.  Analyze requirements.
2.  Design component.
3.  Implement in TypeScript.
4.  Keep components reusable.
5.  Ensure responsive behavior.
6.  Verify accessibility.
7.  Run lint.
8.  Build project.
9.  Commit using descriptive Git messages.

------------------------------------------------------------------------

# Definition of Done

A feature is complete when:

-   Build succeeds.
-   No TypeScript errors.
-   No ESLint warnings.
-   Responsive on all devices.
-   Lighthouse ≥95.
-   Documentation updated.
-   Code reviewed.
