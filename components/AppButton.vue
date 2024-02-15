<script>
export default {
  props: {
    type: {
      type: String,
      default: () => {
        return 'primary'
      },
    },
  },
}
</script>
<template>
  <button
    class="rounded-[8px] border border-primary font-semibold capitalize flex justify-center items-center px-3 py-2 md:px-10 md:py-3"
    :class="type === 'primary' ? 'bg-primary text-white' : 'text-primary'"
  >
    <slot />
  </button>
</template>
