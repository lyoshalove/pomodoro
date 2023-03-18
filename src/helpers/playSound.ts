import { settingsStore } from "@/store/settings";
import endSound from "@sounds/end.mp3";
import { storeToRefs } from "pinia";

const sound = new Audio(endSound);
const { settings } = storeToRefs(settingsStore());

export const playSound = () => {
  if (!settings.value.allowSound) {
    return;
  }

  sound.play();
};
