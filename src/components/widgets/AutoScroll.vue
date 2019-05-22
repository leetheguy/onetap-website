<template>
  <div class="vh-10 bg-black flex justify-center items-center" v-on:click="scroll">
    <div class="vh-8 wvh-8 bg-white br-pill flex justify-center items-center">
      <i class="f1 fas" :class="{'fa-chevron-up': direction === 'up', 'fa-chevron-down': direction === 'down'}"></i>
      <!-- <i class="f1 fas fa-chevron-up"></i> -->
    </div>
  </div>
</template>

<script>
var $ = window.$;

export default {
  name: 'AutoScroll',
  data: function() {
    return {
      mounted: false,
      direction: "down",
    }
  },
  mounted: function() {
    this.mounted = true;
    this.setDirection();
  },
  created () {
    window.addEventListener('scroll', this.setDirection);
  },
  destroyed () {
    window.removeEventListener('scroll', this.setDirection);
  },
  methods: {
    setDirection: function() {
      var half = $(window).height()/2;

      if (this.mounted) {
        this.direction = (this.$el.getBoundingClientRect().top < half) ? "up" : "down";
      }
    },
    scroll: function() {
      let position = this.direction === "down"
        ? $(this.$el).position().top
        : $(this.$el).position().top - $(window).height() + this.$el.getBoundingClientRect().height;

      window.scroll({top: position, behavior: 'smooth'});
    },
  },
}
</script>
