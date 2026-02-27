<template>
  <!-- Hero -->
  <section class="relative min-h-[92vh] px-6">
    <div class="relative max-w-5xl mx-auto h-full min-h-[92vh] flex items-center">
      <div class="grid md:grid-cols-2 gap-12 items-center w-full py-24">
        <!-- Text -->
        <div>
          <p class="animate-fade-up delay-100 text-forest font-semibold tracking-widest uppercase text-sm mb-4">
            Fullstack Developer
          </p>
          <h1 class="animate-fade-up delay-200 text-5xl md:text-6xl font-extrabold text-cream leading-tight">
            Hey, I'm <span class="text-gradient">Elias</span>
          </h1>
          <p class="animate-fade-up delay-300 mt-6 text-cream/70 text-lg leading-relaxed">
            I turn code into products &mdash; building fast, beautiful web experiences by day and running the kitchen by
            night.
          </p>
          <div class="animate-fade-up delay-400 flex flex-wrap gap-4 mt-10">
            <a href="/work" class="btn-primary">View my work</a>
            <a href="/#contact" class="btn-outline">Get in touch</a>
          </div>
        </div>

        <!-- Memoji -->
        <div class="animate-fade-up delay-300 flex justify-center md:justify-end">
          <img
            src="/memoji.png"
            alt="Elias"
            class="w-72 h-72 md:w-96 md:h-96 object-contain select-none memoji"
            draggable="false"
          />
        </div>
      </div>
    </div>

    <!-- scroll hint -->
    <div
      class="animate-fade-in delay-700 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-forest/50 text-xs"
    >
      <span>scroll</span>
      <div class="w-px h-8 bg-forest/30"></div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
    <div class="reveal">
      <span class="section-label">About me</span>
      <h2 class="section-title">Food industry<br />meets the web</h2>
      <p class="mt-4 text-cream/70 leading-relaxed">
        I'm a 25-year-old from Belgium with a <strong class="text-cream">degree in fullstack development</strong> who
        works in the food business. What started as a school project became a genuine passion — I love crafting fast,
        accessible, and beautiful web applications.
      </p>
      <p class="mt-3 text-cream/70 leading-relaxed">
        On the side I'm <strong class="text-forest">Gezelligheid_</strong>, building open-source tools and writing about
        the things I learn.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(stat, i) in stats" :key="i" class="stat-card reveal" :style="{ transitionDelay: i * 0.1 + 's' }">
        <span class="text-3xl font-extrabold text-forest">{{ stat.value }}</span>
        <span class="text-sm text-cream/60 mt-1">{{ stat.label }}</span>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="glass-section py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <span class="section-label text-sand! reveal">What I work with</span>
      <h2 class="section-title text-cream! reveal">Skills & tools</h2>
      <div class="mt-12 flex flex-wrap gap-3">
        <span v-for="skill in skills" :key="skill.name" class="skill-chip reveal">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </section>

  <!-- Work -->
  <section id="work" class="max-w-5xl mx-auto px-6 py-24">
    <span class="section-label reveal">Selected projects</span>
    <h2 class="section-title reveal">My Work</h2>

    <div v-if="posts.length === 0" class="mt-10 text-cream/50 text-center py-16">
      No projects yet — check back soon!
    </div>

    <div v-else class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="(post, i) in posts"
        :key="post.slug"
        :href="`/work/${post.slug}`"
        class="work-card reveal"
        :style="{ transitionDelay: i * 0.1 + 's' }"
      >
        <div class="flex flex-wrap gap-2 mb-3">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <h3 class="text-lg font-bold text-cream leading-snug">{{ post.title }}</h3>
        <p class="text-sm text-cream/60 mt-2 line-clamp-3">{{ post.description }}</p>
        <p v-if="post.client" class="text-xs text-forest/60 mt-4 font-medium">{{ post.client }}</p>
      </a>
    </div>

    <div class="mt-12 text-center">
      <a href="/work" class="btn-outline">See all projects</a>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="glass-section py-24 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <span class="section-label text-forest! reveal">Let's talk</span>
      <h2 class="section-title text-cream! reveal">Got a project in mind?</h2>
      <p class="mt-4 text-cream/70 leading-relaxed reveal">
        I'm always open to new opportunities, collaborations, or just a good conversation.
      </p>
      <a
        href="mailto:hello@gezelligheid.dev"
        class="inline-block mt-8 px-8 py-3 rounded-full bg-forest text-[#09090f] font-semibold hover:bg-rust transition-all duration-300"
      >
        hello@gezelligheid.dev
      </a>

      <!-- Socials -->
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <!-- GitHub -->
        <a href="https://github.com/Gezellligheid" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="mdi:github" class="w-4 h-4" />
          GitHub
        </a>

        <!-- Fiverr -->
        <a href="https://www.fiverr.com/sellers/eliasdebaveye" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="simple-icons:fiverr" class="w-4 h-4" />
          Fiverr
        </a>

        <!-- Instagram @mtstorm_ -->
        <a href="https://www.instagram.com/mtstorm_" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="mdi:instagram" class="w-4 h-4" />
          @mtstorm_
        </a>

        <!-- Instagram @elias.picture -->
        <a href="https://www.instagram.com/elias.picture" target="_blank" rel="noopener" class="social-pill">
          <Icon icon="mdi:instagram" class="w-4 h-4" />
          @elias.picture
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useData } from "vike-vue/useData";
import type { Data } from "./+data";

