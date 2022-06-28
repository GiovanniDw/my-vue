<script lang="ts">
import { PropType, h, defineComponent } from 'vue';

export default defineComponent({
  props: {
    heading: {
      type: String as PropType<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" >,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => h(props.heading, slots.default?.())
  }
})
</script>

<style lang="scss">
  h1 {
    color: var(--color-border);
  }
</style>