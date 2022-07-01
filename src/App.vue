<script setup>
// import { ref, reactive } from 'vue';
import { useScroll } from '@/helpers/useWindowScroll';
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';

const { scrollPosition } = useScroll();

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
  <header :class="{ scrolled: scrollPosition > 80 }">
    <div class="wrapper">
      <RouterLink to="/" class="nav-brand">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="44"
          height="44"
        />
        <span>Title</span>
      </RouterLink>
      <nav>
        <TransitionGroup name="route">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/style-guide">Style Guide</RouterLink>
        </TransitionGroup>
      </nav>
      <div class="nav-right">
        {{ scrollPosition }}
      </div>
    </div>
  </header>
  <RouterView v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
  <footer>Footer</footer>
</template>

<style scoped lang="scss">
footer {
  height: 80vh;
  background: var(--color-background-mute);
}

#app {
  /* max-width: 1280px;
  margin: 0 auto;
  padding: 2rem; */
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
  background-color: var(--color-background-hero);
  &.scrolled {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.8);
  }

  .wrapper {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: no-wrap;
      align-items: stretch;
    }

    .nav-brand {
      display: flex;
      align-items: center;
    }

    .nav-right {
      width: 50px;
      align-self: center;
    }
  }
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  /* display: inline-block; */

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &.router-link-exact-active {
      color: var(--color-text);

      &:hover {
        background-color: transparent;
      }
    }

    &:first-of-type {
      border-left: 0;
    }
  }

  @media (min-width: 1024px) {
    /* text-align: left; */
    margin-top: 0;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
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
</style>
