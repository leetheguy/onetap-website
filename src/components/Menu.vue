<template>
  <div class="fixed flex justify-end menu-container fr right-0 z-9999">
    <div class="vh-80 bg-black white ba bw2 br5 pa3 w-100">
      <!-- <a href="/about" class="link white">
        <h2 class=""> About </h2>
      </a> -->
      <!-- <hr/> -->
      <router-link :to="{ name: 'contactSubject', params: { formSubject: 'work' }}" class="link white">
        <h2> Contact </h2>
      </router-link>

      <a href="/contact" class="link white">
      </a>
      <!-- <a href="/contact" class="link white">
        <h2> Contact </h2>
      </a> -->
      <hr/>
      <a href="https://medium.com/one-tap-software" target="_blank" class="link white">
        <h2> Blog </h2>
      </a>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style scoped>
.menu-container {
  width: 240px;
  z-index: 9999;
}
</style>
