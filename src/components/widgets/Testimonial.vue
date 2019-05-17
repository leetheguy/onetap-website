<template>
  <div class="mhvh-10-ns ph2 ph5-ns bg-white br5 vh-80 flex flex-column justify-center">
    <div class="flex justify-center">
      <img :src="require(`../../assets/images/${image}`)" class="br-pill ba bw2 absolute"/>
      <div class="quote-box tc br5 ba bw2 pa2">
        <blockquote>
          <p class="pl2 bl bw2 measure lh-copy-ns tl tj-ns" :class="'b--' + color">{{quote}}</p>
          <cite class="w-100 dib tr">
            ~
            <a :href="citationLink" class="black" target="_blank">{{citation}}</a>
            <br/>
            <a :href="businessLink" class="black" target="_blank">{{this.business}}</a>
          </cite>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Testimonial',
  props: {
    image: String,
    quote: String,
    citation: String,
    citationLink: String,
    business: String,
    businessLink: String,
    color: String,
  },
  components: { },
  computed: { },
}
</script>

<style scoped>
img {
  width: 10rem;
  height: 10rem;
  z-index: 20;
}

.quote-box {
  padding-top: 6rem;
  margin-top: 5rem;
  z-index: 10;
}
</style>


