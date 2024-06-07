<!-- <script>
export default {};
</script>

<template>
  <div class="shadow-md py-32 bg-indigo-900">
    <div class="container flex justify-between items-center gap-7">
      <div class="left w-1/2 ml-40">
        <div class="top block">
          <p class="font-semibold text-6xl text-white w-5/6">
            Building stellar websites for early startups
          </p>
          <p class="text-base text-white opacity-70 font-medium w-5/6 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div class="buttom flex mt-16 space-x-10">
          <router-link to="/work">
            <button
              class="bg-[#FCD980] text-[#1B1C2B] text-lg px-12 py-4 rounded-full hover:scale-105 transition duration-300"
            >
              View our work
            </button>
          </router-link>

          <router-link
            to="/pricing"
            class="text-white hover:text-black mt-4 hover:scale-105 transition duration-300"
            >View Pricing →</router-link
          >
        </div>
      </div>

      <div class="right w-1/2 mr-40 hover:scale-105 transition duration-300">
        <img src="../../../public/img/Illustration (1).svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style> -->

<script>
export default {};
</script>

<template>
  <div class="shadow-md py-16 md:py-32 bg-[#1C1E53]">
    <div class="container flex flex-col md:flex-row justify-between items-center gap-7 px-6 md:px-0">
      <div class="left w-full md:w-1/2 md:ml-40">
        <div class="top block">
          <p class="font-semibold text-3xl md:text-6xl text-white md:w-5/6">
            Building stellar websites for early startups
          </p>
          <p class="text-base text-white opacity-70 font-medium md:w-5/6 mt-4 md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div class="buttom md:flex flex-col md:flex-row mt-8 md:mt-16 space-y-4  md:space-x-10 space-x-4">
          <router-link to="/work">
            <button
              class="bg-[#FCD980] text-[#1B1C2B] text-lg px-8 py-3 md:px-12 md:py-4 rounded-full hover:scale-105 transition duration-300"
            >
              View our work
            </button>
          </router-link>

          <router-link
            to="/pricing"
            class="text-white hover:text-black mt-4 md:mt-0 hover:scale-105 transition duration-300"
            >View Pricing →</router-link
          >
        </div>
      </div>

      <div class="right w-full md:w-1/2 md:mr-40 hover:scale-105 transition duration-300 mt-8 md:mt-0">
        <img src="../../../public/img/Illustration (1).svg" alt="" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
