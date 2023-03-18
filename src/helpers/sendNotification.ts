import { ISettingsStore } from "@/types";

declare var Notification: any;

const settings: ISettingsStore = JSON.parse(localStorage.getItem('settings')!);

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
  if (!settings.allowNotifications) {
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
