<script lang="ts" setup>
import clock from "@images/clock.svg";
import pencil from "@images/pencil.svg";
import checkMark from "@images/check-mark.svg";
import trash from "@images/trash.svg";
import { defineProps, ref, VNodeRef, nextTick } from "vue";
import { tasksStore } from "@/store/tasks";
import { isEditingStore } from "@/store/isEditing";

interface IProps {
  id: string;
  name: string;
}

const props = defineProps<IProps>();
const editingStore = isEditingStore();
const isEditing = ref<boolean>(false);
const newName = ref<string>(props.name);
const store = tasksStore();
const inputRef = ref<VNodeRef | null>(null);

const updateTaskName = (newName: string, id: string) =>
  store.updateName(newName, id);

const deleteTask = (id: string) => store.deleteTask(id);

const startEditing = () => {
  editingStore.setEditing(true);
  isEditing.value = true;
  nextTick(() => {
    inputRef.value.focus();
  });
};
const endEditing = () => {
  if (newName.value.trim().length) {
    editingStore.setEditing(false);
    isEditing.value = false;
    updateTaskName(newName.value, props.id);
  }
};
</script>

<template>
  <li class="tasks__item">
    <div class="tasks__item-left">
      <img :src="clock" alt="Иконка часов" class="tasks__item-clock" />
      <div v-if="!isEditing" class="tasks__item-name">{{ props.name }}</div>
      <input
        v-else
        ref="inputRef"
        type="text"
        v-model="newName"
        class="tasks__item-input"
      />
    </div>
    <div class="tasks__item-right">
      <img
        v-if="!isEditing"
        :src="pencil"
        @click="startEditing"
        alt="Изменить название"
        class="tasks__item-action tasks__item-pencil"
      />
      <img
        v-else
        :src="checkMark"
        @click="endEditing"
        alt="Изменить название"
        class="tasks__item-action"
      />
      <img
        :src="trash"
        @click="() => deleteTask(id)"
        alt="Удалить задачу"
        class="tasks__item-action"
      />
    </div>
  </li>
</template>

<style lang="sass" scoped>
@import @styles/vars

.tasks__item
  display: flex
  align-items: center
  justify-content: space-between
  gap: 0 50px
  padding: 10px 15px
  background-color: $primary
  border-radius: 8px
  &:not(:last-child)
    margin: 0 0 10px
  &-left
    display: flex
    align-items: center
    gap: 0 20px
    flex-grow: 1
  &-right
    display: flex
    align-items: center
    gap: 0 20px
  &-input
    border-bottom: 1px solid $secondary
    flex-grow: 1
  &-clock
    width: 30px
  &-action
    width: 25px
    cursor: pointer
  &-pencil
    width: 30px
</style>
