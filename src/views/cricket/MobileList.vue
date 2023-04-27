<template>
  <div>
    <div
      class="px-[2px] py-[10px] bg-warning dark:bg-header-bg border border-square-border rounded-[5px] mb-[10px]"
    >
      <div
        class="flex justify-between font-montserrat font-bold text-[8px] leading-[10px] text-header-bg dark:text-white pl-[5px] pr-[10px] pb-[5px] mx-[3px] mb-[10px] border-b border-header-bg dark:border-square-border"
      >
        <div class="flex items-center">
          <img
            src="../../assets/imgs/cricket.svg"
            alt="cricket"
            class="brightness-0 mr-[5px] h-[15px] dark:invert"
          />
          <span>CRICKET (10)</span>
        </div>
        <div class="flex items-end">
          <img
            src="../../assets/imgs/mobile-arrow-down.svg"
            alt="arrow"
            class="w-[14px] bottom-0 right-0 cursor-pointer transition dark:invert"
            :class="{
              '-rotate-90': !cricketOpen
            }"
            @click="handleClick('cricket')"
          />
        </div>
      </div>
      <div
        class="pl-[6px] font-semibold text-[8px] leading-[11px] text-center text-header-bg dark:text-white  overflow-y-hidden transition-all"
        :class="{
          'max-h-0' : !cricketOpen,
          'opacity-100 max-h-[1000px]' : cricketOpen,
        }"
      >
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-[2px] py-[10px] bg-warning dark:bg-header-bg border border-square-border rounded-[5px] mb-[10px]"
    >
      <div
        class="flex justify-between font-montserrat font-bold text-[8px] leading-[10px] text-header-bg dark:text-white pl-[5px] pr-[10px] pb-[5px] mx-[3px] mb-[10px] border-b border-header-bg dark:border-square-border"
      >
        <div class="flex items-center">
          <img
            src="../../assets/imgs/soccer.svg"
            alt="Soccer"
            class="brightness-0 mr-[5px] h-[15px] dark:invert"
          />
          <span>SOCCER (10)</span>
        </div>
        <div class="flex items-end">
          <img
            src="../../assets/imgs/mobile-arrow-down.svg"
            alt="arrow"
            class="w-[14px] bottom-0 right-0 cursor-pointer transition dark:invert"
            :class="{
              '-rotate-90': !soccerOpen
            }"
            @click="handleClick('soccer')"
          />
        </div>
      </div>
      <div
        class="pl-[6px] font-semibold text-[8px] leading-[11px] text-center text-header-bg dark:text-white  overflow-y-hidden transition-all"
        :class="{
          'max-h-0' : !soccerOpen,
          'opacity-100 max-h-[1000px]' : soccerOpen,
        }"
      >
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-[2px] py-[10px] bg-warning dark:bg-header-bg border border-square-border rounded-[5px]"
    >
      <div
        class="flex justify-between font-montserrat font-bold text-[8px] leading-[10px] text-header-bg dark:text-white pl-[5px] pr-[10px] pb-[5px] mx-[3px] mb-[10px] border-b border-header-bg dark:border-square-border"
      >
        <div class="flex items-center">
          <img
            src="../../assets/imgs/tennis.svg"
            alt="Tennis"
            class="brightness-0 mr-[5px] h-[15px] dark:invert"
          />
          <span>TENNIS (10)</span>
        </div>
        <div class="flex items-end">
          <img
            src="../../assets/imgs/mobile-arrow-down.svg"
            alt="arrow"
            class="w-[14px] bottom-0 right-0 cursor-pointer transition dark:invert"
            :class="{
              '-rotate-90': !tennisOpen
            }"
            @click="handleClick('tennis')"
          />
        </div>
      </div>
      <div
        class="pl-[6px] font-semibold text-[8px] leading-[11px] text-center text-header-bg dark:text-white  overflow-y-hidden transition-all"
        :class="{
          'max-h-0' : !tennisOpen,
          'opacity-100 max-h-[1000px]' : tennisOpen,
        }"
      >
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative flex justify-between bg-white dark:bg-dark-row-bg border border-white dark:border-dark-row-border rounded-[3px] px-[10px] py-[5px] mb-[3px]"
        >
          <div
            class="absolute flex items-center justify-center w-[29px] h-[12px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90"
          >
            <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
          </div>
          <div>
            <div class="flex mb-[5px]">
              <div class="flex items-center mr-[3px]">
                <img src="../../assets/imgs/india.svg" alt="India" class="w-[13px] mr-[3px]" />
                <span>India</span>
              </div>
              <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[13px] mr-[3px]" />
              <div class="flex items-center">
                <img src="../../assets/imgs/pakistan.svg" alt="Pakishtan" class="w-[13px] mr-[3px]" />
                <span>Pakishtan</span>
              </div>
            </div>
            <span class="text-muted">ICC World Cricket League Matches</span>
          </div>
          <div class="flex items-center">
            <div class="flex mr-[5px]">
              <img
                src="../../assets/imgs/play.svg"
                alt="Play"
                class="w-[10px] mr-[3px] cursor-pointer"
              />
              <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[10px] cursor-pointer" />
            </div>
            <div class="flex">
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-blue-bg border border-blue rounded-[5px] mr-[7px]"
              >
                <span class="font-bold">1.69</span>
                <span class="text-[6px] leading-[8px]">1.69k</span>
              </div>
              <div
                class="flex flex-col justify-center w-[47px] h-[29px] bg-pink-bg border border-pink rounded-[5px]"
              >
                <span class="font-bold">1.7</span>
                <span class="text-[6px] leading-[8px]">1.74k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-cricket-list-view",
  data: function() {
    return {
      cricketOpen: true,
      soccerOpen: true,
      tennisOpen: true
    };
  },
  methods: {
    handleClick(id) {
      id == "cricket" && (this.cricketOpen = !this.cricketOpen);
      id == "soccer" && (this.soccerOpen = !this.soccerOpen);
      id == "tennis" && (this.tennisOpen = !this.tennisOpen);
    }
  }
};
</script>