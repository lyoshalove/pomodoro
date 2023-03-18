<script lang="ts" setup>
const emits = defineEmits(["newTask"]);
</script>

<template>
  <div class="home__inner page">
    <h1 class="home__title">Будь продуктивнее, короче</h1>
    <p class="home__description">Создай новую задачу и оставайся в фокусе!</p>
    <button class="home__btn btn" @click="() => emits('newTask')">
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
    text-align: center
  &__description
    margin: 10px 0 20px
    font-size: 18px

@media(max-width: 480px)
  .home
    &__description
      font-size: 16px
      margin: 10px 0 15px
</style>
