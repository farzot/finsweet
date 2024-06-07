<!-- <script setup>
import { ref } from "vue";
const items = ref([
  {
    id: 1,
    icon: "../../../public/img/home-icon1.png",
    name: "Uses Client First",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 2,
    icon: "../../../public/img/home-icon2.png",
    name: "Two Free Revision Round",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 3,
    icon: "../../../public/img/home-icon3.png",
    name: "Template Customization",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 4,
    icon: "../../../public/img/home-icon4.png",
    name: "24/7 Support",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 5,
    icon: "../../../public/img/home-icon5.png",
    name: "Quick Delivery",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 6,
    icon: "../../../public/img/home-icon6.png",
    name: "Hands-on approach",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
]);
</script>

<template>
  <div class="shadow-md py-16 bg-[#F4F6FC] mt-32">
    <div class="container block items-center">
      <div class="top block items-center px-60">
        <p
          class="text-[#282938] text-center font-poppins text-base font-medium"
        >
          Features
        </p>

        <p
          class="font-semibold text-5xl font-poppins text-center w-3/5 mt-3 ml-48"
        >
          Design that solves problems, one product at a time
        </p>
      </div>

      <div class="bottum px-40">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
          <div
            v-for="item in items"
            :key="item.id"
            class="bg-white py-12 pl-12 pr-10 cursor-pointer rounded shadow hover:scale-105 transition duration-300 hover:bg-blue-100"
          >
            <div class="block items-center space-x-4">
              <img :src="item.icon" alt="icon" class="w-9 h-9 ml-4" />
              <div class="mt-6">
                <h2 class="text-xl font-bold mb-3">{{ item.name }}</h2>
                <p class="text-gray-600">{{ items[0].description }}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>

 -->


 <script setup>
import { ref } from "vue";
const items = ref([
  {
    id: 1,
    icon: "../../../public/img/home-icon1.png",
    name: "Uses Client First",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 2,
    icon: "../../../public/img/home-icon2.png",
    name: "Two Free Revision Round",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 3,
    icon: "../../../public/img/home-icon3.png",
    name: "Template Customization",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 4,
    icon: "../../../public/img/home-icon4.png",
    name: "24/7 Support",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 5,
    icon: "../../../public/img/home-icon5.png",
    name: "Quick Delivery",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 6,
    icon: "../../../public/img/home-icon6.png",
    name: "Hands-on approach",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
]);
</script>

<template>
  <div class="shadow-md py-16 bg-[#F4F6FC] mt-32">
    <div class="container block items-center">
      <div class="top block items-center px-6 md:px-60">
        <p
          class="text-[#282938] text-center font-poppins text-base font-medium"
        >
          Features
        </p>

        <p
          class="font-semibold md:w-3/5 text-3xl md:text-5xl font-poppins text-center  mt-3 md:ml-48"
        >
          Design that solves problems, one product at a time
        </p>
      </div>

      <div class="bottum px-6 md:px-40">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
          <div
            v-for="item in items"
            :key="item.id"
            class="bg-white py-8 md:py-12 pl-6 md:pl-12 pr-6 md:pr-10 cursor-pointer rounded shadow hover:scale-105 transition duration-300 hover:bg-blue-100"
          >
            <div class="block md:block items-center space-x-4">
              <img :src="item.icon" alt="icon" class="w-9 h-9 md:w-12 md:h-12 ml-4" />
              <div class="mt-4 md:mt-0">
                <h2 class="text-lg md:text-xl font-bold mb-2">{{ item.name }}</h2>
                <p class="text-gray-600 text-sm md:text-base">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
