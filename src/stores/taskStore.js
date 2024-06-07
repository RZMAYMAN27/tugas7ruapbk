import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([]);

  const addTask = (task) => {
    tasks.value.push({ id: Date.now(), text: task.text, completed: false });
  };

  const removeTask = (taskId) => {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  };

  const toggleTaskCompletion = (taskId) => {
    const task = tasks.value.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  };

  const incompleteTasksCount = computed(() => {
    return tasks.value.filter(task => !task.completed).length;
  });

  return { tasks, addTask, removeTask, toggleTaskCompletion, incompleteTasksCount };
});
