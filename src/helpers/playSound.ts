import { ISettingsStore } from "@/types";
import endSound from "@sounds/end.mp3";

const sound = new Audio(endSound);
const settings: ISettingsStore = JSON.parse(localStorage.getItem("settings")!);

export const playSound = () => {
  if (!settings.allowSound) {
    return;
  }

  sound.play();
};
