<script setup>
import {ref} from 'vue'
const show = ref(true);
const heading = ref([h1, h2, h3, h4, h5, h6]);
</script>

<template lang="">
  <main> 
    <div> 
      <h1>Typography</h1>
    </div> 
  </main>
</template>

<style lang="scss">
/* @import '@/assets/base.css'; */

h1 {

  color: blue;
}
</style>