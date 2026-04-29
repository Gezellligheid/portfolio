<template>
  <meta property="og:type" content="article" />
  <meta property="og:url" :content="`https://gezelligheid.dev/work/${post.slug}`" />
  <meta property="og:title" :content="`${post.title} — Elias`" />
  <meta property="og:description" :content="post.description" />
  <meta property="og:image" :content="ogImage" />
  <meta name="twitter:title" :content="`${post.title} — Elias`" />
  <meta name="twitter:description" :content="post.description" />
  <meta name="twitter:image" :content="ogImage" />
  <script type="application/ld+json" v-html="projectSchema" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vike-vue/useData";
import type { Data } from "./+data";

const post = useData<Data>();
const BASE_URL = "https://gezelligheid.dev";

const ogImage = computed(() =>
  post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/mockup_portfolio.jpeg`
);

const projectSchema = computed(() =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: post.title,
    description: post.description,
    url: `${BASE_URL}/work/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Elias",
      url: BASE_URL,
    },
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
    ...(post.client ? { producer: post.client } : {}),
  })
);
</script>
