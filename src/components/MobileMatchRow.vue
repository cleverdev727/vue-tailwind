<template>
  <div
    class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] after:bg-row-hover-bg after:absolute after:top-0 after:left-0 after:w-0 after:h-full hover:after:w-full after:transition-all after:duration-1000"
  >
    <div
      class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
      v-if="isPlaying"
    >
      <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
    </div>
    <div>
      <div class="flex mb-[5px]">
        <div class="flex items-center mr-[3px]">
          <img :src="require(`../assets/imgs/${countries[0]}.svg`)" :alt="countries[0]" class="w-[13px] mr-[3px]" />
          <span class="capitalize">{{ countries[0] }}</span>
        </div>
        <img src="../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
        <div class="flex items-center">
          <img :src="require(`../assets/imgs/${countries[1]}.svg`)" :alt="countries[1]" class="w-[13px] mr-[3px]" />
          <span class="capitalize">{{ countries[1] }}</span>
        </div>
      </div>
      <span class="text-muted">{{ name }}</span>
    </div>
    <div class="flex items-center">
      <div class="flex mr-[5px]">
        <img
          src="../assets/imgs/play.svg"
          alt="Play"
          class="w-[10px] mr-[3px] cursor-pointer"
        />
        <img src="../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
      </div>
      <div class="flex">
        <div v-for="(point, key) in points" :key="key" class="mr-[7px] last:mr-0">
          <MobilePointCard
            :flag="point[2]"
            :val1="point[0]"
            :val2="point[1]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobilePointCard from './MobilePointCard.vue'
export default {
  name: "mobile-match-row-component",
  components: {
    MobilePointCard,
  },
  props: {
    isPlaying: Boolean,
    countries: Array,
    name: String,
    points: Array
  },
}
</script>