<template>
  <Layout>
    <div class="page-content">
      <h1 class="title">{{ $page.journalEntry.title }}</h1>
      <div class="journal-entry" v-html="$page.journalEntry.content"></div>
    </div>

    <!-- TODO a cool effect can be made by keeping it here.. -->
    <!-- {{ $page.journalEntry.content }} -->
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
.title {
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin: 24px 12px;
}

.journal-entry {
  p {
    margin: 18px 6px;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 18px;
  }
}
</style>