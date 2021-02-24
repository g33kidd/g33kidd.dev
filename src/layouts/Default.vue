<template>
  <div class="layout">
    <Navigation />
    <Typer />
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

<style lang="scss">
body {
  font-family: "Hack", monospace;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-image: url("/backgrounds/colors.jpg");
  // TODO fix squishing issue here.. why it squish
  background-size: cover;
  // background-position: center;
  color: #ffffff;

  .layout {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
  }

  .page-content {
    position: absolute;
    left: 200px;
    right: 0;
    top: 60px;
    margin: 12px;
    border-right: #f72585;
    border-right-style: solid;
    border-right-width: 6px;
    background: rgba(0, 0, 0, 0.3);
    padding: 12px;

    .inner {
      position: relative;
    }
  }

  .content {
    position: absolute;
    left: 200px;
    right: 0;
    top: 0;
    margin: 12px;
    border-right: darken(#f72585, 25%);
    border-right-style: dotted;
    border-right-width: 4px;
    background: rgba(0, 0, 0, 0.3);
    padding: 12px;

    .inner {
      position: relative;
    }
  }

  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
    pointer-events: none;
  }

  // This is the dot matrix overlay.
  // TODO this might be replaced by a canvas at some point for more interactivity.
  &::before {
    content: "";
    background-image: url(http://s14.directupload.net/images/111129/44ga9qid.png);
    background-size: 0.2rem;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }
}
</style>
