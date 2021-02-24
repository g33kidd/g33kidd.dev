<template>
  <Layout>
    <div class="page-content">
      <div v-for="edge in $page.entries.edges" :key="edge.node.id">
        {{ edge.node.title }} Hey
      </div>
    </div>
  </Layout>
</template>

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
        description
        path
      }
    }
  }
}
</page-query>