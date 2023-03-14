<script lang="ts" setup>
import { defineProps } from "vue";
import TasksItem from "@/components/TasksItem.vue";
import { ITask } from "@/types";
import { tasksStore } from "@/store/tasks";
import { nanoid } from "nanoid";
import { storeToRefs } from "pinia";
import { isEditingStore } from "@/store/isEditing";

interface IProps {
  tasks: ITask[];
}

const store = tasksStore();
const { isEditing } = storeToRefs(isEditingStore());
const { tasks } = storeToRefs(store);
const addNewTask = () =>
  store.setNewTasks({ id: nanoid(), name: "Безымянная задача" });

defineProps<IProps>();
</script>

<template>
  <h2 class="home__subtitle">Все задачи</h2>
  <ul class="tasks__list">
    <TasksItem
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :name="task.name"
    />
  </ul>
  <button @click="() => addNewTask()" class="tasks__button btn" :disabled="isEditing">
    + Новая задачу
  </button>
</template>

<style lang="sass" scoped>
@import @styles/vars

.tasks
  &__list
    max-width: 500px
    width: 100%
    margin: 25px auto
    max-height: 400px
    overflow: hidden
    overflow-y: auto
</style>
