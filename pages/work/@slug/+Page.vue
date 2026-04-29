<template>
  <div>
    <!-- Hero image -->
    <div v-if="post.image && imageOk" class="w-full max-h-[480px] overflow-hidden">
      <img :src="post.image" :alt="post.title" class="w-full object-cover max-h-[480px]" @error="imageOk = false" />
    </div>

    <!-- Header -->
    <section class="max-w-3xl mx-auto px-6 pt-12 pb-10">
      <a href="/work" class="back-link">← All projects</a>

      <div class="mt-8 flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <h1 class="mt-4 text-3xl md:text-5xl font-extrabold text-cream leading-tight">{{ post.title }}</h1>
      <p class="mt-4 text-cream/60 text-base md:text-lg leading-relaxed max-w-xl">{{ post.description }}</p>

      <p v-if="post.client" class="mt-4 text-sm text-forest font-semibold uppercase tracking-widest">
        Client: {{ post.client }}
      </p>
    </section>

    <!-- Divider -->
    <div class="max-w-3xl mx-auto px-6">
      <hr class="border-forest/10" />
    </div>

    <!-- Content -->
    <article class="prose max-w-3xl mx-auto px-6 py-12">
      <template v-for="(block, i) in post.blocks" :key="i">
        <div v-if="block.type === 'html'" v-html="block.html" />
        <MdQuote v-else-if="block.type === 'quote'" :html="block.html" />
        <MdCallout v-else-if="block.type === 'callout'" :type="block.calloutType" :html="block.html" />
        <MdTextImage
          v-else-if="block.type === 'text-image'"
          :src="block.src"
          :alt="block.alt"
          :position="block.position"
          :html="block.html"
        />
      </template>
    </article>

    <!-- Footer nav -->
    <div class="max-w-3xl mx-auto px-6 pb-24">
      <a href="/work" class="back-link">← Back to all projects</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useData } from "vike-vue/useData";
import { useConfig } from "vike-vue/useConfig";
import type { Data } from "./+data";
import MdQuote from "../../../components/md/MdQuote.vue";
import MdCallout from "../../../components/md/MdCallout.vue";
import MdTextImage from "../../../components/md/MdTextImage.vue";

const post = useData<Data>();
const imageOk = ref(true);

const config = useConfig();
config({ title: `${post.title} — Elias`, description: post.description });
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #f97316;
  transition: color 0.2s;
  text-decoration: none;
}
.back-link:hover {
  color: #fb923c;
}
</style>

<style>
/* Prose styles for rendered markdown — scoped to .prose */
.prose {
  color: #c0bfd8;
  line-height: 1.8;
  font-size: 1rem;
}
.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  font-weight: 800;
  color: #f0efff;
  margin-top: 2em;
  margin-bottom: 0.5em;
  line-height: 1.25;
}
.prose h1 {
  font-size: 1.875rem;
}
.prose h2 {
  font-size: 1.5rem;
}
.prose h3 {
  font-size: 1.25rem;
}
.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  color: rgba(240, 239, 255, 0.7);
}
.prose a {
  color: #f97316;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.prose a:hover {
  color: #fb923c;
}
.prose strong {
  color: #f0efff;
  font-weight: 700;
}
.prose ul,
.prose ol {
  padding-left: 1.5em;
  margin: 1.25em 0;
  color: rgba(240, 239, 255, 0.7);
}
.prose ul {
  list-style-type: disc;
}
.prose ol {
  list-style-type: decimal;
}
.prose li {
  margin: 0.4em 0;
}
.prose code {
  font-size: 0.875em;
  background: rgba(167, 139, 250, 0.12);
  color: #a78bfa;
  border-radius: 0.3em;
  padding: 0.1em 0.4em;
  font-family: ui-monospace, monospace;
}
.prose pre {
  background: #1e1e38;
  color: #f0efff;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 1.75em 0;
  border: 1px solid rgba(167, 139, 250, 0.15);
}
.prose pre code {
  background: none;
  color: inherit;
  padding: 0;
  font-size: 0.9em;
}
.prose blockquote {
  border-left: 4px solid #f97316;
  padding-left: 1rem;
  margin: 1.5em 0;
  color: rgba(240, 239, 255, 0.55);
  font-style: italic;
}
.prose hr {
  border-color: rgba(167, 139, 250, 0.15);
  margin: 2em 0;
}
.prose img {
  border-radius: 0.75rem;
  max-width: 100%;
  margin: 2em 0;
}
.prose-figure {
  position: relative;
  margin: 2em 0;
  border-radius: 0.75rem;
  overflow: hidden;
}
.prose-figure img {
  margin: 0;
  width: 100%;
  display: block;
}
.prose-figure figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 0.85rem 0.65rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent);
  font-size: 0.72rem;
  color: rgba(240, 239, 255, 0.6);
  font-style: italic;
  letter-spacing: 0.01em;
  pointer-events: none;
}
</style>
