<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
  data() {
    return {
      links: [
        { text: "Home", to: "/" },
        { text: "Blog", to: "/blog" },
        { text: "Projects", to: "/projects" },
        { text: "About", to: "/about" },
        { text: "Contact", to: "/contact" },
      ],
    };
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
