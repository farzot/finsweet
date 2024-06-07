<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function isActive(path) {
  return route.path === path;
}
</script>

<template>
  <div class="bg-[#1C1E53] py-[30px]">
    <div class="container flex justify-between items-center md:px-40">
      <p class="text-3xl text-white">{Finsweet</p>
      <div class="hidden md:flex font-semibold text-white gap-6 items-center">
        
        <a
          href="/"
          :class="[
            { 'opacity-100': isActive('/') },
            {
              'opacity-50 hover:opacity-100 transition duration-300':
                !isActive('/'),
            },
            'text-base font-semibold m-6 group relative w-max',
          ]"
        >
          <span>Home</span>
          <span
            class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
          <span
            class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
        </a>

        <a
          href="/about"
          :class="[
            { 'opacity-100': isActive('/about') },
            {
              'opacity-50 hover:opacity-100 transition duration-300':
                !isActive('/about'),
            },
            'text-base font-semibold m-6 group relative w-max',
          ]"
        >
          <span>About us</span>
          <span
            class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
          <span
            class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
        </a>
        <a
          href="/pricing"
          :class="[
            { 'opacity-100': isActive('/pricing') },
            {
              'opacity-50 hover:opacity-100 transition duration-300':
                !isActive('/pricing'),
            },
            'text-base font-semibold m-6 group relative w-max',
          ]"
        >
          <span>Pricing</span>
          <span
            class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
          <span
            class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
        </a>
        <a
          href="/work"
          :class="[
            { 'opacity-100': isActive('/work') },
            {
              'opacity-50 hover:opacity-100 transition duration-300':
                !isActive('/work'),
            },
            'text-base font-semibold m-6 group relative w-max',
          ]"
        >
          <span>Work</span>
          <span
            class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
          <span
            class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
        </a>
        <a
          href="/blog"
          :class="[
            { 'opacity-100': isActive('/blog') },
            {
              'opacity-50 hover:opacity-100 transition duration-300':
                !isActive('/blog'),
            },
            'text-base font-semibold m-6 group relative w-max',
          ]"
        >
          <span>Blog</span>
          <span
            class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
          <span
            class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
          ></span>
        </a>
        <button
          class="border border-[#F4F6FC33] rounded-[40px] px-8 py-3 hover:bg-white hover:text-[#1C1E53] hover:duration-500"
        >
          <a href="/contact">Contact Us</a>
        </button>
      </div>
      <button class="md:hidden text-white" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="md:hidden flex flex-col items-center text-white mt-4"
    >
      <a
        href="/"
        :class="[
          { 'opacity-100': isActive('/') },
          {
            'opacity-50 hover:opacity-100 transition duration-300':
              !isActive('/'),
          },
          'text-base font-semibold my-2',
        ]"
      >
        Home
      </a>
      <a
        href="/about"
        :class="[
          { 'opacity-100': isActive('/about') },
          {
            'opacity-50 hover:opacity-100 transition duration-300':
              !isActive('/about'),
          },
          'text-base font-semibold my-2',
        ]"
      >
        About us
      </a>
      <a
        href="/pricing"
        :class="[
          { 'opacity-100': isActive('/pricing') },
          {
            'opacity-50 hover:opacity-100 transition duration-300':
              !isActive('/pricing'),
          },
          'text-base font-semibold my-2',
        ]"
      >
        Pricing
      </a>
      <a
        href="/work"
        :class="[
          { 'opacity-100': isActive('/work') },
          {
            'opacity-50 hover:opacity-100 transition duration-300':
              !isActive('/work'),
          },
          'text-base font-semibold my-2',
        ]"
      >
        Work
      </a>
      <a
        href="/blog"
        :class="[
          { 'opacity-100': isActive('/blog') },
          {
            'opacity-50 hover:opacity-100 transition duration-300':
              !isActive('/blog'),
          },
          'text-base font-semibold my-2',
        ]"
      >
        Blog
      </a>
      <a
        href="/contact"
        class="border border-[#F4F6FC33] rounded-[40px] px-8 py-3 mt-2 hover:bg-white hover:text-[#1C1E53] hover:duration-500"
      >
        Contact Us
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
