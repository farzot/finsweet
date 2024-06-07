<!-- <template>
  <div class="pl-40 pr-48 pb-32 text-[#282938]">
    <div class="container bg-gray-150 pt-24">
      <div class="top flex ml-20 mr-24 mb-24 gap-x-10">
        <div class="top-left">
          <p class="font-semibold text-4xl">Goal focussed</p>
          <p class="text-base font-normal mt-4 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="top-right">
          <p class="font-semibold text-4xl">Continuous improvement</p>
          <p class="text-base font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="buttom hover:scale-105 transition duration-300">
        <img src="../../../public/img/aboutManPart2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style> -->


<template>
  <div class="px-4 sm:px-6 md:px-8 pb-8 text-[#282938]">
    <div class="container bg-gray-150 pt-12 sm:pt-24">
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-10">
        <div class="top-left sm:w-1/2">
          <p class="font-semibold text-2xl sm:text-4xl">Goal Focused</p>
          <p class="text-sm sm:text-base font-normal mt-2 sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="top-right sm:w-1/2">
          <p class="font-semibold text-2xl sm:text-4xl">Continuous Improvement</p>
          <p class="text-sm sm:text-base font-normal mt-2 sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="mt-8 sm:mt-12 flex justify-center">
        <img class="w-full max-w-lg mx-auto sm:max-w-none" src="../../../public/img/aboutManPart2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  max-width: 1200px; // Adjust as needed
  margin: 0 auto;
}

.top-left, .top-right {
  text-align: center; // Center align text on small screens
}

.top-left p, .top-right p {
  text-align: justify; // Justify text on small screens
}

@media screen and (min-width: 640px) {
  .top-left, .top-right {
    text-align: left; // Align text to left on medium screens and above
  }

  .top-left p, .top-right p {
    text-align: start; // Align text to start on medium screens and above
  }
}
</style>
