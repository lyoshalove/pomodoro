<script lang="ts" setup>
import logo from "@images/logo.svg";
import { headerMenu } from "@/constants";
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
          <li
            class="header__menu-item"
            v-for="menuItem in headerMenu"
            :key="menuItem.id"
          >
            <RouterLink :to="menuItem.to">
              <img
                v-if="menuItem.icon"
                class="header__menu-icon"
                :src="menuItem.icon"
                :alt="menuItem.text"
              />
              <span v-else class="header__menu-description">{{
                menuItem.text
              }}</span>
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
    &-icon
      width: 25px
</style>
