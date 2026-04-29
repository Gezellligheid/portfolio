<template>
  <span class="skill-chip">{{ name }}</span>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>
