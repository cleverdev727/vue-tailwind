<template>
  <div
    class="px-[2px] py-[10px] bg-warning dark:bg-header-bg border border-square-border rounded-[5px]"
  >
    <div
      class="flex justify-between font-montserrat font-bold text-[8px] leading-[10px] text-header-bg dark:text-white pl-[5px] pr-[10px] pb-[5px] mx-[3px] mb-[10px] border-b border-header-bg dark:border-square-border"
    >
      <div class="flex items-center">
        <img
          :src="require(`../assets/imgs/${type}.svg`)"
          :alt="type"
          class="brightness-0 mr-[5px] h-[15px] dark:invert"
        />
        <span>{{ `${type} (${num})` }}</span>
      </div>
      <div class="flex items-end">
        <img
          src="../assets/imgs/mobile-arrow-down.svg"
          alt="arrow"
          class="w-[14px] bottom-0 right-0 cursor-pointer transition dark:invert"
          :class="{
            '-rotate-90': !open
          }"
          @click="handleClick()"
        />
      </div>
    </div>
    <div
      class="pl-[6px] font-semibold text-[8px] leading-[11px] text-center text-header-bg dark:text-white  overflow-y-hidden transition-all"
      :class="{
        'max-h-0' : !open,
        'opacity-100 max-h-[1000px]' : open,
      }"
    >
      <div v-for="(row, key) in matchRows" :key="key" class="mb-[3px] last:mb-0">
        <MobileMatchRow
          v-bind="row"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileMatchRow from './MobileMatchRow.vue';
export default {
  name: 'mobile-accordion-component',
  components: {
    MobileMatchRow
  },
  props: {
    type: String,
    num: Number,
    matchRows: Array
  },
  data: function() {
    return {
      open: true,
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    }
  }
}
</script>