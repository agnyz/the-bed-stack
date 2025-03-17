---
title: "Bedstack: Bun + ElysiaJS + Drizzle"
titleTemplate: false
layout: page
sidebar: false
head:
  - - meta
    - property: 'og:title'
      content: Bedstack - Bun + ElysiaJS + Drizzle
  - - meta
    - name: 'description'
      content: Bedstack is a RealWorld example app crafted with bleeding-edge backend technologies. Built with Bun, ElysiaJS, and DrizzleORM for maximum performance and type safety.
  - - meta
    - property: 'og:description'
      content: Bedstack is a RealWorld example app crafted with bleeding-edge backend technologies. Built with Bun, ElysiaJS, and DrizzleORM for maximum performance and type safety.
---

<script setup>
import Header from './components/header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
</script>

<Hero />

<Features />

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, 
    rgb(from var(--vp-c-brand-1) r g b / 0.25) 20%,
    rgb(from var(--vp-c-brand-2) r g b / 0.5) 20%
  );
  --vp-home-hero-image-filter: blur(80px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

.VPButton.brand {
  background-image: linear-gradient(160deg, var(--vp-c-brand-1), var(--vp-c-brand-2)) !important;
  opacity: 0.8;
  transition: opacity 0.25s;
  border: 0;
}

.VPButton.brand:hover {
  opacity: 1;
}
</style>