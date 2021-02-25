<template>
  <div class="navigation">
    <g-link
      v-for="link in links"
      :key="link.to"
      :class="link.extra"
      class="nav-link"
      :to="link.to"
      >{{ link.text }}</g-link
    >
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        { text: "Home", to: "/" },
        { text: "Projects", to: "/projects" },
        { text: "Blog", to: "/blog" },
        { text: "Contact", to: "/contact" },
        { text: "About", to: "/about" },
        { text: "New", to: "/new" },
        {
          text: "Discord Server",
          to: "https://discord.gg/qQnBPDm",
          extra: "discord",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navigation {
  // box-sizing: border-box;
  // // position: absolute;
  // display: flex;
  // flex-direction: column;
  // top: 12px;
  // left: 24px;
  // padding-right: 12px;
  // padding-bottom: 3px;
  // border-bottom-color: #4cc9f0;
  // border-bottom-style: solid;
  // border-bottom-width: 4px;

  // @media only screen and (max-width: 600px) {
  //   display: none;
  // }

  // transition: border 175ms cubic-bezier(1, 0.21, 0.15, 0.86);

  // &:hover {
  //   border-bottom-color: #e2ef70;
  //   border-bottom-width: 6px;
  // }

  // &::before {
  //   content: "NAVIGATION";
  //   position: absolute;
  //   transform: rotate(-90deg);
  //   color: #e2ef70;
  //   top: 3rem;
  //   left: 4rem;
  //   z-index: -2;
  // }

  // .nav-link {
  //   display: inline-block;
  //   color: #4cc9f0;

  //   // Transitions here are intentionally different Durations because of the glitchy effect.
  //   transition: text-shadow, font-weight 95ms cubic-bezier(1, 0.21, 0.15, 0.86);
  //   transition: color 100ms cubic-bezier(1, 0.21, 0.15, 0.86);

  //   &.active--exact,
  //   &:hover {
  //     font-weight: bolder;
  //     color: #f72585;
  //     text-shadow: 4px 4px lighten(#f72585, 20%);
  //   }
  // }
}
</style>