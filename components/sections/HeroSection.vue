<template>
  <section class="relative min-h-[100svh] md:min-h-[92vh] px-6">
    <div class="relative max-w-5xl mx-auto h-full min-h-[100svh] md:min-h-[92vh] flex items-center">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full py-16 md:py-24">
        <div class="order-2 md:order-1">
          <p class="animate-fade-up delay-100 text-forest font-semibold tracking-widest uppercase text-sm mb-4">
            Fullstack Developer
          </p>
          <h1
            class="animate-fade-up delay-200 text-4xl sm:text-5xl md:text-6xl font-extrabold text-cream leading-tight"
          >
            Hey, I'm <span class="text-gradient">Elias</span>
          </h1>
          <p class="animate-fade-up delay-300 mt-6 text-cream/70 text-lg leading-relaxed">
            I turn code into products. Building fast, beautiful, and accessible web experiences.
          </p>
          <div class="animate-fade-up delay-400 flex flex-wrap gap-4 mt-10">
            <a href="/work" class="btn-primary">View my work</a>
            <a href="/#contact" class="btn-outline">Get in touch</a>
          </div>
        </div>
        <div class="animate-fade-up delay-300 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/memoji.png"
            alt="Elias"
            class="w-72 h-72 md:w-96 md:h-96 object-contain select-none memoji"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <div
      class="animate-fade-in delay-700 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-forest/50 text-xs"
    >
      <span>scroll</span>
      <div class="w-px h-8 bg-forest/30"></div>
    </div>
  </section>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #f97316, #a78bfa, #fb923c, #f97316);
  background-size: 300% 300%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.memoji {
  mask-image: linear-gradient(to bottom, black 55%, transparent 88%);
  -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 88%);
  animation: memojiFloat 5s ease-in-out infinite;
}
@keyframes memojiFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
</style>
