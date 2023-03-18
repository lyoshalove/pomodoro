<script lang="ts" setup>
import { ref } from "vue";
import { NSwitch } from "naive-ui";

interface IProps {
  text: string;
  value: boolean;
  name: string;
}

const props = defineProps<IProps>();
const emits = defineEmits(["updateSettings"]);

const switchValue = ref<boolean>(props.value);

const setNewSwitchValue = (value: boolean) => {
  switchValue.value = value;
  emits("updateSettings", {
    [props.name]: value,
  });
};
</script>

<template>
  <div class="switch__wrapper">
    {{ text }}
    <NSwitch
      :value="switchValue"
      :on-update-value="setNewSwitchValue"
      class="switch"
    />
  </div>
</template>

<style lang="sass" scoped>
.switch
  &__wrapper
    display: flex
    align-items: center
    gap: 0 20px
    margin: 0 0 10px
</style>
