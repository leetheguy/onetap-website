<template>
  <div class="vh-10 bg-black flex justify-center items-center">
    <div class="vh-8 wvh-8 bg-white br-pill flex justify-center items-center">
      <i class="f1 fas" :class="{'fa-chevron-up': direction === 'up', 'fa-chevron-down': direction === 'down'}"></i>
      <!-- <i class="f1 fas fa-chevron-up"></i> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutoScroll',
  data: function() {
    return {
      mounted: false
    }
  },
  mounted: function() {
    this.mounted = true;
  },
  computed: {
    direction: function() {
      var direction = "down";
      var half = $(window).height()/2;

      if (this.mounted) {
        if(this.$el.getBoundingClientRect().top < half) this._direction = "up";
      }

      return direction;
    }
  }
}
</script>
