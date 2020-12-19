<template>
  <Layout>
    <div class="bg-g-black">
      <div class="container mx-auto">
        <div class="flex md:flex-row flex-col md:space-x-24 px-8 md:px-0">

          <div class="md:w-1/2">
            <div class="flex justify-center">
              <!-- <vue-typer :text="welcomeMessages" :shuffle="true" pre-erase-delay='3000'></vue-typer> -->
            </div>
            <div class="text-g-gray font-rubik grid grid-cols-1 justify-center items-center mt-8 py-8 bg-gray-900 border-2 border-gray-800 rounded">
              <div class="flex flex-row items-center space-x-5 text-xl justify-evenly">
                <div class="text-gray-600 font-black uppercase w-1/2 text-right">Name</div>
                <div class="font-rubik flex-1 text-left">Josh</div>
              </div>
              <div class="flex flex-row items-center space-x-5 text-xl justify-evenly">
                <div class="text-gray-600 font-black uppercase w-1/2 text-right">Age</div>
                <div class="font-rubik flex-1 text-left">24</div>
              </div>
              <div class="flex flex-row items-center space-x-5 text-xl justify-evenly">
                <div class="text-gray-600 font-black uppercase w-1/2 text-right">Location</div>
                <div class="font-rubik flex-1 text-left">Anywhere</div>
              </div>
              <div class="flex flex-row items-center space-x-5 text-xl mt-5 justify-evenly">
                <div class="text-g-blue font-bangers font-extralight uppercase w-1/2 text-3xl text-right">XP</div>
                <div class="font-bangers flex-1 text-3xl text-left">420</div>
              </div>
            </div>
            <article class="py-8 font-rubik text-white grid grid-cols-1 space-y-6">
              <!-- TODO Change?? -->
              <p>I'm baby man bun ennui hell of craft beer squid intelligentsia iceland. Vinyl wayfarers normcore intelligentsia cloud bread scenester hell of yuccie kinfolk. Sustainable af tumblr YOLO asymmetrical. Palo santo cray chicharrones vexillologist tbh humblebrag twee scenester chia post-ironic flannel raclette. Irony hella DIY health goth. Ramps 8-bit cardigan la croix pour-over semiotics. Ramps twee farm-to-table, vegan etsy austin la croix.</p>
              <p>Venmo jean shorts direct trade keytar food truck. Affogato lomo stumptown, hoodie VHS palo santo listicle small batch craft beer. Thundercats lumbersexual flannel forage bespoke.</p>
            </article>
          </div>

          <div class="md:w-1/2 grid grid-cols-1 gap-4 xs:grid-cols-1 md:flex md:flex-col mt-8">
            <Card class="bg-g-purple text-white" title="Chat with me!" content="Interested in chatting with me about a project? Have something to ask? Just for fun & games? Shoot me a message and I’ll get back to you!" smol="* Really just testing to see how small this text is..." sticker="peeking.png" />
            <Card class="bg-twitch text-white" href="https://twitch.tv/g33kidd" title="Gaming" content="Rocket League is usually not far away. Let's play a few games of Rocket League, just join the Discord and we can hangout!" icon="gg-games" />
            <Card class="bg-g-purple text-white" title="Business" content="Have a cool idea you want to work on? Want to study something together? I'm up for it, just find me in Discord!" />
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from "~/components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      welcomeMessages: [
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
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style lang="scss">
.vue-typer {
  font-family: Roboto Slab;
  font-size: 1.8rem;
  font-weight: 800;

  // background: #f25f3f;
  widows: 100%;
}

.vue-typer .custom.char {
  color: #f25f3f;
  // background-color: #0f0f0f;
}
.vue-typer .custom.char.selected {
  background-color: #264f78;
}

.vue-typer .custom.caret {
  // hmmmm... for some more spacing..
  // height: 20px;
  margin-left: 5px;
  width: 2px;

  // default value..
  // width: 10px;

  background-color: #343849;
}
</style>