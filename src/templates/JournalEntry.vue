<template>
  <Layout>
    <div class="container journal">
      <div class="page">
        <div class="info">
          <div class="data">
            <div>Created</div>
            {{ $page.journalEntry.created }}
          </div>
          <div class="data">
            <div>Published</div>
            {{ $page.journalEntry.published }}
          </div>
          <div class="data">
            <div>Last Edit</div>
            {{ $page.journalEntry.lastEdit }}
          </div>
          <div class="data">
            <div>Version</div>
            v{{ $page.journalEntry.version }}
          </div>
          <div class="data">
            <div>WIP</div>
            {{ $page.journalEntry.wip }}
          </div>
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
  metaInfo() {
    let entry = this.$page.journalEntry;

    return {
      title: entry.title,
    };
  },
};
</script>
