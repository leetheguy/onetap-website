<template>
  <div class="fixed w-100 flex justify-end">
    <div class="menu-container vh-80 bg-black white ba bw2 br5 pa3">
      <a href="/about" class="link white">
        <h2 class=""> About </h2>
      </a>
      <hr/>
      <h2 class=""> Contact </h2>
      <hr/>
      <h2 class=""> Blog </h2>
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
