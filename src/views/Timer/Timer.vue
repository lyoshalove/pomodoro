<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { settingsStore, tasksStore } from "@/store";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import CheckMarks from "@/components/CheckMarks.vue";
import TimerCircle from "@/components/TimerCircle.vue";
import Controls from "@/components/Controls.vue";
import {
  convertMinutesToMilliseconds,
  initNotifications,
  playSound,
  sendNotification,
} from "@/helpers";

const router = useRouter();
const { id } = useRoute().params;
const store = tasksStore();
const { tasks } = storeToRefs(store);
const { settings } = storeToRefs(settingsStore());
const currentTask = tasks.value.find((task) => task.id === id);
const timer = ref<ReturnType<typeof setInterval> | null>(null);
const timersCount = ref<number>(0);

watch(timersCount, () => {
  if (timersCount.value >= 8) {
    time.value = 0;
  }
});

onMounted(() => {
  if (!currentTask) {
    router.push("/");
    return;
  }

  initNotifications();
});

const getMilliseconds = () => {
  if (timersCount.value === 7) {
    return convertMinutesToMilliseconds(settings.value.longBreak);
  }

  if (timersCount.value % 2 === 0) {
    return convertMinutesToMilliseconds(settings.value.workDuration);
  } else {
    return convertMinutesToMilliseconds(settings.value.shortBreak);
  }
};

const time = ref<number>(getMilliseconds());

const notificationsHandle = () => {
  if (timersCount.value === 8) {
    sendNotification("Молодец!", "Ты закончил задачу");
    playSound();
    return;
  }

  if (timersCount.value % 2 !== 0) {
    sendNotification("Отдых", "Отдохни, бро");
  } else {
    sendNotification("Пора работать", "Воркай, бро");
  }

  playSound();
};

const startTimer = () => {
  if (timer.value || timersCount.value >= 8) {
    return;
  }

  timer.value = setInterval(() => {
    if (time.value === 0 && timer.value) {
      clearInterval(timer.value);
      timer.value = null;
      timersCount.value++;
      time.value = getMilliseconds();
      notificationsHandle();
      return;
    }

    time.value -= 1_000;
  }, 1_000);
};

const stopTimer = () => {
  if (!timer.value) {
    return;
  }

  clearInterval(timer.value);
  timer.value = null;
};

const skipTimer = () => {
  if (timersCount.value > 7) {
    return;
  }

  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }

  timersCount.value++;
  time.value = getMilliseconds();
};

const endTimer = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }

  router.push("/");
};

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<template>
  <div class="timer page">
    <div class="container">
      <div class="timer__inner">
        <h2 class="timer__title">{{ currentTask?.name }}</h2>
        <CheckMarks :completed-check-marks-count="timersCount / 2" />
        <TimerCircle :time="time" :timers-count="timersCount" />
        <Controls
          :end="endTimer"
          :start="startTimer"
          :skip="skipTimer"
          :stop="stopTimer"
          :is-started="!!timer"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.timer
  background-color: $primary
  text-align: center
  display: flex
  align-items: center
</style>
