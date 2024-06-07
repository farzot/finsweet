<template>
  <div class="shadow-md py-12 md:py-32 px-6 md:px-40 text-[#282938] font-poppins">
    <div class="container flex flex-col md:flex-row gap-6 md:gap-x-28">
      <div class="left block w-full md:w-1/3 p-0">
        <p class="text-2xl md:text-4xl font-semibold text-start w-full md:w-2/3">
          What our clients say about us
        </p>
        <p class="opacity-70 font-normal text-sm md:text-base mt-2 md:mt-4 w-full md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </p>
      </div>
      <div class="right w-full md:w-2/3">
        <p class="text-xl md:text-3xl font-medium mb-6 md:mb-12">
          "The best agency we’ve worked with so far. They understand our product
          and are able to add new features with a great focus."
        </p>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center cursor-pointer hover:scale-105 transition duration-100 mb-4 md:mb-0">
            <img
              class="w-10 md:w-12 rounded-full"
              src="../../../public/img/image.png"
              alt="#"
            />
            <div class="block ml-2 md:ml-3">
              <p class="font-normal text-base md:text-lg">Jenny Wilson</p>
              <p class="text-xs md:text-sm">Vice President</p>
            </div>
          </div>
          <div class="flex items-center">
            <router-link
              to="/pricing"
              class="hover:text-orange-700 ml-2 md:ml-3 cursor-pointer"
            >
              <img class="w-10 md:w-12 h-10 md:h-12" src="../../../public/img/arrow1.png" alt="" />
            </router-link>
            <router-link
              to="/about"
              class="hover:text-orange-700 ml-2 md:ml-3 cursor-pointer"
            >
              <img class="w-10 md:w-12 h-10 md:h-12" src="../../../public/img/arrow2.png" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hover\:scale-105:hover {
  transform: scale(1.55);
}
</style>
