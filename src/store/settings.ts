import { defaultSettings } from "@/constants";
import { ISettingsStore } from "@/types";
import { defineStore } from "pinia";

const settingsFromLocalStorage: ISettingsStore = JSON.parse(
  localStorage.getItem("settings")!
);

export const settingsStore = defineStore("settings", {
  state: () => ({
    settings: settingsFromLocalStorage || defaultSettings,
  }),
  actions: {
    setNewState(newState: ISettingsStore) {
      this.settings = { ...this.settings, ...newState };
      this.addSettingsToLocalStorage();
    },
    addSettingsToLocalStorage() {
      localStorage.setItem("settings", JSON.stringify(this.settings));
    },
  },
});
