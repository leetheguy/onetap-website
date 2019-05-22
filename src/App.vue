<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  window.$ = require('jquery')
  window._ = require('lodash')
</script>

<style>
  @import url('./assets/css/more-tachyons.css');
  @import url('./assets/css/tachyons.min.css');
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');

  body {
    margin: 0px;
    padding: 0px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 { font-family: 'Varela Round'; }
</style>
