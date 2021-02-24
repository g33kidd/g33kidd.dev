<template>
  <Layout>
    <div class="error">404 — Page Not Found</div>
  </Layout>
</template>

// TODO add randomized links to visit based on pins or blog articles.

<style lang="scss">
.error {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  line-height: 8px;
  color: #4cc9f0;
  pointer-events: none;

  &::before {
    content: "?o4 — Pag3 No7 F0unp";
    transform: translateY(50px);
    color: #4cc9f0;
    z-index: 6;
  }
}
</style>