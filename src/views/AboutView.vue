<script setup>
import TheAbout from '@/components/TheAbout.vue';
</script>

<template>
  <main>
    <TheAbout />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
