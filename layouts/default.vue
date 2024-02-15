<template>
  <div class="min-h-screen">
    <header
      class="sticky top-0 z-50 flex justify-between items-center w-full bg-white/70 backdrop-blur"
    >
      <div
        class="md:w-[1400px] mx-auto my-0 flex justify-between items-center py-[16px] px-[20px]"
      >
        <div
          class="md:hidden w-12 h-8 flex flex-col items-center justify-center gap-1 border p-2 rounded"
          @click="menu = !menu"
        >
          <div class="pt-1 h-1 w-full bg-primary rounded" />
          <div class="pt-1 h-1 w-full bg-primary rounded" />
        </div>
        <nuxt-link to="/">
          <img
            src="~/static/Orunla-Logo.png"
            class="w-24 md:w-[167px] h-auto"
          />
        </nuxt-link>
        <ul
          :class="menu ? 'md:relative' : 'hidden z-40 md:relative'"
          class="fixed md:relative border-b-8 md:border-none border-secondary top-14 md:top-auto bottom-0 md:bottom-auto right-0 md:right-auto left-0 md:left-auto z-40 md:z-auto bg-primary md:bg-transparent md:flex gap-16 items-center justify-center transition-all"
        >
          <li class="w-full">
            <a
              href="https://app.orunla.ng/books"
              target="_blank"
              class="text-primary/75 font-semibold hover:text-primary"
            >
              Books
            </a>
          </li>
          <li class="w-full">
            <a
              href="https://app.orunla.ng/clubs"
              target="_blank"
              class="text-primary/75 font-semibold hover:text-primary"
            >
              Clubs
            </a>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/about"
              class="text-primary/75 font-semibold hover:text-primary"
            >
              About
            </nuxt-link>
          </li>
        </ul>
        <div class="flex gap-[24px]">
          <a href="https://app.orunla.ng/auth/login" target="_blank">
            <AppButton type="secondary">Log in</AppButton>
          </a>
          <a href="https://app.orunla.ng" target="_blank">
            <AppButton>Sign Up</AppButton>
          </a>
        </div>
      </div>
    </header>
    <nuxt-child />
    <footer
      class="flex gap-8 md:gap-16 flex-col md:flex-row justify-between bg-slate-50 py-8 px-5 md:py-10 md:px-10 2xl:px-28 border-t"
    >
      <div class="md:w-2/3">
        <img
          src="~/static/Orunla-Logo.png"
          class="w-24 md:w-28 h-auto grayscale"
        />
        <p
          class="text-xl md:text-3xl font-semibold font-heading mt-5 mb-9 text-gray-700"
        >
          Level up your reading skills and unlock rewards as you progress.
        </p>
        <a
          href="mailto:hi@orunla.ng"
          class="underline text-secondary text-lg md:text-2xl font-semibold"
          >hi@orunla.ng</a
        >
      </div>
      <div class="md:w-2/5">
        <h3 class="md:text-xl font-semibold font-heading opacity-75 mb-5">
          Legal
        </h3>
        <ul class="flex justify-between md:flex-col gap-3">
          <li class="">
            <nuxt-link to="/terms" class="hover:text-secondary"
              >Terms</nuxt-link
            >
          </li>
          <li class="">
            <nuxt-link to="/privacy" class="hover:text-secondary"
              >Privacy Policy</nuxt-link
            >
          </li>
          <li class="">
            <nuxt-link to="/copyright" class="hover:text-secondary"
              >Copyright</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="md:w-2/5">
        <h3 class="md:text-xl font-semibold font-heading opacity-75 mb-5">
          Social
        </h3>
        <ul class="flex justify-center md:flex-col gap-3">
          <li>
            <a
              href="https://linkedin.com/company/orunla-africa"
              class="hover:text-secondary flex gap-3 items-center transition-colors"
              target="_blank"
            >
              <i class="icofont-linkedin text-xl mr-1" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/orunla_africa"
              class="hover:text-secondary flex gap-3 items-center transition-colors"
              target="_blank"
            >
              <i class="icofont-twitter text-xl mr-1" />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/orunla_africa"
              class="hover:text-secondary flex gap-3 items-center transition-colors"
              target="_blank"
            >
              <i class="icofont-instagram text-xl mr-1" />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton.vue'

export default {
  name: 'DefaultPage',
  components: { AppButton },
  data() {
    return {
      menu: false,
    }
  },
  watch: {
    $route: function () {
      this.menu = false
    },
  },
}
</script>

<style>
#menu:checked ~ ul {
  display: block;
  z-index: 40;
}
</style>
