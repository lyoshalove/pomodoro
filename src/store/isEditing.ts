import { defineStore } from "pinia";

export const isEditingStore = defineStore("isEditing", {
  state: () => ({
    isEditing: false,
  }),
  actions: {
    setEditing(newValue: boolean) {
      this.isEditing = newValue;
    },
  },
});
