<template>
  <h1> BELAJAR PINIA</h1>
  <p> Akses count: {{ countStore.count }}</p>
  <p> Akses doubleCount : {{ countStore.doubleCount }}</p>
  <button @click="countStore.increment">+</button><br /><br />
</template>

<script>
  import { useCountStore } from '../stores/countStore'
    export default {
      setup () {
        const countStore = useCountStore()

        return { countStore }
      }
    }
</script>