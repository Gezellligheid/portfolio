<template>
  <div :class="['md-text-image', position === 'left' && 'md-text-image--reverse']">
    <div class="md-text-image__content" v-html="html" />
    <div class="md-text-image__image">
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt: string; position: "left" | "right"; html: string }>();
</script>
