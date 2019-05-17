<template>
  <div>
    <div class="bg-black flex justify-center vw-100">
      <testimonial
        image="quincy-larson.jpg"
        quote="In my years of knowing and collaborating with Lee, I have been impressed by his willpower and curiosity. He is always seeking out new skills and pushing the boundaries of his capabilities. He possesses sage-like teaching ability, a designer's eye for color and shape, and most of all, a well-honed sense of humor."
        citation="Quincy Larson"
        citation-link="https://www.linkedin.com/in/quincylarson/"
        business="Founder, Free Code Camp"
        business-link="https://www.freecodecamp.org/"
        color="yellow"
        class="w-100"
      />
    </div>
    <auto-scroll/>
    <div class="bg-black flex justify-center vw-100">
      <testimonial
        image="brian-hankey.jpg"
        quote="Lee really knows his stuff when it comes to web apps and modern technology. He's a smart developer and works hard on every project. Lee is also very passionate about what he does and cares tremendously about putting out high quality products."
        citation="Brian Hankey"
        citation-link="https://www.linkedin.com/in/brianchankey/"
        business="Co-Founder, La Visual"
        business-link="http://www.lavisual.com/"
        color="orange"
        class="w-100"
      />
    </div>
    <auto-scroll/>
    <div class="bg-black flex justify-center vw-100">
      <testimonial
        image="shira-coleman.jpg"
        quote="Lee has been great to work with. He has a wonderful can do attitude, professional processes in place, and great communication skills. I'm so excited about my app!"
        citation="Shira Coleman"
        citation-link="https://www.linkedin.com/in/shira-coleman-b1b4376b/"
        business="Founder, Playbies"
        business-link="https://playbies.com/"
        color="green"
        class="w-100"
      />
    </div>
    <auto-scroll/>
  </div>
</template>

<script>
// @ is an alias to /src
import AutoScroll from '@/components/widgets/AutoScroll.vue'
import Testimonial from '@/components/widgets/Testimonial.vue'

export default {
  name: 'Testimonials',
  components: {
    AutoScroll,
    Testimonial,
  },
  computed: { },
}
</script>

<style scoped>

</style>


