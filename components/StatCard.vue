<template>
  <div class="stat-card">
    <span class="text-3xl font-extrabold text-forest">{{ value }}</span>
    <span class="text-sm text-cream/60 mt-1">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: string; label: string }>();
</script>
