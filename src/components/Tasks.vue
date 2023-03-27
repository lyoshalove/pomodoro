<script lang="ts" setup>
import { defineProps } from "vue";
import TasksItem from "@/components/TasksItem.vue";
import { ITask } from "@/types";
import { tasksStore, isEditingStore } from "@/store";
import { nanoid } from "nanoid";
import { storeToRefs } from "pinia";

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
  <div class="home__inner page">
    <h2 class="home__subtitle">Все задачи</h2>
    <TransitionGroup mode="out-in" name="task" tag="ul" class="tasks__list">
      <TasksItem
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :name="task.name"
      />
    </TransitionGroup>
    <button
      @click="() => addNewTask()"
      class="tasks__button btn"
      :disabled="isEditing"
    >
      + Новая задача
    </button>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.home
  &__inner
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center

.tasks
  &__list
    max-width: 500px
    width: 100%
    margin: 25px auto
    max-height: calc(100vh - 300px)
    min-height: 300px
    overflow: hidden auto
    padding: 0 5px 0 0
  &__button
    margin: auto auto 0

.task
  &-move,
  &-enter-active,
  &-leave-active
    transition: .5s
  &-enter-from
    transform: translate(-30px, 0)
    opacity: 0
  &-leave-to
    transform: translate(30px, 0)
    opacity: 0

@media(max-width: 480px)
  .tasks
    &__list
      max-height: calc(100vh - 245px)
      margin: 15px auto
</style>
