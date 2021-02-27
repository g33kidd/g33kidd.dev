<template>
  <div class="entry-item">
    <div>{{ entry.created }}</div>
    <div>
      <g-link :to="entry.path">{{ entry.title }}</g-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryItem",
  props: ["entry"],
};
</script>