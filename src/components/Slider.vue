<script lang="ts" setup>
import { ref } from "vue";
import { NSlider } from "naive-ui";

interface IProps {
  text: string;
  value: number;
  name: string;
}

const props = defineProps<IProps>();
const emits = defineEmits(["updateSettings"]);

const sliderValue = ref<number>(props.value);
const setNewSliderValue = (value: number) => {
  sliderValue.value = value;
  emits("updateSettings", {
    [props.name]: value,
  });
};
</script>

<template>
  <div class="slider__wrapper">
    <span class="slider__text">{{ text }}: {{ sliderValue }} минут</span>
    <NSlider
      :default-value="sliderValue"
      :on-update-value="setNewSliderValue"
      :min="5"
      :max="60"
      :step="5"
    />
  </div>
</template>

<style lang="sass" scoped>
.slider
  margin: 5px 0 0
  &__wrapper
    margin: 0 0 20px
</style>
