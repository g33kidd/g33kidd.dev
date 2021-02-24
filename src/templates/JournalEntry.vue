<template>
  <Layout>
    <g-link
      :to="edge.node.path"
      class=""
      v-for="edge in $page.journalEntry.edges"
      :key="edge.node.id"
    >
      {{ edge.node.title }}
    </g-link>
  </Layout>
</template>

<page-query>
query JournalEntry ($path: String!) {
   journalEntry: journalEntry (path: $path) {
    id
    title
    description
    created
    published
    lastEdit
    version
    content
    path
  }
}
</page-query>

<script>
export default {
  name: "JournalEntry",
};
</script>

<style lang="scss">
</style>