<template>
  <blockquote class="md-quote" v-html="html" />
</template>

<script setup lang="ts">
defineProps<{ html: string }>();
</script>
