<template>
  <meta name="author" content="Elias" />
  <meta name="theme-color" content="#09090f" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph: site-level (page-specific tags go in per-page +Head.vue) -->
  <meta property="og:site_name" content="Gezelligheid_" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card base -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Gezelligheid_" />
  <meta name="twitter:creator" content="@Gezelligheid_" />

  <!-- Canonical URL -->
  <link rel="canonical" :href="canonicalUrl" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- JSON-LD: Person -->
  <script type="application/ld+json" v-html="personSchema" />
  <!-- JSON-LD: WebSite -->
  <script type="application/ld+json" v-html="websiteSchema" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePageContext } from "vike-vue/usePageContext";
import "./tailwind.css";

const pageContext = usePageContext();
const BASE_URL = "https://gezelligheid.dev";
const canonicalUrl = computed(() => `${BASE_URL}${pageContext.urlPathname}`);

const personSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elias",
  url: BASE_URL,
  jobTitle: "Fullstack Developer",
  knowsAbout: ["Vue.js", "React", "TypeScript", "Node.js", "Bun", "Vike", "Tailwind CSS", "Hono", "SQLite", "Vercel", "Cloudflare"],
  sameAs: ["https://github.com/Gezellligheid", "https://instagram.com/mtstorm_"],
});

const websiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Elias — Gezelligheid_",
  url: BASE_URL,
  description: "Portfolio of Elias, a fullstack developer passionate about Vue, React, Vike and modern web.",
});
</script>
