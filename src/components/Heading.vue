<script setup>
let heading = ["h1", "h2", "h3", "h4", "h5", "h6"];
</script>

<template lang="">
  <div>
    <component :is="type" v-for="(type, index) in heading" v-text="type" />
  </div>
</template>

<style lang="">
  
</style>