---
title: Gezelligheid Portfolio
description: Personal portfolio site built with Vike, Vue 3, Hono, and SQLite. Features a dark, futuristic design system, SSR, and a markdown-driven work section.
tags: [Vue, Vike, TypeScript, Hono, SQLite, Tailwind]
client: Personal project
image: /mockup_portfolio.jpeg
---

## Overview

This is the very site you're looking at. Built from scratch as a way to showcase work and experiment with the Vike SSR framework on top of a Hono server.

:::text-image src="/mockup_portfolio_2.jpeg" alt="Portfolio screenshot"
## What I built

- A fully custom design system with forest/cream/sand color tokens
- SSR-first architecture. Pages are rendered on the server for fast initial loads
- Markdown-driven work section (you're reading one right now)
- Smooth page transitions and scroll-based animations
:::

## Stack

- **Frontend**: Vue 3 + Vike for SSR
- **Server**: Hono running on Photon
- **Database**: SQLite via better-sqlite3
- **Styling**: Tailwind CSS v4 with a modern futuristic theme
- **Deployment**: Vercel

## Challenges

Getting Vike's `prerender` config to play nicely with dynamic data required some careful config scoping per-route. The markdown pipeline with `gray-matter` + `marked` turned out to be the cleanest solution for managing project content.

:::callout type="info"
This site is open source. The markdown-driven work section means adding a new project is as simple as dropping a `.md` file in the `work/` folder.
:::

:::quote
Build things you're proud to show.
. Gezelligheid_
:::
