<template>
  <div>
    <div class="bg-black vh-10 flex items-center">
      <div class="dib w-50 flex items-center pl1 fixed">
        <div class="fixed left-0">
          <a href="/" class="vh-8 black">
            <img class="vh-8 wvh-8 bg-white br-pill ba bw2" src="@/assets/images/onetap_logo.svg"/>
          </a>
        </div>
      </div>
      <div class="w-50 flex items-center justify-end">
        <div class="hamburger-button fixed right-0">
          <img class="h-75 pr3" src="@/assets/svg/hamburger.svg" alt="" @click="showMenu = !showMenu"/>
        </div>
      </div>
    </div>
    <Menu v-if="showMenu"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Header',
  props: {
  },
  data: function() {
    return {
      showMenu: false
    }
  },
  computed: {
  },
  components: {
    Menu
  }
}
</script>