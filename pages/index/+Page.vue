<template>
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <WorkSection :posts="posts" />
  <ContactSection />
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useData } from "vike-vue/useData";
import type { Data } from "./+data";
import HeroSection from "../../components/sections/HeroSection.vue";
import AboutSection from "../../components/sections/AboutSection.vue";
import SkillsSection from "../../components/sections/SkillsSection.vue";
import WorkSection from "../../components/sections/WorkSection.vue";
import ContactSection from "../../components/sections/ContactSection.vue";

const { posts: rawPosts } = useData<Data>();
const posts = computed(() => rawPosts ?? []);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement?.querySelectorAll(".reveal") ?? [];
          siblings.forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 80);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
</script>
