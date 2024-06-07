<script>
export default {
  data() {
    return {
      activeIndex: null,
      items: [
        {
          title: "How much time does it take ?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        { title: "What is your class naming convention ?", content: "hello2" },
        { title: "How do we communicate ?", content: "hello3" },
        {
          title: "I have a bigger project. Can you handle it ?",
          content: "hello4",
        },
        { title: "What is your class naming convention ?", content: "hello5" },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<template>
  <div class="md:px-40 py-32 text-[#282938] font-poppins">
    <div class="container flex">
      <div class="left md:w-1/3">
        <p class="text-5xl font-semibold mb-4">Frequently asked questions</p>
        <router-link
          to="/contact"
          class="hover:text-white no-underline text-lg text-[#2405F2]"
          >Contact us For More Info</router-link
        >
      </div>
      <div class="right md:w-2/3 roun">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="border-b border-gray-200"
        >
          <button
            @click="toggle(index)"
            class="w-full flex justify-between items-center py-4 md:px-6"
          >
            <span>
              <span class="text-[#2405F2] font-normal">0{{ index + 1 }}. </span>
              {{ item.title }}</span
            >
            <span>{{ activeIndex === index ? "-" : "+" }}</span>
          </button>
          <div v-if="activeIndex === index" class="px-6 py-4">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  background-color: #f3f4f6;
}
button:focus {
  outline: none;
}
</style>
