<template>
  <Layout class="blog">
    <div class="page">
      <div class="container">
        <entry-item
          v-for="edge in $page.entries.edges"
          :key="edge.node.id"
          :entry="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import EntryItem from "../components/EntryItem.vue";
export default {
  components: { EntryItem },
  metaInfo: {
    title: "Blog",
  },
};
</script>

<page-query>
query {
  entries: allJournalEntry(limit:50, sortBy:"published", order:DESC) {
    edges {
      node {
        id
        title
        version
        published
        created
        lastEdit
        path
      }
    }
  }
}
</page-query>