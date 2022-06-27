<script setup>
import { useCounterStore } from '../stores/counter.js';
const store = useCounterStore();
</script>

<template>
  <div>
    <button @click="store.increment()">Click Me!</button>
    How many times you clicked {{ store.counter }} times 2 =
    {{ store.doubleCount }}
  </div>
</template>
