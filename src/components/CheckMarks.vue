<script lang="ts" setup>
import checkMarkFilled from "@images/check-mark-filled.svg";
import checkMarkLined from "@images/check-mark-lined.svg";

interface IProps {
  completedCheckMarksCount: number;
}

const checkMarksCount = 4;

defineProps<IProps>();
</script>

<template>
  <ul class="check__list">
    <li
      class="check__list-item"
      v-for="checkMark in checkMarksCount"
      :key="checkMark"
    >
      <img
        v-if="checkMark <= completedCheckMarksCount"
        :src="checkMarkFilled"
        class="check__list-icon"
        alt="Закрашенная галочка"
      />
      <img
        v-else
        :src="checkMarkLined"
        class="check__list-icon"
        alt="Незакрашенная галочка"
      />
    </li>
  </ul>
</template>

<style lang="sass" scoped>
@import @styles/vars

.check__list
  max-width: 170px
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  gap: 0 20px
  margin: 10px auto 25px
  padding: 4px 8px
  border: 2px solid $secondary
  border-radius: 20px
  &-item
    width: 24px
</style>
