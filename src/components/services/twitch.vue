<template>
  <div>
    <div v-if="live" class="bg-purple-heart">Hey I'm live now!</div>
    <!-- <div v-else>Not live right now....</div> -->
  </div>
</template>

<script>
export default {
  created() {
    this.checkTwitch();
    this.timerId = setInterval(this.checkTwitch, 15000);
  },

  beforeDestroy() {
    clearInterval(this.timerId);
  },

  data: {
    timerId: "",
    live: false,
    channel: "g33kidd",
    liveMessage: "Currently streaming! Come hangout.",
  },

  methods: {
    async checkTwitch() {
      const opts = {
        headers: {
          "Client-ID": "wsovwp57czp31e1az6gqqydkqnzejy",
          Authorization: "Bearer e7248bkp9mtnch31c1oh01ufz2ek5b",
          accept: "application/vnd.twitchtv.v5+json",
        },
      };

      try {
        // TODO figure out what the API for this is....
        // just need to figure out the stream information..
        const resp = await fetch(
          `https://api.twitch.tv/helix/streams?client_id=wsovwp57czp31e1az6gqqydkqnzejy&user_name=g33kidd`,
          opts
        );

        resp.json();
      } catch (e) {
        this.errors = {
          error: e,
          message: "Couldn't connect to twitch??",
        };
      }
    },
  },
};
</script>