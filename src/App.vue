<template>
  <div id="app" class="font-sans" :class="{'dark': theme == 'dark'}">
    <Header @switchTheme="switchTheme()" />
    <div class="min-h-[calc(100vh-65px)] pl-24 pr-10 pt-5 pb-10 dark:bg-[#1E1E1E]">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
  name: "App",
  components: {
    Header
  },
  data: function() {
    return {
      theme: ''
    }
  },
  methods: {
    switchTheme() {
      this.theme = this.theme == '' ? 'dark' : '';
    }
  }
};
</script>

<style>
@import "style.css";
</style>
