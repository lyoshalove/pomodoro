<script lang="ts" setup>
import HomeWelcome from "@/components/HomeWelcome.vue";
import Tasks from "@/components/Tasks.vue";
import { storeToRefs } from "pinia";
import { tasksStore } from "@/store/tasks";
import { nanoid } from "nanoid";

const store = tasksStore();
const { tasks } = storeToRefs(store);
const initStore = () =>
  store.setNewTasks({ id: nanoid(), name: "Безымянная задача" });
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="home__inner page">
        <HomeWelcome v-if="!tasks.length" @newTask="initStore" />
        <Tasks :tasks="tasks" v-else />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.home
  background-color: $four
  &__inner
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  &__subtitle
    font-size: 28px
</style>
