<template>
  <header class="header bg-g-black px-6 py-6">
    <twitch />
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <g-link to="/">
          <logo class="w-10 h-10" />
        </g-link>
        <nav class="grid grid-cols-2 md:flex gap-1 text-sm">
          <nav-link v-for="link in links" :extra="link.extra" :key="link.to" :text="link.text" :to="link.to" />
        </nav>
        <g-link class="nav-link text-white font-bangers uppercase text-lg py-2 px-4 rounded transition transform hover:scale-110 hover:rotate-6 bg-g-red" to="/studios">
          g33kidd Studios
        </g-link>
      </div>
    </div>
  </header>
</template>

<script>
import Twitch from "./services/twitch.vue";
import NavLink from "../components/NavLink.vue";
export default {
  name: "Header",
  components: { NavLink, Twitch },
  data() {
    return {
      links: [
        { text: "Home", to: "/" },
        { text: "Blog", to: "/blog" },
        { text: "Projects", to: "/projects" },
        { text: "About", to: "/about" },
        { text: "Contact", to: "/contact" },
        {
          text: "Discord Server",
          to: "https://discord.gg/qQnBPDm",
          extra:
            "bg-discord transition transform hover:bg-g-discord-hover hover:scale-105",
        },
      ],
    };
  },
};
</script>