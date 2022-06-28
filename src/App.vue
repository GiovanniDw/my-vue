<script setup>
import { ref, reactive } from 'vue';
import { useScroll } from '@/helpers/useWindowScroll';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';


const { scrollPosition } = useScroll();

let light = "#fff";
let dark = "#000";




// const isSticky = ref(false);
// const scrollPositionRef = ref(scrollPosition);

// console.log(isSticky.value)

// const isScrolled = () => {
// isSticky.value
// }


// const isScrolled = () => {
//   if (scrollPosition < 0) {
//     return isSticky = ref(true)
//   } else {
// return isSticky = ref(false)
//   }
 
// }

</script>

<template>
  <header :class="{scrolled: scrollPosition > 80}">
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      {{ scrollPosition }}
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/style-guide">Style Guide</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  /* min-height: 100vh; */
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  top: 0;
  position: sticky;
  padding: 1em; 
  z-index: 999;
  
transition-duration: 1s;
&.scrolled {

-webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

  .wrapper {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: no-wrap;
      align-items: center;
    }
  }



}

.logo {
  display: block;
  margin: 0 auto 2rem;

  @media (min-width: 1024px) {
    margin: 0 2rem 0 0;
  }


}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {

  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  /* display: inline-block; */

  @media (min-width: 1024px) {
    /* text-align: left; */
    margin-top: 0;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  a.router-link-exact-active {
    color: var(--color-text);

    &:hover {
      background-color: transparent;
    }
  }
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
