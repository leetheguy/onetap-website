<template>
  <div class="bg-black flex justify-center">
    <div class="w-100 mhvh-10-ns ph2 ph5-ns pb3-l bg-white br5 vh-80 flex flex-column justify-between">
      <h2 class="tc w-100 f1-l">Who We Work With</h2>
      <div class="flex flex-column flex-row-l justify-around justify-between-l h-100 vh-50-l mb-10-vh-l">
        <who-what-item
          icon="user"
          title="Individuals"
          text="Hassle free, friendly service. We'll help you build or improve your business."
          class="w-30-l"
        />
        <who-what-item
          icon="bicycle"
          title="Startups"
          text="Build a working demo to show investors you have what it takes."
          class="w-30-l"
        />
        <who-what-item
          icon="user-tie"
          title="Businesses"
          text="Use your team's existing skills to build a mobile app. We'll show you how."
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
  name: 'WhoWeWorkWith',
  components: {
    WhoWhatItem,
  },
  computed: { },
}
</script>

<style scoped>

</style>


