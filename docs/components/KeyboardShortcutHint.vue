// KeyboardShortcutHint.vue

<script setup lang="ts">
// script goes here
defineProps(['keys']);
</script>

<template>
  <span>
    <kbd v-for="(key, index) in keys" :key="index">{{ key }}</kbd>
  </span>
</template>

<style>
span {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--color-gray-100);
  color: var(--color-gray-800);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>