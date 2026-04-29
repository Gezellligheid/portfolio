<template>
  <div :class="`md-callout md-callout--${type}`" v-html="html" />
</template>

<script setup lang="ts">
defineProps<{ type: string; html: string }>();
</script>
