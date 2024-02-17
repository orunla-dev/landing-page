<script>
export default {
  props: {
    type: {
      type: String,
      default: () => {
        return 'primary'
      },
    },
    shadow: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
}
</script>
<template>
  <button
    class="rounded-[8px] border border-primary font-semibold capitalize flex justify-center items-center px-5 py-4 md:px-10 md:py-3"
    :class="{
      'text-white bg-primary': type === 'primary',
      'text-primary bg-white': type === 'secondary',
      'shadow-xl shadow-primary/20': shadow,
    }"
  >
    <slot />
  </button>
</template>
