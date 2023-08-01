<template>
  <div class="">
    <section
      class="py-24 px-5 md:py-3 md:px-10 2xl:px-28 bg-secondary bg-opacity-20 h-[90vh] md:h-[90vh] 2xl:h-[80vh] flex flex-col items-center md:grid md:grid-cols-2 md:gap-14 md:justify-between md:items-center overflow-hidden"
    >
      <div class="">
        <div class="text-center md:text-left">
          <h2 class="mb-1 md:text-2xl">Reading made fun and rewarding</h2>
          <h1 class="font-bold text-3xl md:text-5xl font-heading">
            Level up your reading skills and unlock rewards as you progress.
          </h1>
        </div>
        <div class="text-center md:text-left text-sm 2xl:text-md mt-10 2xl:mt-14">
          <ul class="flex md:inline-flex flex-col gap-2">
            <li class="flex justify-center items-center md:items-start md:justify-start gap-3">
              <div
                class="px-[4px] py-[.5px] rounded-full bg-primary bg-opacity-10"
              >
                <i class="icofont-check text-primary" />
              </div>
              Discover new books
            </li>
            <li class="flex justify-center items-center md:items-start md:justify-start gap-3">
              <div
                class="px-[4px] py-[.5px] rounded-full bg-primary bg-opacity-10"
              >
                <i class="icofont-check text-primary" />
              </div>
              Build your reading list
            </li>
            <li class="flex justify-center items-center md:items-start md:justify-start gap-3">
              <div
                class="px-[4px] py-[.5px] rounded-full bg-primary bg-opacity-10"
              >
                <i class="icofont-check text-primary" />
              </div>
              Earn badges and rewards
            </li>
          </ul>
        </div>
        <div class="mt-8 2xl:mt-12 md:flex gap-5">
          <a
            href="https://app.orunla.ng/auth"
            target="_blank"
            class="block md:inline-block bg-primary text-center text-white rounded-xl py-2 md:py-4 md:px-10 font-semibold hover:opacity-75 hover:-translate-y-1"
          >
            Get started
          </a>
          <nuxt-link
            to="/about"
            class="hidden md:inline-block bg-primary md:bg-slate-500 md:bg-opacity-20 md:text-black font-semibold text-center text-white rounded-xl py-2 md:py-4 md:px-10 hover:-translate-y-1"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
      <div class="mt-16 md:mt-0 md:-mr-32">
        <img src="~/assets/img/Hero-image.png" class="w-full h-auto" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
