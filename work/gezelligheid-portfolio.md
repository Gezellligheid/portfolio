---
title: Gezelligheid Portfolio
description: Personal portfolio site built with Vike, Vue 3, Hono, and SQLite. Features a forest-inspired design system, SSR, and a markdown-driven work section.
tags: [Vue, Vike, TypeScript, Hono, SQLite, Tailwind]
client: Personal project
image: /gezelligheid-portfolio.jpg
---

## Overview

This is the very site you're looking at. Built from scratch as a way to showcase work and experiment with the Vike SSR framework on top of a Hono server.

## Stack

- **Frontend**: Vue 3 + Vike for SSR
- **Server**: Hono running on Photon
- **Database**: SQLite via better-sqlite3
- **Styling**: Tailwind CSS v4 with a custom forest-inspired palette
- **Deployment**: Vercel

## What I built

- A fully custom design system with forest/cream/sand color tokens
- SSR-first architecture — pages are rendered on the server for fast initial loads
- Markdown-driven work section (you're reading one right now)
- Smooth page transitions and scroll-based animations

## Challenges

Getting Vike's `prerender` config to play nicely with dynamic data required some careful config scoping per-route. The markdown pipeline with `gray-matter` + `marked` turned out to be the cleanest solution for managing project content.
