<script lang="ts" setup>
import pencil from "@images/pencil.svg";
import checkMark from "@images/check-mark.svg";
import trash from "@images/trash.svg";
import { defineProps, ref, VNodeRef, nextTick } from "vue";
import { tasksStore, isEditingStore } from "@/store";
import { useRouter } from "vue-router";
import { setCharsCount, sliceText } from "@/helpers";

interface IProps {
  id: string;
  name: string;
}

const props = defineProps<IProps>();
const isEditing = ref<boolean>(false);
const newName = ref<string>(props.name);
const store = tasksStore();
const inputRef = ref<VNodeRef | null>(null);
const router = useRouter();
const charsCount = ref<number>(setCharsCount(document.body.getBoundingClientRect().width));
const editingStore = isEditingStore();

const updateTaskName = (newName: string, id: string) =>
  store.updateName(newName, id);

const deleteTask = (id: string) => {
  if (!isEditing.value) {
    store.deleteTask(id);
  }
};

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
    updateTaskName(newName.value.trim(), props.id);
  }
};

const goToTimer = (id: string) => {
  if (!isEditing.value) {
    router.push(`/timer/${id}`);
  }
};
</script>

<template>
  <li class="tasks__item" @click="() => goToTimer(id)">
    <div class="tasks__item-left">
      <span v-if="!isEditing" class="tasks__item-name">{{
        sliceText(name, charsCount)
      }}</span>
      <input
        v-else
        ref="inputRef"
        type="text"
        v-model="newName"
        class="tasks__item-input"
        @click.stop
      />
    </div>
    <div class="tasks__item-right">
      <img
        v-if="!isEditing"
        :src="pencil"
        @click.stop="startEditing"
        alt="Изменить название"
        class="tasks__item-action tasks__item-pencil"
      />
      <img
        v-else
        :src="checkMark"
        @click.stop="endEditing"
        alt="Изменить название"
        class="tasks__item-action"
      />
      <img
        :src="trash"
        @click.stop="() => deleteTask(id)"
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
  padding: 5px 10px
  border-radius: 8px
  border: 2px solid $secondary
  &:not(:last-child)
    margin: 0 0 10px
  &-left
    display: flex
    align-items: center
    gap: 0 20px
    flex-basis: 60%
  &-right
    display: flex
    align-items: center
    gap: 0 20px
  &-input
    border-bottom: 1px solid $secondary
    flex-grow: 1
  &-action
    width: 20px
    cursor: pointer
  &-pencil
    width: 25px

@media(max-width: 480px)
  .tasks__item
    gap: 0 20px
    &-right
      gap: 0 10px
</style>
