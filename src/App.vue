<template>
  <div id="app" class="font-sans" :class="{'dark': theme == 'dark'}">
    <Header @switchTheme="switchTheme()" />
    <div class="min-h-[calc(100vh-38px)] md:min-h-[calc(100vh-65px)] px-[2px] md:pl-24 md:pr-10 py-[10px] md:pt-5 md:pb-10 dark:bg-[#1E1E1E]">
      <MobileTab class="flex md:hidden" />
      <Tab class="hidden md:flex" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Tab from "./components/layout/Tab.vue";
import MobileTab from "./components/layout/MobileTab.vue";
export default {
  name: "App",
  components: {
    Header,
    Tab,
    MobileTab
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
