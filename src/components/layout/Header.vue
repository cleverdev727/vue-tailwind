<template>
  <div class="bg-header-bg h-[65px] flex justify-end pl-24 pr-10">
    <div class="flex items-center font-semibold text-[15px] leading-5 text-warning">
      <div class="flex justify-center items-center border border-warning rounded-md px-5 py-[10px] mr-5">
        <img src="../../assets/imgs/wallet.svg" alt="wallet" class="w-[22px] mr-[10px]">
        <span>₹1503.46</span>
      </div>
      <div class="flex border border-warning rounded-md px-5 py-[10px] mr-5">
        <span>MY BETS</span>
      </div>
      <div class="flex border border-warning rounded-md px-5 py-[10px] mr-5">
        <img src="../../assets/imgs/refresh.svg" alt="refresh" class="w-[22px]">
      </div>
      <div class="flex bg-warning rounded-md px-5 py-[10px]">
        <img src="../../assets/imgs/moon.svg" alt="moon" class="w-[22px]">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component"
}
</script>