<template>
  <div>
    <span class="section-label">{{ label }}</span>
    <component :is="tag" class="section-title"><slot /></component>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label: string; tag?: string }>(), { tag: 'h2' });
</script>
