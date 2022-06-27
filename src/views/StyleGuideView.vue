<script setup>
import Heading from '@/components/Heading.vue';
let heading = ["h1", "h2", "h3", "h4", "h5", "h6"];


</script>

<template lang="">
  <main> 
    <div> 
      <h1>Typography</h1>
      <component :is="type" v-for="(type, index) in heading" v-text="type + ` Heading`" />
      <p>Paragraph</p>
    </div> 
    <div>
      <h1>Colors</h1>


    </div>

  </main>
</template>

<style lang="scss">
/* @import '@/assets/base.css'; */

h1 {
  color: #111111;

  &:first-of-type {
  border-bottom: 1px solid gray;
  margin-bottom: .5rem;
  }
}
</style>