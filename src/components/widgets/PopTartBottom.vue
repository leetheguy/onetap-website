<template>
<div class="pop-tart w-100 bg-black fixed white">
  <div class="h-100 flex items-end justify-center">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  name: 'PopTartBottom',
}
</script>

<style scoped>
.pop-tart {
  margin-bottom: -500px;
  height: 500px;
  z-index: -10;
}
</style>
