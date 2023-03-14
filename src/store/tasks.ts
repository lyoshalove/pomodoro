import { ITask } from "@/types";
import { defineStore } from "pinia";

export const tasksStore = defineStore("tasks", {
  state: () => ({
    tasks: (JSON.parse(localStorage.getItem("tasks")!) || []) as ITask[],
  }),
  actions: {
    updateName(newName: string, id: string) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, name: newName };
        }

        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    setNewTasks(task: ITask) {
      this.tasks = [...this.tasks, task];

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});
