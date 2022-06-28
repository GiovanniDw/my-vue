import { ref } from 'vue'

export const useScroll = (element: HTMLElement) => {
  const scrollPosition = ref(0)

  element.addEventListener('scroll', (e) => scrollPosition.value = e.getClientRect.top, false)

  return {
    scrollPosition
  }
}

