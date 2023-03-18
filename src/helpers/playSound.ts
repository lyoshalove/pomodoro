import endSound from "@sounds/end.mp3";

const sound = new Audio(endSound);
const settings = JSON.parse(localStorage.getItem('settings')!);

export const playSound = () => {
  if (!settings.allowSound) {
    return;
  }

  sound.play();
};
