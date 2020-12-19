<template>
  <Layout>
    <div class="bg-g-black">
      <div class="container mx-auto">
        <div class="flex md:flex-row flex-col md:space-x-24 px-8 md:px-0">

          <div class="md:w-1/2">
            <div class="flex justify-center">
              <vue-typer :text="welcomeMessages" :shuffle="true" pre-erase-delay='5000'></vue-typer>
            </div>
            <div class="text-g-gray font-rubik grid grid-cols-1 pt-8">
              <div class="flex flex-row items-center space-x-5 text-xl justify-evenly">
                <div class="text-gray-600 font-black uppercase w-32 text-right">Name</div>
                <div class="font-rubik flex-1 text-left">Josh</div>
              </div>
              <div class="flex flex-row items-center space-x-5 text-xl justify-evenly">
                <div class="text-gray-600 font-black uppercase w-32 text-right">Age</div>
                <div class="font-rubik flex-1 text-left">24</div>
              </div>
              <div class="flex flex-row items-center space-x-5 text-xl justify-evenly">
                <div class="text-gray-600 font-black uppercase w-32 text-right">Location</div>
                <div class="font-rubik flex-1 text-left">Anywhere</div>
              </div>
            </div>
            <article class="py-8 font-rubik text-white grid grid-cols-1 space-y-6">
              <!-- TODO Change?? -->
              <p>I'm baby man bun ennui hell of craft beer squid intelligentsia iceland. Vinyl wayfarers normcore intelligentsia cloud bread scenester hell of yuccie kinfolk. Sustainable af tumblr YOLO asymmetrical. Palo santo cray chicharrones vexillologist tbh humblebrag twee scenester chia post-ironic flannel raclette. Irony hella DIY health goth. Ramps 8-bit cardigan la croix pour-over semiotics. Ramps twee farm-to-table, vegan etsy austin la croix.</p>
              <p>Venmo jean shorts direct trade keytar food truck. Affogato lomo stumptown, hoodie VHS palo santo listicle small batch craft beer. Thundercats lumbersexual flannel forage bespoke.</p>
            </article>
          </div>

          <div class="md:w-1/2 grid grid-cols-2 gap-4 xs:grid-cols-1 md:flex md:flex-col">
            <Card class="bg-g-purple text-white" title="Chat with me!" content="Interested in chatting with me about a project? Have something to ask? Just for fun & games? Shoot me a message and I’ll get back to you!" smol="* Really just testing to see how small this text is..." sticker="peeking.png" />
            <Card class="bg-g-purple text-white" title="Chat with me!" content="Interested in chatting with me about a project? Have something to ask? Just for fun & games? Shoot me a message and I’ll get back to you!" smol="* Really just testing to see how small this text is..." />
            <Card class="bg-g-purple text-white" title="Chat with me!" content="Interested in chatting with me about a project? Have something to ask? Just for fun & games? Shoot me a message and I’ll get back to you!" smol="* Really just testing to see how small this text is..." />
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
        "This is some really long text I'm not sure how it will turn out??",
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
}

.vue-typer .custom.char {
  color: #f25f3f;
  background-color: #0f0f0f;
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