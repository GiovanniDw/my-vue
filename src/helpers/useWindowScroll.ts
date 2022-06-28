import { ref } from 'vue'
const scrollPosition = ref(0)

document.addEventListener('scroll', (e) => scrollPosition.value = window.scrollY, false)

export const useScroll = () => {

  return {
    scrollPosition
  }
}

