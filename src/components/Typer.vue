<template>
  <div class="content">
    <vue-typer :text="welcomeMessages" :shuffle="true" :speed="120"></vue-typer>
  </div>
</template>

<script>
export default {
  name: "Typer",
  data() {
    return {
      welcomeMessages: [
        "🚀💙",
        "hello",
        "hai.",
        "Hey there!",
        "Howdy!",
        "Welcome to my site...",
        "#5: Hello there!",
        "[deleted message]",
        "Holy cow!",
        "What a save!",
        "Chat disabled for 4 seconds...",
        "Come join the discord.",
      ],
    };
  },
};
</script>

<style lang="scss">
.content {
  // position: absolute;
  // left: 200px;
  // right: 0;
  // top: 0;
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
</style>
