<template>
  <div>
    <what-we-do/>
    <auto-scroll/>
    <who-we-work-with/>
    <auto-scroll/>
    <testimonials/>
  </div>
</template>

<script>
// @ is an alias to /src
import WhatWeDo from '@/components/WhatWeDo.vue'
import WhoWeWorkWith from '@/components/WhoWeWorkWith.vue'
import Testimonials from '@/components/Testimonials.vue'
import AutoScroll from '@/components/widgets/AutoScroll.vue'

export default {
  name: 'LandingPageBody',
  components: {
    WhatWeDo,
    WhoWeWorkWith,
    Testimonials,
    AutoScroll,
  },
  computed: { },
}
</script>

<style scoped>

</style>