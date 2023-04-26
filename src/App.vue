<template>
  <div id="app" class="font-sans">
    <Header />
    <div class="pl-24 pr-10 pt-5">
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from "./components/layout/Header.vue"
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import "style.css"
</style>
