import { defineStore } from "pinia";

export const isVisibleModalStore = defineStore("isVisibleModal", {
  state: () => ({
    isVisibleModal: false,
  }),
  actions: {
    showModal() {
      this.isVisibleModal = true;
    },
    hideModal() {
      this.isVisibleModal = false;
    },
  },
});