const { posts: rawPosts } = useData<Data>();
const posts = computed(() => rawPosts ?? []);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // stagger siblings
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

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Cups of coffee" },
];

const skills = [
  { name: "Vue" },
  { name: "React" },
  { name: "Vike" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "SQLite" },
  { name: "PostgreSQL" },
  { name: "Databases" },
  { name: "Analytics" },
  { name: "Vercel" },
  { name: "Hono" },
  { name: "Tailwind CSS" },
  { name: "REST APIs" },
  { name: "Git" },
];
</script>

<style scoped>
.glass-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.text-gradient {
  background: linear-gradient(135deg, #f97316, #a78bfa, #fb923c, #f97316);
  background-size: 300% 300%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.memoji {
  mask-image: linear-gradient(to bottom, black 55%, transparent 88%);
  -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 88%);
  animation: memojiFloat 5s ease-in-out infinite;
}
@keyframes memojiFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}

.section-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #f97316;
  margin-bottom: 0.5rem;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #f0efff;
  line-height: 1.2;
}
.btn-primary {
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  background: #f97316;
  color: #09090f;
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    background 0.25s,
    transform 0.15s;
}
.btn-primary:hover {
  background: #fb923c;
  transform: translateY(-1px);
}
.btn-outline {
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: 2px solid #f97316;
  color: #f0efff;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.25s;
}
.btn-outline:hover {
  background: #f97316;
  color: #09090f;
  transform: translateY(-1px);
}
.stat-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
}
.skill-chip {
  padding: 0.5rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f0efff;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition:
    background 0.2s,
    border-color 0.2s;
}
.skill-chip:hover {
  background: rgba(249, 115, 22, 0.15);
  border-color: rgba(249, 115, 22, 0.5);
}
.work-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 40px rgba(249, 115, 22, 0.12);
  border-color: rgba(249, 115, 22, 0.25);
}
.tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(249, 115, 22, 0.15);
  color: #f97316;
  border-radius: 9999px;
  padding: 0.15rem 0.6rem;
}
.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(240, 239, 255, 0.2);
  color: #f0efff;
  font-size: 0.875rem;
  font-weight: 500;
  transition:
    background 0.2s,
    border-color 0.2s;
}
.social-pill:hover {
  background: rgba(249, 115, 22, 0.15);
  border-color: #f97316;
  color: #f97316;
}
</style>
