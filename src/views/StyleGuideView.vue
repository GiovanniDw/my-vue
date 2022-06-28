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

<style lang="scss">
/* @import '@/assets/base.css'; */

h1 {
  color: #111111;

  &:first-of-type {
    border-bottom: 1px solid gray;
    margin-bottom: .5rem;
  }
}

main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  gap: 10px 30px;

  div {
    /* flex-grow: 1; */
    /* display: block; */
  }

}

@media (min-width: 1024px) {
  main {
    flex-direction: row;
    align-content: start;
    padding: 2em 2em;
    flex-wrap: wrap;
  }


}
</style>