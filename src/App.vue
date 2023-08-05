<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
import leftbar from "./components/leftbar.vue";
import footer1 from "./components/footer1.vue";
</script>

<template>
  <navbar />
  <router-view />
  <leftbar />
  <footer1 />
</template>

<style scoped></style>
