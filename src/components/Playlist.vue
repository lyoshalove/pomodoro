<script lang="ts" setup>
import { ref, Teleport } from "vue";
import cross from "@images/cross.svg";
import { NSelect } from "naive-ui";
import { radios } from "@/constants";
import { isVisibleModalStore } from "@/store";
import { storeToRefs } from "pinia";

const store = isVisibleModalStore();
const { isVisibleModal } = storeToRefs(store);
const selectedRadio = ref<string>("https://www.youtube.com/embed/jfKfPfyJRdk");

const closeModal = () => store.hideModal();
</script>

<template>
  <Teleport to="body">
    <div
      :class="[
        'playlist page',
        {
          active: isVisibleModal,
        },
      ]"
    >
      <div class="container">
        <div class="playlist__inner">
          <header class="playlist__header">
            <div class="playlist__header-left">
              <button class="playlist__header-btn" @click="closeModal">
                <img
                  class="playlist__header-cross"
                  :src="cross"
                  alt="Закрыть"
                />
              </button>
              <span class="playlist__header-text">Радио</span>
            </div>
            <div class="playlist__header-right">
              <button class="playlist__header-btn btn" @click="closeModal">
                Сохранить
              </button>
            </div>
          </header>
          <h2 class="playlist__title">Музыка, короче</h2>
          <NSelect
            v-model:value="selectedRadio"
            :options="[...radios]"
            :default-value="radios[0].value"
          />
          <iframe
            class="playlist__video"
            :src="selectedRadio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            frameborder="none"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="sass" scoped>
@import @styles/vars

.playlist
  height: 100vh
  padding: 0
  position: fixed
  inset: 0 auto auto 0
  width: 100%
  z-index: 2
  background-color: $four
  text-align: center
  transform: translate(0, 100%)
  transition: .3s
  &.active
    transform: translate(0, 0)
  &__header
    display: flex
    justify-content: space-between
    align-items: center
    gap: 0 50px
    padding: 10px 0
    &-left
      display: flex
      align-items: center
      gap: 0 20px
    &-text
      font-size: 24px
    &-cross
      width: 20px
  &__title
    margin: 10px 0 25px
  &__video
    max-width: 650px
    width: 100%
    aspect-ratio: 16 / 9

.n-select
  margin: 0 auto 25px
  max-width: 300px
  width: 100%
</style>
