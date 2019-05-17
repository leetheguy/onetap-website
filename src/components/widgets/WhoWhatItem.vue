<template>
  <div class="w-100 flex flex-column-l ba br5 bw2 h-100-l">
    <div class="w-third w-100-l flex justify-center items-center flex-column-l mt3-l">
      <!-- <i class={`far fa-${this.iconName} f-5 f-6-ns ml1`}></i> -->
      <i class="far f-5 f-6-ns ml1" :class="['fa-' + icon]"></i>
    </div>
    <div class="w-two-thirds w-100-l h-100">
      <h3 class="tc f2-l">{{title}}</h3>
      <p class="mh2 mh4-ns lh-copy-ns">
        {{text}}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'WhoWhatItem',
  props: {
    icon: String,
    title: String,
    text: String,
  },
  components: {
  },
  computed: { },
}
</script>

<style scoped>
</style>
