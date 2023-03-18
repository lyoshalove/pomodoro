declare var Notification: any;

import { settingsStore } from "@/store/settings";
import { storeToRefs } from "pinia";
const { settings } = storeToRefs(settingsStore());

const createNotification = (title: string, text: string, icon: string) => {
  let notification = new Notification(title, {
    tag: "ache-mail",
    body: text,
    icon: icon,
  });
};

export const initNotifications = () => {
  if (Notification.permission !== "denied") {
    Notification.requestPermission((permission: string) => {
      if (!("permission" in Notification)) {
        Notification.permission = permission;
      }
    });
  }
};

export const sendNotification = (
  title: string,
  text: string,
  icon: string = "https://shortest.link/kSu2"
) => {
  if (!settings.value.allowNotifications) {
    return;
  }

  if (!("Notification" in window)) {
    alert("Ваш браузер не поддерживает уведомления");
    return;
  }

  if (Notification.permission === "granted") {
    createNotification(title, text, icon);
    return;
  }
};
