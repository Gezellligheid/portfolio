<template>
  <section id="work" class="max-w-5xl mx-auto py-16 md:py-24">
    <SectionHeader label="Selected projects" class="reveal">My Work</SectionHeader>
    <div v-if="posts.length === 0" class="mt-10 text-cream/50 text-center py-16">No projects yet. Check back soon!</div>
    <div v-else class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WorkCard
        v-for="(post, i) in posts"
        :key="post.slug"
        :post="post"
        class="reveal"
        :style="{ transitionDelay: i * 0.1 + 's' }"
      />
    </div>
    <div class="mt-12 text-center">
      <a href="/work" class="btn-outline">See all projects</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import WorkCard from "../WorkCard.vue";

defineProps<{
  posts: Array<{ slug: string; title: string; description: string; tags: string[]; client?: string }>;
}>();
</script>
