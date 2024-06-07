<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-gray-100">
    <Navbar />
    <RouterView />
    <Footer />
  </div>

  <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink> -->

  <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/pricing">Pricing</router-link> -->

  <!-- <router-view></router-view> -->
</template>

<style scoped></style>
