<template>
  <section id="skills" class="glass-section py-16 md:py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionHeader label="What I work with" class="reveal">Skills & tools</SectionHeader>
      <div class="mt-12 flex flex-wrap gap-3">
        <SkillChip v-for="skill in skills" :key="skill.name" :name="skill.name" class="reveal" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import SkillChip from "../SkillChip.vue";

const skills = [
  { name: "Vue" },
  { name: "React" },
  { name: "Vike" },
  { name: "TypeScript" },
  { name: "Node & Bun" },
  { name: "Vite" },
  { name: "Databases" },
  { name: "Analytics" },
  { name: "Vercel" },
  { name: "Cloudlfare" },
  { name: "Hono" },
  { name: "A good coffee ☕" },
  { name: "Tailwind CSS" },
  { name: "REST APIs" },
  { name: "Git" },
  { name: "Firebase" },
];
</script>
