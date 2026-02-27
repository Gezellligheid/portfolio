<template>
  <div class="min-h-screen bg-[#09090f]" @mousemove="onMouseMove">
    <!-- Cursor spotlight -->
    <div class="cursor-spotlight" :style="spotlightStyle"></div>

    <!-- Global bg blobs -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="blob" :style="blob1Style"></div>
      <div class="blob" :style="blob2Style"></div>
    </div>

    <!-- Nav -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-[#09090f]/90 border-b border-white/5"
    >
      <a href="/" class="text-cream font-bold text-xl tracking-tight hover:text-[--color-forest] transition-colors">
        Elias<span class="text-[--color-forest]">.</span>
      </a>
      <div class="flex items-center gap-7">
        <a href="/#about" class="nav-link">About</a>
        <a href="/#skills" class="nav-link">Skills</a>
        <a href="/work" class="nav-link">Work</a>
        <a href="/#contact" class="nav-link">Contact</a>
      </div>
    </nav>

    <div class="page-transition-wrapper">
      <Transition :name="slideDir" mode="out-in">
        <main :key="pageContext.urlPathname" class="relative z-10 pt-16">
          <slot />
        </main>
      </Transition>
    </div>

    <footer class="relative z-10 border-t border-white/5 py-10 text-center text-sm text-[--color-forest]/60 mt-24">
      <p>Crafted with care by <span class="text-cream font-semibold">Elias</span> &mdash; Gezelligheid_</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { usePageContext } from "vike-vue/usePageContext";

const pageContext = usePageContext();
const slideDir = ref("slide-left");
let prevDepth = typeof window !== "undefined" ? window.location.pathname.split("/").filter(Boolean).length : 0;

watch(
  () => pageContext.urlPathname,
  (newPath) => {
    const newDepth = newPath.split("/").filter(Boolean).length;
    slideDir.value = newDepth >= prevDepth ? "slide-left" : "slide-right";
    prevDepth = newDepth;
  },
);

// ── Cursor spotlight ──────────────────────────────────────────
const mouse = ref({ x: -1000, y: -1000 });
function onMouseMove(e: MouseEvent) {
  mouse.value = { x: e.clientX, y: e.clientY };
}
const spotlightStyle = computed(() => ({
  background: `radial-gradient(700px circle at ${mouse.value.x}px ${mouse.value.y}px, rgba(249,115,22,0.07), transparent 50%)`,
}));

// ── Random blob helpers ───────────────────────────────────────
const COLORS_1 = ["#f97316", "#fb923c", "#fbbf24", "#f43f5e"];
const COLORS_2 = ["#a78bfa", "#818cf8", "#38bdf8", "#f97316"];

function randBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function randBorderRadius() {
  const v = () => Math.round(randBetween(25, 75));
  return `${v()}% ${100 - v()}% ${v()}% ${100 - v()}% / ${v()}% ${v()}% ${100 - v()}% ${100 - v()}%`;
}
function randColor(palette: string[]) {
  return palette[Math.floor(Math.random() * palette.length)];
}

interface BlobState {
  x: number;
  y: number;
  scale: number;
  color: string;
  radius: string;
}

function randomBlobState(colorPalette: string[]): BlobState {
  return {
    x: randBetween(-10, 80), // vw
    y: randBetween(-10, 80), // vh
    scale: randBetween(0.85, 1.2),
    color: randColor(colorPalette),
    radius: randBorderRadius(),
  };
}

function blobToStyle(b: BlobState, size: string): Record<string, string> {
  return {
    width: size,
    height: size,
    transform: `translate(${b.x}vw, ${b.y}vh) scale(${b.scale})`,
    borderRadius: b.radius,
    background: b.color,
  };
}

const blob1 = ref<BlobState>(randomBlobState(COLORS_1));
const blob2 = ref<BlobState>(randomBlobState(COLORS_2));

const blob1Style = computed(() => blobToStyle(blob1.value, "620px"));
const blob2Style = computed(() => blobToStyle(blob2.value, "520px"));

let timer1: ReturnType<typeof setTimeout>;
let timer2: ReturnType<typeof setTimeout>;

function scheduleBlob1() {
  const delay = randBetween(3000, 6000);
  timer1 = setTimeout(() => {
    blob1.value = randomBlobState(COLORS_1);
    scheduleBlob1();
  }, delay);
}
function scheduleBlob2() {
  const delay = randBetween(4000, 8000);
  timer2 = setTimeout(() => {
    blob2.value = randomBlobState(COLORS_2);
    scheduleBlob2();
  }, delay);
}

onMounted(() => {
  scheduleBlob1();
  // stagger blob2 so they don't always move at the same time
  setTimeout(scheduleBlob2, 2000);
});
onUnmounted(() => {
  clearTimeout(timer1);
  clearTimeout(timer2);
});
</script>

<style scoped>
.cursor-spotlight {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  transition: background 0.08s ease;
}

/* ── Page slide transitions ───────────────────────────────── */
.page-transition-wrapper {
  position: relative;
  overflow-x: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.38s ease;
}

/* Forward: new page comes from right, old goes left */
.slide-left-enter-from {
  transform: translateX(60px);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}

/* Back: new page comes from left, old goes right */
.slide-right-enter-from {
  transform: translateX(-60px);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(60px);
  opacity: 0;
}
.blob {
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(100px);
  opacity: 0.28;
  transition:
    transform 5s cubic-bezier(0.45, 0.05, 0.55, 0.95),
    border-radius 5s ease,
    background 3s ease,
    scale 5s ease;
  will-change: transform, border-radius, background;
}

.nav-link {
  color: #c0bfd8;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: #f97316;
  border-radius: 2px;
  transition: width 0.25s ease;
}
.nav-link:hover {
  color: #f97316;
}
.nav-link:hover::after {
  width: 100%;
}
</style>
