<template>
  <section id="contact" class="glass-section py-16 md:py-24 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <SectionHeader label="Let's talk" class="reveal">Got a project in mind?</SectionHeader>
      <p class="mt-4 text-cream/70 leading-relaxed reveal">
        I'm always open to new opportunities, collaborations, or just a good conversation.
      </p>
      <a
        href="mailto:hello@gezelligheid.dev"
        class="inline-block mt-8 px-8 py-3 rounded-full bg-forest text-[#09090f] font-semibold hover:bg-rust transition-all duration-300"
      >
        hello@gezelligheid.dev
      </a>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a href="https://github.com/Gezellligheid" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="mdi:github" class="w-4 h-4" />
          GitHub
        </a>
        <a href="https://www.instagram.com/mtstorm_" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="mdi:instagram" class="w-4 h-4" />
          @mtstorm_
        </a>
        <a href="https://www.instagram.com/elias.picture" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="mdi:instagram" class="w-4 h-4" />
          @elias.picture
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import SectionHeader from "../SectionHeader.vue";
</script>
