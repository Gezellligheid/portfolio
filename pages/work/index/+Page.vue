<template>
  <section class="max-w-5xl mx-auto px-6 py-24">
    <span class="section-label">Portfolio</span>
    <h1 class="section-title">My Work</h1>
    <p class="mt-4 text-cream/60 max-w-xl">
      A collection of projects I've built — side projects, client work, and open-source experiments.
    </p>

    <div v-if="posts.length === 0" class="mt-16 text-cream/40 text-center py-16">
      No projects yet — check back soon!
    </div>

    <div v-else class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="(post, i) in posts"
        :key="post.slug"
        :href="`/work/${post.slug}`"
        class="work-card animate-fade-up"
        :style="{ animationDelay: i * 0.08 + 's' }"
      >
        <div class="flex flex-wrap gap-2 mb-3">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <h2 class="text-lg font-bold text-cream leading-snug">{{ post.title }}</h2>
        <p class="text-sm text-cream/60 mt-2 line-clamp-3 flex-1">{{ post.description }}</p>
        <p v-if="post.client" class="text-xs text-forest/60 mt-4 font-semibold uppercase tracking-wide">
          {{ post.client }}
        </p>
        <span
          class="mt-4 text-forest text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          View project →
        </span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vike-vue/useData";
import type { Data } from "./+data";

const { posts: rawPosts } = useData<Data>();
const posts = computed(() => rawPosts ?? []);
</script>

<style scoped>
.section-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #f97316;
  margin-bottom: 0.5rem;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #f0efff;
  line-height: 1.2;
}
.work-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 40px rgba(249, 115, 22, 0.12);
  border-color: rgba(249, 115, 22, 0.25);
}
.tag {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(249, 115, 22, 0.15);
  color: #f97316;
  border-radius: 9999px;
  padding: 0.15rem 0.6rem;
}
</style>
