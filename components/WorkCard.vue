<template>
  <a :href="`/work/${post.slug}`" class="work-card">
    <div class="flex flex-wrap gap-2 mb-3">
      <span v-for="t in post.tags" :key="t" class="tag">{{ t }}</span>
    </div>
    <h3 class="text-lg font-bold text-cream leading-snug">{{ post.title }}</h3>
    <p class="text-sm text-cream/60 mt-2 line-clamp-3 flex-1">{{ post.description }}</p>
    <p v-if="post.client" class="text-xs text-forest/60 mt-4 font-semibold uppercase tracking-wide">
      {{ post.client }}
    </p>
    <span class="mt-4 text-forest text-sm font-semibold inline-flex items-center gap-1">
      View project →
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  post: { slug: string; title: string; description: string; tags: string[]; client?: string };
}>();
</script>
