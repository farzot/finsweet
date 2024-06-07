<script setup>
import { reactive } from "vue";

const people = reactive([
  {
    name: "John Smith",
    job: "CEO",
    img: [
    "../../../public/img/facebook.png",
      "../../../public/img/twitter.png",
      "../../../public/img/linkedin.png",
      "../../../public/img/about-john.png",
    ],
  },
  {
    name: "Simon Adams",
    job: "CEO",
    img: [
      "../../../public/img/facebook.png",
      "../../../public/img/twitter.png",
      "../../../public/img/linkedin.png",
      "../../../public/img/aboutPart3Man2.png",
    ],
  },
  {
    name: "Paul Jones",
    job: "Design Lead",
    img: [
     "../../../public/img/facebook.png",
      "../../../public/img/twitter.png",
      "../../../public/img/linkedin.png",
      "../../../public/img/aboutpart3Man3.png",
    ],
  },
  {
    name: "Sara Hardin",
    job: "Project Manager",
    img: [
      "../../../public/img/facebook.png",
      "../../../public/img/twitter.png",
      "../../../public/img/linkedin.png",
      "../../../public/img/aboutPart3Girl4.png",
    ],
  },
]);
</script>

<template>
  <div class="bg-[#F4F6FC]">
    <div class="container mx-auto px-4">
      <div>
        <h2
          class="leading-[40px] md:leading-[64px] text-[28px] md:text-[48px] font-bold text-center mb-[24px] md:mb-[48px] pt-[64px] md:pt-[128px]"
        >
          Meet our team
        </h2>
      </div>
      <div
        class="grid gap-7 md:grid-cols-2 lg:grid-cols-4 pb-[64px] md:pb-[128px]"
      >
        <div
          v-for="(item, index) in people"
          :key="index"
          class="bg-white group hover:shadow-md py-[20px] md:py-[30px] mb-5"
        >
          <div
            class="relative w-[120px] md:w-[168px] h-[120px] md:h-[168px] mx-auto rounded-full overflow-hidden"
          >
            <div
              class="absolute left-0 -bottom-full duration-500 group-hover:bottom-0 w-full h-full bg-violet-500 bg-opacity-50"
            >
              <div class="flex h-full justify-center items-end">
                <div class="flex gap-3 pb-5">
                  <a href="https://www.facebook.com">
                    <img
                      :src="item.img[0]"
                      alt="Facebook"
                      class="w-6 h-6 md:w-8 md:h-8"
                    />
                  </a>
                  <a href="https://x.com">
                    <img
                      :src="item.img[1]"
                      alt="Twitter"
                      class="w-6 h-6 md:w-8 md:h-8"
                    />
                  </a>
                  <a href="https://www.linkedin.com">
                    <img
                      :src="item.img[2]"
                      alt="LinkedIn"
                      class="w-6 h-6 md:w-8 md:h-8"
                    />
                  </a>
                </div>
              </div>
            </div>
            <img :src="item.img[3]" alt="radius" class="w-full h-full" />
          </div>
          <p
            class="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-medium mt-[20px] md:mt-[30px] text-center"
          >
            {{ item.name }}
          </p>
          <p class="text-center text-[14px] md:text-[16px]">{{ item.job }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
