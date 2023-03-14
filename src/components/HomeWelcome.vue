<script lang="ts" setup>
import { defineEmits } from "vue";

const emits = defineEmits(['newTask']);
</script>

<template>
  <h1 class="home__title">Будь продуктивнее, короче</h1>
  <p class="home__description">Создай новую задачу и оставайся в фокусе!</p>
  <button class="home__btn btn" @click="emits('newTask')">+ Новая задача</button>
</template>

<style lang="sass" scoped>
@import @styles/vars

.home
  &__description
    margin: 10px 0 20px
    font-size: 22px
</style>
