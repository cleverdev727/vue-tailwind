<template>
  <div id="app" class="">
    <Header />
    <router-view />
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
