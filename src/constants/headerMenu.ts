import playlist from "@images/playlist.svg";
import setting from "@images/settings.svg";

export const headerMenu = [
  {
    id: 0,
    text: "В чем прикол?",
    icon: null,
    to: "/about",
  },
  {
    id: 1,
    text: "Плэйлист",
    icon: playlist,
    to: "/playlist",
  },
  {
    id: 2,
    text: "Настройки",
    icon: setting,
    to: "/settings",
  },
];
