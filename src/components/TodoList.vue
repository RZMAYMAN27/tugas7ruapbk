<template>
    <div class="todo-list">
      <h1>Todo List</h1>
      <div class="input-container">
        <input v-model="newTask" @keyup.enter="addNewTask" placeholder="Add new task" />
        <button @click="addNewTask">Add</button>
      </div>
      <ul>
        <li v-for="task in tasks" :key="task.id" class="task-item">
          <div class="task-info">
            <input type="checkbox" :checked="task.completed" @change="toggleTaskCompletion(task.id)" />
            <span :class="{ completed: task.completed }">{{ task.text }}</span>
          </div>
          <button @click="removeTask(task.id)" class="remove-button">🗑️</button>
        </li>
      </ul>
      <p>Tasks left: {{ incompleteTasksCount }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useTaskStore } from '@/stores/taskStore';
  
  const taskStore = useTaskStore();
  const newTask = ref('');
  
  const addNewTask = () => {
    if (newTask.value.trim()) {
      taskStore.addTask({ text: newTask.value.trim() });
      newTask.value = '';
    }
  };
  
  const removeTask = (taskId) => {
    taskStore.removeTask(taskId);
  };
  
  const toggleTaskCompletion = (taskId) => {
    taskStore.toggleTaskCompletion(taskId);
  };
  
  const tasks = computed(() => taskStore.tasks);
  const incompleteTasksCount = computed(() => taskStore.incompleteTasksCount);
  </script>
  
  <style scoped>
  .todo-list {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .todo-list h1 {
    text-align: center;
    color: #333;
  }
  
  .input-container {
    display: flex;
    margin-bottom: 20px;
  }
  
  .input-container input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .input-container button {
    padding: 10px 20px;
    border: none;
    background-color: #4276b9;
    color: #fff;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .input-container button:hover {
    background-color: #3680a3;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
  }
  
  .task-item:hover {
    background-color: #f0f0f0;
  }
  
  .task-info {
    display: flex;
    align-items: center;
  }
  
  .task-info input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .task-info span {
    font-size: 16px;
  }
  
  .task-info span.completed {
    text-decoration: line-through;
    color: #888;
  }
  
  .remove-button {
    background: none;
    border: none;
    color: #e74c3c;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .remove-button:hover {
    color: #c0392b;
  }
  
  .todo-list p {
    text-align: center;
    font-weight: bold;
    color: #555;
  }
  </style>
  