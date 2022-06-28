<script setup>
import Heading from '@/components/Heading.vue';
import CodeBlock from '@/components/CodeBlock.vue';
let headings = ['h1', "h2", "h3", "h4", "h5", "h6"];


</script>

<template lang="">
  <main> 
    <div> 
      <h1>Typography</h1>
      <Heading v-for="heading in headings" :heading="heading" >{{ heading }}</Heading>
      <p>Paragraph</p>
    </div> 
    <div>
      <h1>Colors</h1>
    </div>
    <div>
      <CodeBlock />
    </div>
  </main>
</template>

<style scoped lang="scss">
/* @import '@/assets/base.css'; */

h1 {
  color: #111111;

  &:first-of-type {
    border-bottom: 1px solid gray;
    margin-bottom: .5rem;
  }
}

main {
  display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  /* flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; */
  

  div {
    
    /* display: block; */
  }

}

@media (min-width: 1024px) {
  /* main {
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(550, 1fr));
  grid-gap: 1rem;
    
    
div {
  
   padding: 1.5rem;
}

  } */


}
</style>