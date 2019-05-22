<template>
  <div>
    <PopTart>
      <h2>We think outside the box.</h2>
    </PopTart>
    <Header/>
    <div class="vh-80 bg-white flex justify-center">
      <div class="w-100 mh2 mh0-l w-two-thirds-l flex flex-column content-center justify-center">
        <div class="w-100 tc">
          <h3 class="f4 f3-ns">Welcome to One Tap Software</h3>
        </div>
        <div class="w-100 flex flex-wrap">
          <div class="dib w-100 w-50-l flex justify-center items-center">
            <h2 class="tc f3 f2-m f1-l">We Build Web <br class="dn-m"/>&amp; Mobile Apps<br/> for Awesome People<br class="dn-m"/> Like You!</h2>
          </div>
          <div class="dib w-100 w-50-l flex items-center">
            <div>
              <img src="@/assets/images/blicks.jpg"/>
            </div>
          </div>
        </div>
        <div class="w-100">
          <div class="w-100 tj varela">
            <h4 class="tc mt3 ma0-ns">We build responsive web, Android, and iOS apps at the same time using cross-platform, serverless technology.
              <router-link :to="{ name: 'contactSubject', params: { formSubject: 'consultation' }}" class="link white">
                <button class="w-100 bn br-pill shadow-1 f3 f2-l dib button-reset bg-orange mt3">Get a Free Consultation!</button>
              </router-link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopTart from '@/components/widgets/PopTart.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'LandingPageHero',
  props: {
  },
  computed: {
  },
  components: {
    PopTart,
    Header,
  }
}
</script>

<style scoped>
.top-buffer {
  margin-top: -500px;
  height: 500px;
  z-index: -10;
}
</style>