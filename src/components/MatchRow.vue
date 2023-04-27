<template>
  <div
    class="group relative flex justify-between bg-white dark:bg-dark-row-bg after:bg-row-hover-bg after:absolute after:top-0 after:left-0 after:w-0 after:h-full hover:after:w-full after:transition-all after:duration-1000 border border-white dark:border-dark-row-border dark:hover:border-warning rounded-[3px] px-5 py-[5px] cursor-pointer"
    :class="{
      'mb-[5px]': bottomFlag
    }"
  >
    <div
      class="absolute hidden items-center justify-center w-[37px] h-[15px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90 group-hover:flex"
      v-if="isPlaying"
    >
      <span class="font-bold text-[10px] leading-[14px] text-warning dark:text-header-bg mb-[1px]">LIVE</span>
    </div>
    <div class="flex">
      <div class="flex flex-col mr-5">
        <span class="mb-[3px]">{{ date }}</span>
        <span>{{ time }}</span>
      </div>
      <hr class="w-0 h-8 border-[1.5px] border-warning mr-5" />
      <div>
        <div class="flex mb-[5px]">
          <div class="flex items-center mr-[5px]">
            <img :src="require(`../assets/imgs/${avatar1}`)" alt="India" class="w-[15px] mr-[5px]" />
            <span>{{ country1 }}</span>
          </div>
          <img src="../assets/imgs/vs.svg" alt="VS" class="w-[15px] mr-[5px]" />
          <div class="flex items-center">
            <img
              :src="require(`../assets/imgs/${avatar2}`)"
              alt="Pakishtan"
              class="w-[15px] mr-[5px]"
            />
            <span>{{ country2 }}</span>
          </div>
        </div>
        <span class="text-muted">{{ mutedText }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex mr-5">
        <img
          src="../assets/imgs/play.svg"
          alt="Play"
          class="w-[15px] mr-[10px] cursor-pointer"
        />
        <img src="../assets/imgs/chart.svg" alt="Chart" class="w-[15px] cursor-pointer" />
      </div>
      <div class="flex">
        <PointCard
          v-for="(point, key) in points"
          :key="key"
          :flag="point[2]"
          :rightFlag="key == points.length - 1 ? false : true"
          :val1="point[0]"
          :val2="point[1]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PointCard from './PointCard.vue'
export default {
  name: "match-row-component",
  components: {
    PointCard,
  },
  props: {
    bottomFlag: Boolean,
    isPlaying: Boolean,
    date: String,
    time: String,
    avatar1: String,
    country1: String,
    avatar2: String,
    country2: String,
    muteText: String,
    points: Array
  },
}
</script>