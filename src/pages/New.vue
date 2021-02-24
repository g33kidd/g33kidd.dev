<template>
  <Layout>
    <Typer :phrases="welcomeMessages" />
  </Layout>
</template>

<script>
import Card from "~/components/Card.vue";
import Typer from "~/components/Typer.vue";
export default {
  components: { Card, Typer },
  metaInfo: {
    title: "Welcome",
    description: "Hmmm..",
  },
};
</script>

<style lang="scss">
.name {
  font-family: "Bangers", sans-serif;
  font-size: 5rem;
}
</style>
