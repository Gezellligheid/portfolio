<template>
  <section id="about" class="max-w-5xl mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
    <div class="reveal">
      <SectionHeader label="About me">Fullstack developer<br />from Belgium</SectionHeader>
      <p class="mt-4 text-cream/70 leading-relaxed">
        I'm a 25-year-old with a <strong class="text-cream">degree in fullstack development</strong>. What started as a
        school project became a genuine passion. I love crafting fast, accessible, and beautiful web applications.
      </p>
      <p class="mt-3 text-cream/70 leading-relaxed">
        I'm <strong class="text-forest">Gezelligheid_</strong>, and I can't wait to build something amazing together!
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <StatCard
        v-for="(stat, i) in stats"
        :key="i"
        :value="stat.value"
        :label="stat.label"
        class="reveal"
        :style="{ transitionDelay: i * 0.1 + 's' }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import StatCard from "../StatCard.vue";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "5+", label: "Technologies mastered" },
  { value: "∞", label: "Cups of coffee" },
];
</script>
