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
import Hero from './components/hero.vue'
import Features from './components/features.vue'
</script>

<Hero />

<Features />

<style>
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