<!-- <template>
  <div class="shadow-md p-12 pb-32 px-40 text-[#282938]">
    <div class="container block">
      <div class="flex justify-between">
        <p class="text-5xl font-semibold mb-16">View our projects</p>

        <router-link to="/work" class="hover:text-orange-700 mt-4"
          >View More →</router-link
        >
      </div>
      <div class="grid grid-cols-3 gap-5">
        <div class="col-span-2 row-span-2 relative overflow-hidden group">
          <div
            class="w-[50%] absolute top-0 duration:300 group-hover:left-0 -left-full h-full bg-gradient-to-r from-[#1C1E536B]/40 to-[#1c1e53] pl-12"
          >
            <div class="mt-80 items-center text-start mb-10">
              <p
                class="font-semibold text-2xl font-poppins text-[#FFFFFF] mb-2"
              >
                Workhub office Webflow Webflow Design
              </p>
              <p class="font-normal opacity-80 text-base text-[#FFFFFF] mt-2">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
            </div>

            <router-link
              to="/pricing"
              class="text-[#FCD980] hover:text-[#282938] mt-4"
              >View project →</router-link
            >
          </div>
          <img
            class="w-full h-full"
            src="../../../public/img/home-view-1.png"
            alt=""
          />
        </div>

        <div class="relative overflow-hidden group">
          <div
            class="w-[100%] absolute top-0 duration:300 group-hover:left-0 -left-full h-full bg-gradient-to-r from-[#1C1E536B]/40 to-[#1c1e53]"
          >
            <h1>Lorem, impus dolor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              distinctio inventore aut?
            </p>
          </div>
          <img
            class="w-full h-full"
            src="../../../public/img/home-view2.png"
            alt=""
          />
        </div>
        <div class="">
          <img
            class="w-full h-full"
            src="../../../public/img/home-view-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style> -->

<template>
  <div class="shadow-md p-12 pb-32 px-6 md:px-40 text-[#282938]">
    <div class="container block">
      <div class="flex flex-col md:flex-row justify-between">
        <p class="text-3xl md:text-5xl font-semibold mb-8 md:mb-16">
          View our projects
        </p>
        <router-link to="/work" class="hover:text-orange-700 mt-4 md:mt-0"
          >View More →</router-link
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          class="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden group"
        >
          <div
            class="w-[50%] absolute top-0 duration-300 group-hover:left-0 -left-full h-full bg-gradient-to-r from-[#1C1E536B]/40 to-[#1c1e53] pl-12"
          >
            <div class="mt-40 md:mt-80 items-center text-start mb-10">
              <p
                class="font-semibold text-xl md:text-2xl font-poppins text-[#FFFFFF] mb-2"
              >
                Workhub office Webflow Webflow Design
              </p>
              <p
                class="font-normal opacity-80 text-sm md:text-base text-[#FFFFFF] mt-2"
              >
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
            </div>
            <router-link
              to="/pricing"
              class="text-[#FCD980] hover:text-[#282938] mt-4"
              >View project →</router-link
            >
          </div>
          <img
            class="w-full h-full"
            src="../../../public/img/home-view-1.png"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden group">
          <div
            class="w-full absolute top-0 duration-300 group-hover:left-0 -left-full h-full bg-gradient-to-r from-[#1C1E536B]/40 to-[#1c1e53] p-4 md:p-0"
          >
            <h1 class="text-white text-lg md:text-xl font-semibold">
              Lorem, impus dolor
            </h1>
            <p class="text-white text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              distinctio inventore aut?
            </p>
          </div>
          <img
            class="w-full h-full"
            src="../../../public/img/home-view2.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="w-full h-full"
            src="../../../public/img/home-view-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
