<template>
  <div class="features">
    <div class="features-grid">
      <a href="https://bun.sh/" class="feature-card" target="_blank">
        <div class="feature-icon">
          <img src="/bun-press-kit/logo-centered.svg" alt="Bun Logo" />
        </div>
        <h3 class="feature-title">Bun</h3>
        <p class="feature-details">
          All-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.
        </p>
      </a>

      <a href="https://elysiajs.com/" class="feature-card" target="_blank">
        <div class="feature-icon">
          <img src="/elysiajs-logo.png" alt="ElysiaJS Logo" />
        </div>
        <h3 class="feature-title">ElysiaJS</h3>
        <p class="feature-details">
          TypeScript framework supercharged by Bun with End-to-End Type Safety, unified type system and outstanding developer experience.
        </p>
      </a>

      <a href="https://orm.drizzle.team/" class="feature-card" target="_blank">
        <div class="feature-icon">
          <img src="/drizzle-logo.png" alt="Drizzle Logo" />
        </div>
        <h3 class="feature-title">Drizzle</h3>
        <p class="feature-details">
          Lightweight, performant, typesafe, non lactose, gluten-free, flexible, serverless-ready, and headless TypeScript ORM with both relational and SQL-like query APIs.
        </p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.features {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s;
  border: 1px solid var(--vp-c-divider);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.feature-details {
  text-align: center;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features {
    padding: 2rem 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style> 