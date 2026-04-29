<template>
  <section class="max-w-5xl mx-auto px-6 py-16 md:py-24">
    <span class="section-label">Portfolio</span>
    <h1 class="section-title">My Work</h1>
    <p class="mt-4 text-cream/60 max-w-xl">
      A collection of projects I've built. Side projects, client work, and open-source experiments.
    </p>

    <div v-if="posts.length === 0" class="mt-16 text-cream/40 text-center py-16">
      No projects yet. Check back soon!
    </div>

    <div v-else class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WorkCard
        v-for="(post, i) in posts"
        :key="post.slug"
        :post="post"
        class="animate-fade-up"
        :style="{ animationDelay: i * 0.08 + 's' }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vike-vue/useData";
import type { Data } from "./+data";
import WorkCard from "../../../components/WorkCard.vue";

const { posts: rawPosts } = useData<Data>();
const posts = computed(() => rawPosts ?? []);
</script>
