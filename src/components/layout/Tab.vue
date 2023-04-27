<template>
  <div
    class="flex h-10 items-center justify-start rounded-[5px] bg-warning dark:bg-header-bg px-[10px] mb-[10px]"
  >
    <div class="flex font-bold text-xs text-header-bg dark:text-white">
      <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px] cursor-pointer">
        <img
          src="../../assets/imgs/live.svg"
          alt="Live"
          class="h-[15px] mr-[10px] dark:brightness-0 dark:invert"
        />
        <span>L I V E</span>
      </div>
      <div
        class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px] cursor-pointer bg-header-bg dark:bg-warning"
      >
        <img
          src="../../assets/imgs/cricket.svg"
          alt="cricket"
          class="h-[15px] mr-[10px] dark:brightness-0"
        />
        <span class="text-warning dark:text-header-bg">C R I C K E T</span>
      </div>
      <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px] cursor-pointer">
        <img
          src="../../assets/imgs/soccer.svg"
          alt="Live"
          class="h-[15px] mr-[10px] dark:brightness-0 dark:invert"
        />
        <span>S O C C E R</span>
      </div>
      <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px] cursor-pointer">
        <img
          src="../../assets/imgs/tennis.svg"
          alt="Live"
          class="h-[15px] mr-[10px] dark:brightness-0 dark:invert"
        />
        <span>T E N N I S</span>
      </div>
      <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px] cursor-pointer">
        <img
          src="../../assets/imgs/badminton.svg"
          alt="Live"
          class="h-[15px] mr-[10px] dark:brightness-0 dark:invert"
        />
        <span>B A D M I N T O N</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-component'
}
</script>