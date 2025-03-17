<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
  <div class="hero">
    <div class="hero-content">
      <header class="hero-header">
        <h1 class="hero-title">
          <Header />
        </h1>
        <p class="hero-subtitle">
          Bun + ElysiaJS + DrizzleORM RealWorld Example
        </p>
        <p class="hero-tagline">
          Example app crafted with bleeding-edge backend technologies by RealWorld API specification.
        </p>
      </header>
      <div class="hero-actions">
        <a href="/what-is-bedstack" class="action-button brand">
          What is Bedstack?
        </a>
        <a href="/getting-started" class="action-button alt">
          Quickstart
        </a>
        <a href="https://github.com/agnyz/bedstack" class="action-button alt" target="_blank">
          View on GitHub
        </a>
      </div>
    </div>
    <div class="hero-image">
      <img src="/logo-mini.png" alt="Bedstack Logo" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  flex: 1;
}

.hero-header {
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.hero-tagline {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.action-button.brand {
  background: linear-gradient(160deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  opacity: 0.8;
}

.action-button.brand:hover {
  opacity: 1;
}

.action-button.alt {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.action-button.alt:hover {
  background: var(--vp-c-bg-mute);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  filter: var(--vp-home-hero-image-filter);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image {
    order: -1;
    margin-bottom: 2rem;
  }
}
</style> 