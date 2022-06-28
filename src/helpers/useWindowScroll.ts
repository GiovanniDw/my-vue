import { ref, onMounted, onUnmounted  } from 'vue'


export const useScroll = () => {
  const scrollPosition = ref(0)
document.addEventListener('scroll', (e) => scrollPosition.value = window.scrollY, false)
  //   const scrollPosition = ref(0);

  //  const update = (e) => {
  //   scrollPosition.value = e.scrollY
  //   }
  //   onMounted(() => document.addEventListener('scroll', update))
  //   onUnmounted(() => document.removeEventListener('scroll', update))
  return { scrollPosition }

}