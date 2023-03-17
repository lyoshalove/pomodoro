<script lang="ts" setup>
import { isVisibleModalStore } from "@/store";
import logo from "@images/logo.svg";
import playlist from "@images/playlist.svg";
import settings from "@images/settings.svg";

const store = isVisibleModalStore();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <RouterLink to="/" class="header__logo">
          <img :src="logo" alt="Логотип" class="header__logo-icon" />
          <span class="header__logo-text">Помидорка</span>
        </RouterLink>
        <ul class="header__menu">
          <li class="header__menu-item">
            <RouterLink to="/about">
              В чем прикол?
            </RouterLink>
          </li>
          <li class="header__menu-item">
            <button @click="() => store.showModal()">
              <img class="header__menu-icon" :src="playlist" alt="Плэйлист" />
            </button>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/settings">
              <img class="header__menu-icon" :src="settings" alt="Настройки" />
            </RouterLink>
          </li>
        </ul>
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
    &-icon
      width: 24px
</style>
