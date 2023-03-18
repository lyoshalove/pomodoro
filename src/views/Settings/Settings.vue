<script lang="ts" setup>
import Slider from "@/components/Slider.vue";
import Switch from "@/components/Switch.vue";
import { settingsStore } from "@/store/settings";
import { ISettingsStore } from "@/types";
import { storeToRefs } from "pinia";

const store = settingsStore();
const { settings } = storeToRefs(store);

const updateSettingsStore = (value: ISettingsStore) => {
  store.setNewState(value);
};
</script>

<template>
  <div class="settings">
    <div class="container">
      <div class="settings__inner page">
        <h2 class="settings__title">Settings</h2>
        <Slider
          :value="settings.workDuration"
          text="Рабочее время"
          name="workDuration"
          @update-settings="(value) => updateSettingsStore(value)"
        />
        <Slider
          :value="settings.shortBreak"
          text="Короткий перерыв"
          name="shortBreak"
          @update-settings="(value) => updateSettingsStore(value)"
        />
        <Slider
          :value="settings.longBreak"
          text="Длинный перерыв"
          name="longBreak"
          @update-settings="(value) => updateSettingsStore(value)"
        />
        <Switch
          :value="settings.allowNotifications"
          text="Уведомления"
          name="allowNotifications"
          @update-settings="(value) => updateSettingsStore(value)"
        />
        <Switch
          :value="settings.allowSound"
          text="Звуковые уведомления"
          name="allowSound"
          @update-settings="(value) => updateSettingsStore(value)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.settings
  background-color: $primary
  &__inner
    max-width: 400px
    width: 100%
    margin: 0 auto
  &__title
    margin: 0 0 20px
    text-align: center
</style>
