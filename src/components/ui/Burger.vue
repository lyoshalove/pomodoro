<script lang="ts" setup>
import { isVisibleModalStore } from "@/store";

interface IProps {
  value: boolean;
}

defineProps<IProps>();
const emits = defineEmits(["toggleBurger"]);

const store = isVisibleModalStore();

const playlistButtonHandle = () => {
  store.showModal();
  emits("toggleBurger");
};
</script>

<template>
  <div
    :class="['burger', { active: value }]"
    @click="() => emits('toggleBurger')"
  >
    <div class="burger__line burger__line-first" />
    <div class="burger__line burger__line-second" />
    <div class="burger__line burger__line-third" />
  </div>
  <ul :class="['burger__menu', { active: value }]">
    <li class="burger__menu-item" @click="() => emits('toggleBurger')">
      <RouterLink to="/about">В чем прикол?</RouterLink>
    </li>
    <li class="burger__menu-item" @click="playlistButtonHandle">
      <button>Плэйлист</button>
    </li>
    <li class="burger__menu-item" @click="() => emits('toggleBurger')">
      <RouterLink to="/settings">Настройки</RouterLink>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
@import @styles/vars

.burger
  width: 26px
  height: 16px
  display: none
  justify-content: space-between
  align-items: center
  flex-direction: column
  cursor: pointer
  &__line
    width: 100%
    height: 2px
    background-color: $third
    transition: .3s
  &.active
    .burger
      &__line
        &-first
         transform: rotate(45deg) translate(4px, 6px)
        &-second
          transform: scale(0)
        &-third
          transform: rotate(-45deg)translate(4px, -6px)
  &__menu
    height: calc(100vh - 50px)
    width: 100%
    position: fixed
    inset: 50px auto auto 0
    background-color: $primary
    z-index: 1
    padding: 30px 15px
    transform: translate(0, 100%)
    transition: .3s
    &.active
      transform: translate(0)
    &-item
      text-align: right
      font-size: 24px
      font-weight: bold
      &:not(:last-child)
        margin: 0 0 15px
      a, button
        width: 100%

@media (max-width: 768px)
  .burger
    display: flex
</style>
