<template>
  <div>
    <div
      class="flex flex-col justify-center w-[100px] h-[41px] border rounded-[5px]"
      :class="{
        'bg-blue-bg border-blue': flag,
        'bg-pink-bg border-pink': !flag,
        'mr-[7px]': rightFlag
      }"
    >
      <span class="font-bold">{{ val1 }}</span>
      <span class="text-[10px] leading-[14px]">{{ val2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "point-card-component",
  props: {
    flag: Boolean,
    rightFlag: Boolean,
    val1: String,
    val2: String
  }
}
</script>