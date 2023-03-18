<script lang="ts" setup>
import HomeWelcome from "@/components/HomeWelcome.vue";
import Tasks from "@/components/Tasks.vue";
import { storeToRefs } from "pinia";
import { settingsStore, tasksStore } from "@/store";
import { nanoid } from "nanoid";
import { onMounted } from "vue";

const store = tasksStore();
const { tasks } = storeToRefs(store);
const settings = settingsStore();
const initStore = () =>
  store.setNewTasks({ id: nanoid(), name: "Безымянная задача" });

onMounted(() => settings.addSettingsToLocalStorage());
</script>

<template>
  <div class="home">
    <div class="container">
      <HomeWelcome v-if="!tasks.length" @newTask="initStore" />
      <Tasks :tasks="tasks" v-else />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.home
  background-color: $primary
  &__subtitle
    font-size: 28px
</style>
