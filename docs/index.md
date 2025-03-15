---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: The BED Stack
  text: Bun + ElysiaJS + DrizzleORM
  tagline: RealWorld example app for the stack you don't want to sleep on 🛌💤
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/agnyz/the-bed-stack
  image: /logo-mini.png

features:
  - title: Bun
    details: All-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.
    link: https://bun.sh/
    
  - title: ElysiaJS
    details: TypeScript framework supercharged by Bun with End-to-End Type Safety, unified type system and outstanding developer experience.
    link: https://elysiajs.com/

  - title: DrizzleORM
    details: Lightweight, performant, typesafe, non lactose, gluten-free, flexible, serverless-ready, and headless TypeScript ORM with both relational and SQL-like query APIs.
    link: https://orm.drizzle.team/

---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #B72A2A 30%, #FF7D1C);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #B72A2A 50%, #FF7D1C 50%);
  --vp-home-hero-image-filter: blur(40px);
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
</style>