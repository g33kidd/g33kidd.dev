<template>
  <a :href="href" target="_blank" class="text-white rounded px-8 py-4 flex flex-col space-y-5 relative transition transform hover:scale-105">
    <div class="text-3xl font-rubik font-black uppercase z-10 flex items-center space-x-4">
      <i v-if="icon" :class="icon" /><span>{{ title }}</span>
    </div>
    <!-- TODO make a subtitle style -->
    <p class="leading-relaxed font-slab z-10">{{ content }}</p>
    <span class="text-xs text-g-gray z-10" v-if="smol">{{ smol }}</span>
    <!-- TODO move stickers somewhere else... -->
    <div v-if="sticker">
      <img :src="stickerPath" class="h-full w-auto pt-8 absolute opacity-95 bottom-0 left-0 z-0" />
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "subtitle", "content", "smol", "sticker", "icon", "href"],
  computed: {
    stickerPath: function () {
      return `stickers/${this.sticker}`;
    },
  },
};
</script>