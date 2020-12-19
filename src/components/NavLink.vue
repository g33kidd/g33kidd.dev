<template>
  <g-link class="nav-link text-white font-rubik font-bold py-2 px-4 rounded transition duration-150 hover:scale-110 hover:bg-g-blue" :to="to">{{ text }}</g-link>
</template>

<script>
export default {
  props: ["text", "to", "extra"],
};
</script>

<style lang="scss" scoped>
.active--exact {
  @apply bg-g-blue shadow-sm;
}
</style>