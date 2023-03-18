<script lang="ts" setup>
import { ref } from "vue";
import { isVisibleModalStore } from "@/store";
import logo from "@images/logo.svg";
import Burger from "./Burger.vue";
import { bodyOverflow } from "@/helpers";

const store = isVisibleModalStore();
const activeBurger = ref<boolean>(false);
const { addOverflowHiddenToBody, removeOverflowHiddenToBody } = bodyOverflow();

const toggleActiveBurger = () => {
  if (activeBurger.value === true) {
    activeBurger.value = false;
    removeOverflowHiddenToBody();
  } else {
    activeBurger.value = true;
    addOverflowHiddenToBody();
  }
};
const logoHandle = () => {
  if (activeBurger.value) {
    toggleActiveBurger();
  }
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <RouterLink to="/" @click="logoHandle" class="header__logo">
          <img :src="logo" alt="Логотип" class="header__logo-icon" />
          <span class="header__logo-text">Помидорка</span>
        </RouterLink>
        <ul class="header__menu">
          <li class="header__menu-item">
            <RouterLink to="/about">В чем прикол?</RouterLink>
          </li>
          <li class="header__menu-item">
            <button @click="() => store.showModal()">Плэйлист</button>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/settings"> Настройки </RouterLink>
          </li>
        </ul>
        <Burger :value="activeBurger" @toggle-burger="toggleActiveBurger" />
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@import @styles/vars

.header
  background-color: $primary
  &__inner
    padding: 10px 0
    display: flex
    align-items: center
    justify-content: space-between
  &__logo
    display: flex
    align-items: center
    gap: 0 10px
    margin: 0 70px 0 0
    &-icon
      width: 40px
    &-text
      font-size: 20px
      font-weight: bold
  &__menu
    display: flex
    align-items: center
    gap: 0 25px
    &-item
      display: flex
      align-items: center
      position: relative
      &::before
        content: ''
        position: absolute
        inset: auto 0 -4px auto
        width: 0
        height: 2px
        border-radius: 4px
        background-color: $secondary
        transition: .3s
      &:hover
        &::before
          width: 100%
          inset: auto auto -4px 0
    &-icon
      width: 24px

@media (max-width: 768px)
  .header
    &__inner
      padding: 5px 0
    &__menu
      display: none
</style>
