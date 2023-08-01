<template>
  <div class="">
    <section
      class="py-24 px-5 md:py-3 md:px-10 2xl:px-28 bg-secondary bg-opacity-20 h-[90vh] md:h-[90vh] 2xl:h-[80vh] flex flex-col items-center md:grid md:grid-cols-2 md:gap-14 md:justify-between md:items-center overflow-hidden relative"
    >
      <div class="">
        <div class="text-center md:text-left">
          <h2 class="mb-1 md:text-2xl">Reading made fun and rewarding</h2>
          <h1 class="font-bold text-3xl md:text-5xl font-heading">
            Level up your reading skills and unlock rewards as you progress.
          </h1>
        </div>
        <div
          class="text-center md:text-left text-sm 2xl:text-md mt-10 2xl:mt-14"
        >
          <ul class="flex md:inline-flex flex-col gap-2">
            <li
              class="flex justify-center items-center md:items-start md:justify-start gap-3"
            >
              <div
                class="px-[4px] py-[.5px] rounded-full bg-primary bg-opacity-10"
              >
                <i class="icofont-check text-primary" />
              </div>
              Discover new books
            </li>
            <li
              class="flex justify-center items-center md:items-start md:justify-start gap-3"
            >
              <div
                class="px-[4px] py-[.5px] rounded-full bg-primary bg-opacity-10"
              >
                <i class="icofont-check text-primary" />
              </div>
              Build your reading list
            </li>
            <li
              class="flex justify-center items-center md:items-start md:justify-start gap-3"
            >
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
            class="block md:inline-block bg-primary text-center text-white rounded-xl py-2 md:py-4 md:px-10 font-semibold hover:opacity-75 hover:-translate-y-1 hover:shadow"
          >
            Get started
          </a>
          <nuxt-link
            to="/about"
            class="hidden md:inline-block bg-primary md:bg-slate-500 md:bg-opacity-20 md:text-black font-semibold text-center text-white rounded-xl py-2 md:py-4 md:px-10 hover:-translate-y-1 hover:shadow"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
      <img
        src="~/assets/img/Hero-image.png"
        class="w-full h-auto absolute md:relative -bottom-44 md:bottom-auto"
      />
    </section>
    <section
      class="pt-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-white overflow-hidden md:min-h-screen"
    >
      <div class="mb-10 md:w-2/5">
        <h2 class="text-xl md:text-3xl font-bold font-heading">How it works</h2>
        <p class="2xl:w-2/3">
          You don't need to be an avid reader or love reading to use Orunla, our
          goal is to make you one.
        </p>
      </div>
      <div
        class="overflow-hidden md:flex md:flex-row-reverse md:gap-20 relative pb-96 md:pb-0"
      >
        <div
          class="md:w-2/3 md:flex md:flex-col md:items-start md:justify-start md:gap-5"
        >
          <div class="md:flex gap-10">
            <div class="md:w-1/3 border-slate-100 border-b md:border-none py-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0001 5C23.8931 8.44429 28.9742 10.2376 34.1668 10C35.6942 15.1959 35.0491 20.7891 32.3791 25.5009C29.7091 30.2127 25.2424 33.6403 20.0001 35C14.7578 33.6403 10.2911 30.2127 7.62109 25.5009C4.95106 20.7891 4.30602 15.1959 5.83343 10C11.026 10.2376 16.107 8.44429 20.0001 5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="19.9997"
                  cy="18.3327"
                  rx="1.66667"
                  ry="1.66667"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0003 20V24.1667"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2 class="text-xl md:text-3xl font-bold font-heading my-3">
                Create an account
              </h2>
              <p class="">
                Creating an account is easy; with a valid email and a strong
                password, you're good to go.
              </p>
            </div>
            <div class="md:w-1/3 border-slate-100 border-b md:border-none py-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="20"
                  cy="16.666"
                  rx="5"
                  ry="5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2803 31.4143C11.1273 28.5951 13.7232 26.6651 16.6669 26.666H23.3336C26.2813 26.665 28.8798 28.6 29.7236 31.4243"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2 class="text-xl md:text-3xl font-bold font-heading my-3">
                Verify your email
              </h2>
              <p class="">
                A verification mail would be sent to your email for
                verification. After this, you're good to go.
              </p>
            </div>
          </div>
          <div class="md:w-1/3 flex flex-col gap-5 md:gap-10">
            <div class="border-slate-100 border-b md:border-none py-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.33301"
                  y="6.66602"
                  width="6.66667"
                  height="26.6667"
                  rx="1"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="15"
                  y="6.66602"
                  width="6.66667"
                  height="26.6667"
                  rx="1"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33301 13.3333H14.9997"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 26.6673H21.6667"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="22.0859"
                  y="7.75781"
                  width="6.66667"
                  height="26.6667"
                  rx="1"
                  transform="rotate(-13 22.0859 7.75781)"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.5859 14.2534L30.0817 12.7537"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.5849 27.2456L33.0807 25.7459"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2 class="text-xl md:text-3xl font-bold font-heading my-3">
                Choose your favourite genres
              </h2>
              <p class="">
                Select your top genres from our curated genres to help us
                provide good recommendations and then you can start reading.
              </p>
            </div>
          </div>
        </div>
        <img
          src="~/assets/img/Genres-img.png"
          class="w-auto md:order-1 h-[528px] absolute md:relative -bottom-40 md:bottom-auto"
        />
      </div>
    </section>
    <section
      class="pt-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-blue-50 overflow-hidden md:min-h-screen"
    >
      <div
        class="overflow-hidden md:flex md:items-end md:gap-0 relative pb-80 md:pb-0"
      >
        <div class="md:w-3/5">
          <div class="mb-10 md:w-96 flex-shrink-0">
            <h2 class="text-xl md:text-3xl font-bold font-heading">
              Join book loving clubs or create yours
            </h2>
            <p class="mb-10">
              Become part of book loving communties where you can share book
              reviews, engage in book-related discussions, and participate in
              reading challenges.
            </p>
            <a
              href="https://app.orunla.ng/clubs"
              target="_blank"
              class="hidden md:inline-block bg-primary md:bg-slate-500 md:bg-opacity-20 md:text-black font-semibold text-center text-white rounded-xl py-2 md:py-4 md:px-10 hover:-translate-y-1 hover:shadow"
            >
              Explore Clubs
            </a>
          </div>
          <div class="flex gap-5 p-5 overflow-x-scroll">
            <a
              v-for="i in 4"
              :key="i"
              href="https://app.orunla.ng/club"
              class="h-72 w-48 overflow-hidden bg-slate-50 flex-shrink-0 rounded-lg"
            >
              <div class="h-2/3 bg-slate-200" />
              <div class="p-3">
                <h2 class="font-heading">The Orunla Club</h2>
                <p class="text-sm">The best club on Orunla, reading daily.</p>
              </div>
            </a>
          </div>
        </div>
        <img
          src="~/assets/img/Clubs-img.png"
          class="w-full md:w-auto h-auto md:h-[528px] absolute md:relative -bottom-10 md:bottom-auto md:right-0"
        />
      </div>
    </section>
    <section
      class="py-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-white overflow-hidden h-[75vh] md:h-[70vh] text-center flex justify-center relative"
    >
      <img src="~/assets/img/Books-img.png" class="absolute -bottom-72 md:-bottom-[27rem] -right-10" />
      <div class="md:w-1/2 mt-10">
        <p class="text-center font-heading mt-5 text-4xl inline-block">
          Start your literary journey with Orunla
        </p>
        <br />
        <div class="flex justify-center gap-5 mt-10">
          <a
            href="https://app.orunla.ng/auth"
            class="block bg-primary text-white font-semibold p-3 capitalize md:p-5 rounded-xl hover:-translate-y-1 hover:shadow"
          >
            Create a free account
          </a>
          <a
            href="https://app.orunla.ng/auth"
            class="block bg-slate-100 text-primary font-semibold p-3 md:p-5 rounded-xl hover:-translate-y-1 hover:shadow"
          >
            Log In
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Discover the new way to read with friends on Orunla',
      description: 'Reading made fun and rewarding. Level up your reading skills and unlock rewards as you progress.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }
      ]
    }
  }
}
</script>
