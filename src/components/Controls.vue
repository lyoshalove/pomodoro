<script lang="ts" setup>
import play from "@images/play.svg";
import pause from "@images/pause.svg";

interface IProps {
  start: () => void;
  end: () => void;
  skip: () => void;
  stop: () => void;
  isStarted: boolean;
}

defineProps<IProps>();
</script>

<template>
  <div class="controls">
    <button v-if="isStarted" class="controls__btn" @click="end">end</button>
    <button class="controls__btn controls__btn-big" @click="() => isStarted ? stop() : start()">
      <img v-if="!isStarted" :src="play" alt="Старт" style="transform: translate(2px, 0);" />
      <img v-else :src="pause" alt="Пауза" />
    </button>
    <button  v-if="isStarted" class="controls__btn" @click="skip">skip</button>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.controls
  display: flex
  justify-content: center
  align-items: center
  gap: 0 25px
  margin: 25px 0 0
  &__btn
    width: 50px
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    background-color: $primary
    color: $third
    border: 2px solid $secondary
    &-big
      width: 70px
      height: 70px
      img
        width: 20px
</style>
