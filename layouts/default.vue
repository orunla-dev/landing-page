<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <header
        class="sticky top-0 z-50 flex bg-white justify-between items-center py-3 px-5 md:py-3 md:px-10 2xl:px-28 md:border-b"
      >
        <div
          class="md:hidden w-12 h-8 flex flex-col items-center justify-center gap-1 border p-2 rounded"
          @click="menu = !menu"
        >
          <div class="pt-1 h-1 w-full bg-primary rounded" />
          <div class="pt-1 h-1 w-full bg-primary rounded" />
        </div>
        <nuxt-link to="/">
          <img src="~/static/Orunla-Logo.png" class="w-24 md:w-28 h-auto transition-transform hover:scale-110 " />
        </nuxt-link>
        <ul
          :class="menu ? 'md:relative' : 'hidden z-40 md:relative'"
          class="fixed md:relative border-b-8 md:border-none border-secondary top-14 md:top-auto bottom-0 md:bottom-auto right-0 md:right-auto left-0 md:left-auto z-40 md:z-auto bg-primary md:bg-transparent md:flex gap-5 items-center justify-center transition-all"
        >
          <li class="w-full">
            <a
              href="https://app.orunla.ng/books"
              target="_blank"
              class="block px-5 md:px-6 py-3 md:py-3 text-white md:text-primary border-b border-secondary md:border-none hover:bg-secondary md:hover:bg-transparent hover:opacity-75 hover:font-semibold md:font-bold md:hover:font-bold hover:px-6 md:hover:px-6 transition-all"
            >
              Books
            </a>
          </li>
          <li class="w-full">
            <a
              href="https://app.orunla.ng/clubs"
              target="_blank"
              class="block px-5 md:px-6 py-3 md:py-3 text-white md:text-primary border-b border-secondary md:border-none hover:bg-secondary md:hover:bg-transparent hover:opacity-75 hover:font-semibold md:font-bold md:hover:font-bold hover:px-6 md:hover:px-6 transition-all"
            >
              Clubs
            </a>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/about"
              class="block px-5 md:px-6 py-3 md:py-3 text-white md:text-primary border-b border-secondary md:border-none hover:bg-secondary md:hover:bg-transparent hover:opacity-75 hover:font-semibold md:font-bold md:hover:font-bold hover:px-6 md:hover:px-6 transition-all"
            >
              About
            </nuxt-link>
          </li>
        </ul>
        <a
          href="https://app.orunla.ng/auth"
          target="_blank"
          class="bg-primary text-white px-3 py-2 md:px-8 md:py-3 rounded-lg hover:-translate-y-1 hover:shadow"
        >
          Get started
        </a>
      </header>
      <nuxt-child />
    </div>
    <footer
      class="flex gap-8 md:gap-16 flex-col md:flex-row justify-between bg-slate-50 py-8 px-5 md:py-10 md:px-10 2xl:px-28 border-t"
    >
      <div class="md:w-2/3">
        <img
          src="~/static/Orunla-Logo.png"
          class="w-24 md:w-28 h-auto grayscale"
        />
        <p class="text-xl md:text-3xl font-semibold font-heading mt-5 mb-9 text-gray-700">
          Level up your reading skills and unlock rewards as you progress.
        </p>
        <a
          href="mailto:hi@orunla.ng"
          class="underline text-secondary text-lg md:text-2xl font-semibold"
          >hi@orunla.ng</a
        >
      </div>
      <div class="md:w-2/5">
        <h3 class="md:text-xl font-semibold font-heading opacity-75 mb-5">Legal</h3>
        <ul class="flex justify-between md:flex-col gap-3">
          <li class="">
            <nuxt-link to="/terms" class="hover:text-secondary">Terms</nuxt-link>
          </li>
          <li class="">
            <nuxt-link to="/privacy" class="hover:text-secondary">Privacy Policy</nuxt-link>
          </li>
          <li class="">
            <nuxt-link to="/copyright" class="hover:text-secondary">Copyright</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="md:w-2/5">
        <h3 class="md:text-xl font-semibold font-heading opacity-75 mb-5">Social</h3>
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
export default {
  name: 'DefaultPage',
  data() {
    return {
      menu: false,
    }
  },
  watch: {
    $route: function() {
      this.menu = false;
    }
  }
}
</script>

<style>
#menu:checked ~ ul {
  display: block;
  z-index: 40;
}
</style>
