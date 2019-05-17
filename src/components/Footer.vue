<template>
  <div>
    <div class="bg-black white vh-80 pt1 flex flex-column justify-center">
      <h1 class="w-100 f1 flex flex-column flex-row-l justify-center items-center">
        <p class="mv1">
          One Tap&nbsp;
        </p>
        <img class="vh-8 wvh-8 bg-white br-pill ba bw2" src="@/assets/images/onetap_logo.svg" alt=""/> 
        <p class="mv1">
          &nbsp;Software
        </p>
      </h1>
      <h3 class="w-100 tc">
        serverless | responsive | web | mobile | pwa
      </h3>
      <div class="w-100">
        <div class="w-100 tc varela">
          <button class="w-100 w-60-ns bn br-pill shadow-1 f2 dib button-reset bg-orange mt3">Get a Free Consultation!</button>
        </div>
      </div>
      <h2 class="w-100 tc bg-black orange fixed bottom-0 peekaboo">peekaboo</h2>
    </div>
    <div class="vh-10 tc flex flex-column justify-end items-center pb2 bg-black white">
      <p class="ma0 mb2 orange">
        built with 🧡 and&nbsp;
        <a target="_blank" class="orange" href="https://stenciljs.com/">stencil</a>
        &nbsp;and&nbsp;
        <a target="_blank" class="orange" href="https://tachyons.io/">tachyons</a>
      </p>
      <p class="ma0 mb2 yellow">
        &nbsp;view on&nbsp;
        <a target="_blank" class="yellow" href="https://github.com/leetheguy/">github</a>
      </p>
      <p class="ma0 green">
        &copy; 2016-{{new Date().getFullYear()}}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import AutoScroll from '@/components/widgets/AutoScroll.vue'

export default {
  name: 'Footer',
  components: { },
  computed: { },
}
</script>

<style scoped>
.peekaboo {
  margin-bottom: -500px;
  padding-top: 50px;
  height: 500px;
  z-index: -10;
}
</style>
