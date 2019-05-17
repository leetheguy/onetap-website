<template>
  <div>
    <LandingPageHero/>
    <AutoScroll/>
    <LandingPageBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPageHero from '@/components/LandingPageHero.vue'
import LandingPageBody from '@/components/LandingPageBody.vue'
import Footer from '@/components/Footer.vue'
import AutoScroll from '@/components/widgets/AutoScroll.vue'

export default {
  name: 'LandingPage',
  components: {
    LandingPageHero,
    LandingPageBody,
    AutoScroll,
    Footer,
  },
  methods: {
  }
}
</script>