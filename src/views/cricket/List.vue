<template>
  <div>
    <div class="flex h-10 items-center justify-start rounded-[5px] bg-warning px-[10px] mb-[10px]">
      <div class="flex font-bold text-xs text-header-bg">
        <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px]">
          <img src="../../assets/imgs/live.svg" alt="Live" class="h-[15px] mr-[10px]">
          <span>L I V E</span>
        </div>
        <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px] bg-header-bg">
          <img src="../../assets/imgs/cricket.svg" alt="cricket" class="h-[15px] mr-[10px]">
          <span class="text-warning">C R I C K E T</span>
        </div>
        <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px]">
          <img src="../../assets/imgs/soccer.svg" alt="Live" class="h-[15px] mr-[10px]">
          <span>S O C C E R</span>
        </div>
        <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px]">
          <img src="../../assets/imgs/tennis.svg" alt="Live" class="h-[15px] mr-[10px]">
          <span>T E N N I S</span>
        </div>
        <div class="flex justify-start w-40 px-4 py-[6px] mr-[5px] rounded-[7px]">
          <img src="../../assets/imgs/badminton.svg" alt="Live" class="h-[15px] mr-[10px]">
          <span>B A D M I N T O N</span>
        </div>
      </div>
    </div>
    <div class="px-3 py-[10px] bg-warning border border-square-border rounded-[10px]">
      <div class="flex justify-between">
        <div class="flex">
          <img src="../../assets/imgs/cricket.svg" alt="cricket" class="brightness-0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cricket-list-view"
}
</script>