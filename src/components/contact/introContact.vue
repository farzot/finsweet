<!-- <template>
  <div class="text-[#282938] font-poppins pt-32">
    <div class="w-1/2 mx-96">
      <h1 class="text-5xl font-semibold text-center">Contact Us</h1>
      <p class="text-center mt-4 w-3/5 ml-32">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>

    <div class="mt-16 bg-gray-200 mb-32 mx-60">
      <div class="grid grid-cols-2 gap-4 p-4">
        <div class="text-black text-2xl p-6 space-y-2">
            <p>Name</p>
            <input type="text" placeholder="Enter your name" class="py-4 pl-8 pr-24 gap-2 border-2 border-gray-400 rounded-md bg-gray-100">
        </div>
        <div class="text-black text-2xl p-6 space-y-2">
            <p>Email</p>
            <input type="email" placeholder="Enter your Email" class="py-4 pl-8 pr-24 gap-2 border-2 border-gray-400 rounded-md">
        </div>
        <div class="text-black text-2xl p-6 space-y-2">
            <p>Subject</p>
            <input type="text" placeholder="Provide context" class="py-4 pl-8 pr-24 gap-2 border-2 border-gray-400 rounded-md ">
        </div>
        <div class="text-black text-2xl p-6 space-y-2">
            <p>Subject</p>
            <input type="text" placeholder="Select Subject" class="py-4 pl-8 pr-24 gap-2 border-2 border-gray-400 rounded-md ">
        </div>
          <div class="text-black text-2xl p-6 gap-1 col-span-2 space-y-2">
            <p>Message</p>
            <textarea class="py-4 px-8 gap-2 border-2 border-gray-400 rounded-md w-full h-36 resize-none" placeholder="Write your  question here"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style> -->


<template>
  <div class="text-[rgb(40,41,56)] font-poppins pt-12 md:pt-32 md:mx-72">
    <div class="w-full md:w-1/2 mx-auto px-4 md:px-0">
      <h1 class="text-3xl md:text-5xl font-semibold text-center">Contact Us</h1>
      <p class="text-center mt-4 md:mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
    </div>

    <div class="container mt-8 md:mt-16 bg-gray-200 mb-32  md:mx-4">
      <div class="md:grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div class="text-black text-xl md:text-2xl p-2 md:p-6 space-y-2">
          <p>Name</p>
          <input type="text" placeholder="Enter your name" class="py-3 md:py-4 pl-4 md:pl-8 pr-4 md:pr-24 gap-2 border-2 border-gray-400 rounded-md bg-gray-100 w-full">
        </div>
        <div class="text-black text-xl md:text-2xl p-2 md:p-6 space-y-2">
          <p>Email</p>
          <input type="email" placeholder="Enter your Email" class="py-3 md:py-4 pl-4 md:pl-8 pr-4 md:pr-24 gap-2 border-2 border-gray-400 rounded-md w-full">
        </div>
        <div class="text-black text-xl md:text-2xl p-2 md:p-6 space-y-2">
          <p>Subject</p>
          <input type="text" placeholder="Provide context" class="py-3 md:py-4 pl-4 md:pl-8 pr-4 md:pr-24 gap-2 border-2 border-gray-400 rounded-md w-full">
        </div>
        <div class="text-black text-xl md:text-2xl p-2 md:p-6 space-y-2">
          <p>Subject</p>
          <input type="text" placeholder="Select Subject" class="py-3 md:py-4 pl-4 md:pl-8 pr-4 md:pr-24 gap-2 border-2 border-gray-400 rounded-md w-full">
        </div>
        <div class="text-black text-xl md:text-2xl p-2 md:p-6 space-y-2 col-span-2">
          <p>Message</p>
          <textarea class="py-3 md:py-4 px-4 md:px-8 gap-2 border-2 border-gray-400 rounded-md w-full h-36 resize-none" placeholder="Write your question here"></textarea>
          <button class="flex justify-start bg-[#282938] rounded-full text-white py-4 px-12">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @media (min-width: 640px) {
    .text-xl {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 768px) {
    .text-2xl {
      font-size: 1.5rem;
    }
  }
</style>
