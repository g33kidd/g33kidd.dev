<template>
  <div class="layout">
    <Navigation />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from "~/components/Navigation.vue";
import Typer from "~/components/Typer.vue";
export default {
  components: { Navigation, Typer },
};
</script>