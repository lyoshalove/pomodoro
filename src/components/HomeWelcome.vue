<script lang="ts" setup>
const emits = defineEmits(["newTask"]);
</script>

<template>
  <div class="home__inner page">
    <h1 class="home__title">Будь продуктивнее, короче</h1>
    <p class="home__description">Создай новую задачу и оставайся в фокусе!</p>
    <button class="home__btn btn" @click="emits('newTask')">
      + Новая задача
    </button>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.home
  &__inner
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  &__description
    margin: 10px 0 20px
    font-size: 22px
</style>
