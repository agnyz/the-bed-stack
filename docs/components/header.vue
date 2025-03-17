<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
  <h1 class="header">
    The BED Stack
  </h1>
</template>

<style scoped>
.header {
  background: linear-gradient(120deg, var(--vp-c-brand-1) 30%, var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

:root {
  --vp-c-brand-1: #B72A2A;
  --vp-c-brand-2: #FF7D1C;
}

.dark {
  --vp-c-brand-1: #FF7D1C;
  --vp-c-brand-2: #B72A2A;
}
</style>
