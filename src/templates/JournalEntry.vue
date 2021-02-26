<template>
  <Layout>
    <div class="container journal">
      <div class="page">
        <div>
          <span class="">{{ $page.journalEntry.created }}</span>
          <span class="">{{ $page.journalEntry.published }}</span>
          <span class="">{{ $page.journalEntry.lastEdit }}</span>
          <span class="">v{{ $page.journalEntry.version }}</span>
        </div>
        <h1 class="title">{{ $page.journalEntry.title }}</h1>
        <div class="content" v-html="$page.journalEntry.content"></div>
      </div>
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
    wip
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
