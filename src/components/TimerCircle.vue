<script lang="ts" setup>
import { getTime } from "@/helpers";

interface IProps {
  time: number;
  timersCount: number;
}

const props = defineProps<IProps>();
const getDescription = () => {
  if (props.timersCount === 8) {
    return "Конец";
  }

  return props.timersCount % 2 === 0 ? "Работа" : "Отдых";
};
</script>

<template>
  <div class="circle">
    <div class="circle__inner">
      <span class="circle__time">
        {{ getTime(time) }}
      </span>
      <span class="circle__description">{{ getDescription() }}</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.circle
  border-radius: 50%
  width: 460px
  height: 460px
  border: 15px solid rgba($secondary, .5)
  margin: 0 auto
  &__inner
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    border-radius: 50%
    color: $third
    border: 15px solid $secondary
  &__time
    font-size: 54px
    font-weight: bold
    color: $secondary

@media(max-width: 768px)
  .circle
    width: 400px
    height: 400px

@media(max-width: 480px)
  .circle
    width: 250px
    height: 250px
    &__time
      font-size: 44px
</style>
