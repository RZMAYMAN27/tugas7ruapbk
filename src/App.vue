<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <h1>RIZA UMAMI AYMAN</h1>
    </header>
    <main>
      <TodoList />
    </main>
    <footer>
      <p>❤️223510374❤️</p>
    </footer>
  </div>
</template>

<script setup>
import TodoList from './components/TodoList.vue';
</script>

<style scoped>
#app {
  text-align: center;
}

header {
  background-color: #1999c7;
  padding: 20px;
  color: white;
}

header .logo {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

header h1 {
  margin: 0;
}

main {
  padding: 20px;
}

footer {
  margin-top: 40px;
  padding: 20px;
  background-color: #1999c7;
  color: white;
}
</style>
