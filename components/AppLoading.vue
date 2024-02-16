<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<template>
  <div v-if="loading" class="fixed top-0 right-0 bottom-0 left-0 bg-white flex justify-center items-center">
    <h1 class="font-heading text-2xl animate-bounce">
      Please wait...
    </h1>
  </div>
</template>
