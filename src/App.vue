<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  window.$ = require('jquery')
  window._ = require('jquery')
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

    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: proximity;
    scroll-snap-type: y proximity;
  }

  h1, h2, h3, h4, h5, h6 { font-family: 'Varela Round'; }

  auto-scroll > div {
    scroll-snap-align: start;
  }
</style>
