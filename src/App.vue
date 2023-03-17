<script setup lang="ts">
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
import Playlist from "./components/Playlist.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Playlist />
</template>
