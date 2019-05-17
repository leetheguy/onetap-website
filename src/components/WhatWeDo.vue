<template>
  <div class="bg-black flex justify-center">
    <div class="w-100 mhvh-10-ns ph2 ph5-ns pb3-l bg-white br5 vh-80 flex flex-column justify-between">
      <h2 class="tc w-100 f1-l">What We Do</h2>
      <div class="flex flex-column flex-row-l justify-around justify-between-l h-100 vh-50-l mb-10-vh-l">
        <who-what-item
          icon="arrows-alt-h"
          title="Responsive"
          text="We use mobile-first tools and techniques exclusively."
          class="w-30-l"
        />
        <who-what-item
          icon="layer-group"
          title="Cross-Platform"
          text="We use tools like Ionic to build for mobile, tablets, and desktops all at once."
          class="w-30-l"
        />
        <who-what-item
          icon="cloud"
          title="Serverless"
          text="We use serverless technology like Firebase and Hasura to speed delivery."
          class="w-30-l"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WhoWhatItem from '@/components/widgets/WhoWhatItem.vue'

export default {
  name: 'WhatWeDo',
  components: {
    WhoWhatItem,
  },
  computed: { },
}
</script>

<style scoped>
</style>