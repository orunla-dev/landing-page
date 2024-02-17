<template>
  <div class="bg-white">
    <section class="relative">
      <div class="absolute top-0 right-0">
        <svg
          width="422"
          height="819"
          viewBox="0 0 422 819"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_29_259)">
            <circle
              cx="429.5"
              cy="389.5"
              r="389.5"
              fill="url(#paint0_radial_29_259)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_29_259"
              x="0"
              y="-40"
              width="859"
              height="859"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_29_259"
              />
            </filter>
            <radialGradient
              id="paint0_radial_29_259"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(429.5 389.5) rotate(90) scale(389.5)"
            >
              <stop
                offset="0.325503"
                stop-color="#BEFFDA"
                stop-opacity="0.47"
              />
              <stop offset="1" stop-color="#B5E3C9" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        class="md:w-[1200px] 2xl:w-[1400px] mx-auto my-0 flex justify-between items-start py-32 px-[20px]"
      >
        <div class="text-center md:text-left w-1/2 relative">
          <svg
            width="52"
            height="82"
            viewBox="0 0 52 82"
            class="absolute -top-5 md:right-[160px] 2xl:right-[185px]"
          >
            <path
              d="M5.36669 66.7053C4.28547 68.346 8.54276 70.4728 23.4771 75.8203C39.2898 81.4716 43.0067 82.2008 43.4798 79.9525C44.0879 76.8533 7.19124 64.0923 5.36669 66.7053Z"
              fill="#CECCE4"
            />
            <path
              d="M27.3965 2.10983C21.7202 -0.442411 20.5037 0.104437 10.5701 9.64487C0.298499 19.4891 -1.18811 21.6161 0.704023 23.4998C4.1504 26.9028 7.79957 25.0798 21.1796 13.4733C31.0457 4.90517 31.5863 3.9936 27.3965 2.10983Z"
              fill="#CECCE4"
            />
            <path
              d="M49.021 33.7696C44.9665 31.8858 43.0743 31.9467 35.8436 34.1343C14.422 40.6971 -1.45854 43.8569 6.51543 47.3813C9.75908 48.8397 13.8814 47.9891 39.2224 41.0616C53.2107 37.1725 54.4271 36.3218 49.021 33.7696Z"
              fill="#CECCE4"
            />
          </svg>
          <h1
            class="mb-1 md:text-[52px] 2xl:text-[62px] text-[#171340] font-extrabold font-heading w-2/3"
            style="line-height: 70px"
          >
            Reading made <span class="text-secondary/75">fun</span> and
            <span class="text-secondary/75">rewarding</span>
          </h1>
          <svg width="276" height="21" viewBox="0 0 276 21" class="-mt-3">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M275.892 6.67889C274.766 4.20325 265.088 3.16083 236.006 2.29218C208.869 1.46697 177.278 -0.921771 122.083 0.381199C79.8931 1.38014 27.3605 5.37596 27.3605 7.59101C27.3605 9.19801 29.4087 9.24144 48.9676 7.80818C67.0417 6.5052 76.3091 6.20118 87.6246 5.85372C42.2602 9.24144 32.5831 11.4564 8.41604 13.5846C-6.73957 14.931 2.11827 18.7965 7.64802 18.4056C7.69922 18.4056 78.2035 13.5412 84.8597 13.8018C85.4741 13.8452 78.7668 14.627 69.9089 15.5391C45.1787 18.145 49.9404 22.4882 68.4753 20.4903C130.839 13.7583 189.515 11.6735 234.726 14.5835C249.011 15.4955 250.598 15.4955 250.598 14.3663C250.598 12.3684 246.707 10.8484 240.614 10.5443C231.091 10.0231 194.431 8.5464 177.841 8.11207C176.561 8.06864 177.176 7.24356 178.302 7.15669C185.061 6.59207 238.72 7.02622 259.815 7.63428C275.329 8.0686 276.455 8.0253 275.892 6.67889Z"
              fill="#CECCE4"
            />
          </svg>
          <p
            class="w-2/3 md:text-[25px] 2xl:text-[28px] mt-5 mb-10 text-black/75"
          >
            Level up your reading skills and unlock rewards as you progress.
          </p>
          <div class="flex gap-5">
            <a href="">
              <AppButton shadow>Get Started</AppButton>
            </a>
            <nuxt-link to="">
              <AppButton type="secondary" shadow>Learn More</AppButton>
            </nuxt-link>
          </div>
        </div>
        <div class="w-1/2 relative flex gap-10 items-center">
          <div class="w-1/2 flex flex-col gap-10 relative">
            <img
              src="~/assets/img/V-Books.png"
              class="w-full h-auto rounded-[16px]"
            />
            <img
              src="~/assets/img/CyanBooks.png"
              class="w-full h-auto rounded-[16px]"
            />
            <div
              class="absolute bottom-1/2 -left-5 rounded-full h-[56px] w-[56px] bg-secondary shadow-xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48 1.46875C7.78641 0.660156 5.41922 0.264062 2.25 0.25C1.95111 0.245939 1.65809 0.333095 1.41 0.499844C1.20637 0.637482 1.03968 0.82305 0.924597 1.04023C0.809512 1.2574 0.749555 1.49953 0.750002 1.74531V15.1562C0.750002 16.0628 1.395 16.7467 2.25 16.7467C5.58141 16.7467 8.92313 17.058 10.9247 18.9498C10.9521 18.9758 10.9865 18.9932 11.0237 18.9998C11.0608 19.0064 11.0991 19.002 11.1338 18.987C11.1685 18.972 11.1979 18.9472 11.2186 18.9156C11.2393 18.884 11.2502 18.847 11.25 18.8092V3.00719C11.2501 2.90057 11.2273 2.79518 11.1831 2.69814C11.139 2.6011 11.0745 2.51467 10.9941 2.44469C10.5356 2.05273 10.0263 1.72446 9.48 1.46875ZM22.59 0.498437C22.3418 0.332103 22.0488 0.245434 21.75 0.25C18.5808 0.264062 16.2136 0.658281 14.52 1.46875C13.9737 1.724 13.4643 2.05163 13.0055 2.44281C12.9252 2.51291 12.8609 2.59938 12.8168 2.6964C12.7728 2.79342 12.75 2.89875 12.75 3.00531V18.8083C12.75 18.8446 12.7607 18.88 12.7807 18.9103C12.8008 18.9405 12.8293 18.9641 12.8628 18.9782C12.8962 18.9923 12.9331 18.9961 12.9687 18.9894C13.0044 18.9826 13.0372 18.9654 13.0631 18.94C14.2664 17.7447 16.3781 16.7453 21.7519 16.7458C22.1497 16.7458 22.5312 16.5877 22.8125 16.3064C23.0938 16.0251 23.2519 15.6436 23.2519 15.2458V1.74578C23.2524 1.49951 23.1923 1.2569 23.0769 1.03935C22.9615 0.821814 22.7942 0.63604 22.59 0.498437Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="absolute bottom-10 -left-20 bg-white text-[#171340] rounded-full shadow-xl w-[204px] h-[60px] flex justify-center items-center gap-3 font-semibold"
            >
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49799 2.793C9.91799 0.888996 12.053 0.332996 14.017 0.867996C16.137 1.445 18.001 3.266 18.62 5.802C18.652 5.932 18.68 6.062 18.703 6.192C17.8094 5.8738 16.8375 5.84928 15.929 6.122C14.642 5.17 13.048 5.01 11.631 5.532C9.85599 6.187 8.46999 7.848 8.14899 9.938C7.73899 12.614 9.36899 15.018 11.674 17.062L12.062 17.398C11.749 17.42 11.431 17.371 11.127 17.306C10.9707 17.2726 10.8154 17.2353 10.661 17.194L10.124 17.044C5.34999 15.701 2.15399 13.6 1.23699 10.46C0.504991 7.954 1.20899 5.445 2.75699 3.885C4.19099 2.44 6.31699 1.854 8.49799 2.793ZM10.126 10.241C10.554 7.449 13.783 6.073 15.441 8.469C15.4569 8.49126 15.4809 8.50638 15.5079 8.51106C15.5348 8.51574 15.5625 8.50961 15.585 8.494C17.962 6.81 20.525 9.207 19.972 11.977C19.652 13.583 18.162 14.917 15.502 15.977L15.067 16.147L14.804 16.255C14.577 16.344 14.337 16.415 14.12 16.377C13.904 16.339 13.703 16.189 13.52 16.029L13.21 15.749C10.897 13.758 9.86899 11.922 10.126 10.241Z"
                  fill="#342B8E"
                />
              </svg>
              500+ Books
            </div>
          </div>
          <div class="w-1/2 relative">
            <img
              src="~/assets/img/ScienceBooks.png"
              class="w-full h-auto rounded-[16px]"
            />
            <div
              class="absolute -bottom-7 -left-7 rounded-full h-[56px] w-[56px] bg-danger shadow-xl flex items-center justify-center"
            >
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 0.5H1.5C1.08516 0.5 0.75 0.835156 0.75 1.25V20.75C0.75 21.1648 1.08516 21.5 1.5 21.5H16.5C16.9148 21.5 17.25 21.1648 17.25 20.75V1.25C17.25 0.835156 16.9148 0.5 16.5 0.5ZM12.6562 7.10703L11.5664 6.3125L10.4062 7.14219V1.90625H12.6562V7.10703Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="absolute top-10 -right-20 bg-white text-[#171340] rounded-full shadow-xl w-[220px] h-[60px] flex justify-center items-center gap-3 font-semibold"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.534998C8.39186 0.183887 7.702 -0.000939679 6.99977 -0.000900262C6.29755 -0.000860846 5.60771 0.184043 4.99961 0.535223C4.39151 0.886402 3.88657 1.39148 3.53556 1.99968C3.18455 2.60789 2.99984 3.29778 3 4V5.774C2.149 6.116 1.451 6.648 0.941 7.349C0.292 8.242 0 9.335 0 10.5C0 12.061 0.795 13.436 2 14.242V15.5C1.99994 16.3149 2.22117 17.1146 2.64008 17.8136C3.05899 18.5126 3.65985 19.0847 4.37853 19.4689C5.09721 19.8531 5.90672 20.0349 6.72066 19.9949C7.5346 19.955 8.32241 19.6947 9 19.242V15.5C9 14.167 8.67 13.315 8.14 12.74C7.597 12.153 6.716 11.716 5.336 11.486L5.664 9.514C6.966 9.73 8.106 10.137 9 10.827V0.534998ZM11 0.534998V10.827C11.894 10.137 13.034 9.73 14.336 9.514L14.664 11.486C13.284 11.716 12.403 12.153 11.86 12.741C11.33 13.315 11 14.167 11 15.5V19.242C11.6776 19.6947 12.4654 19.955 13.2793 19.9949C14.0933 20.0349 14.9028 19.8531 15.6215 19.4689C16.3401 19.0847 16.941 18.5126 17.3599 17.8136C17.7788 17.1146 18.0001 16.3149 18 15.5V14.242C19.205 13.436 20 12.062 20 10.5C20 9.335 19.708 8.242 19.059 7.35C18.549 6.648 17.851 6.116 17 5.774V4C17.0002 3.29778 16.8154 2.60789 16.4644 1.99968C16.1134 1.39148 15.6085 0.886402 15.0004 0.535223C14.3923 0.184043 13.7024 -0.000860846 13.0002 -0.000900262C12.298 -0.000939679 11.6081 0.183887 11 0.534998Z"
                  fill="#53BE82"
                />
              </svg>
              Discover new books
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative pt-[250px]">
      <div class="absolute top-0 left-0">
        <svg
          width="472"
          height="859"
          viewBox="0 0 472 859"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_40_9117)">
            <circle
              cx="42.5"
              cy="429.5"
              r="389.5"
              fill="url(#paint0_radial_40_9117)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_40_9117"
              x="-387"
              y="0"
              width="859"
              height="859"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_40_9117"
              />
            </filter>
            <radialGradient
              id="paint0_radial_40_9117"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(42.5 429.5) rotate(90) scale(389.5)"
            >
              <stop
                offset="0.325503"
                stop-color="#BEFFDA"
                stop-opacity="0.47"
              />
              <stop offset="1" stop-color="#B5E3C9" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        class="md:w-[1200px] 2xl:w-[1400px] mx-auto my-0 py-[16px] px-[20px] relative"
      >
        <div class="mb-20 md:w-2/5 mx-auto my-0 text-center">
          <h2
            class="text-2xl md:text-3xl font-bold font-heading text-[#171340]"
          >
            How it Works
          </h2>
          <p class="text-[20px] text-black/75 mt-5">
            Even if you're not someone who enjoys reading, Orunla is designed to
            help you become one
          </p>
        </div>
        <div class="flex justify-center gap-10 relative">
          <div
            class="rounded-[24px] h-[439px] bg-white shadow-lg w-1/2 p-10 text-center"
          >
            <div
              class="bg-secondary w-[64px] h-[64px] inline-flex items-center justify-center rounded-full"
            >
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0.333313C6.58551 0.333313 5.22896 0.895216 4.22876 1.89541C3.22857 2.8956 2.66667 4.25216 2.66667 5.66665C2.66667 7.08113 3.22857 8.43769 4.22876 9.43788C5.22896 10.4381 6.58551 11 8 11C9.41449 11 10.771 10.4381 11.7712 9.43788C12.7714 8.43769 13.3333 7.08113 13.3333 5.66665C13.3333 4.25216 12.7714 2.8956 11.7712 1.89541C10.771 0.895216 9.41449 0.333313 8 0.333313ZM5.33333 12.3333C3.91885 12.3333 2.56229 12.8952 1.5621 13.8954C0.561903 14.8956 0 16.2522 0 17.6666V19C0 20.4666 1.2 21.6666 2.66667 21.6666H13.3333C14.0406 21.6666 14.7189 21.3857 15.219 20.8856C15.719 20.3855 16 19.7072 16 19V17.6666C16 16.2522 15.4381 14.8956 14.4379 13.8954C13.4377 12.8952 12.0812 12.3333 10.6667 12.3333H5.33333ZM16 11C16 10.2 16.5333 9.66665 17.3333 9.66665H18.6667V8.33331C18.6667 7.97969 18.8071 7.64055 19.0572 7.3905C19.3072 7.14046 19.6464 6.99998 20 6.99998C20.3536 6.99998 20.6928 7.14046 20.9428 7.3905C21.1929 7.64055 21.3333 7.97969 21.3333 8.33331V9.66665H22.6667C23.0203 9.66665 23.3594 9.80712 23.6095 10.0572C23.8595 10.3072 24 10.6464 24 11C24 11.3536 23.8595 11.6927 23.6095 11.9428C23.3594 12.1928 23.0203 12.3333 22.6667 12.3333H21.3333V13.6666C21.3333 14.0203 21.1929 14.3594 20.9428 14.6095C20.6928 14.8595 20.3536 15 20 15C19.6464 15 19.3072 14.8595 19.0572 14.6095C18.8071 14.3594 18.6667 14.0203 18.6667 13.6666V12.3333H17.3333C16.9797 12.3333 16.6406 12.1928 16.3905 11.9428C16.1405 11.6927 16 11.3536 16 11Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3
              class="my-8 text-xl md:text-2xl font-bold font-heading text-[#171340]"
            >
              Create an account
            </h3>
            <p class="text-black/75 text-[20px]">
              Creating an account is easy; with a valid email and a strong
              password, you're good to go.
            </p>
          </div>
          <div
            class="rounded-[24px] h-[439px] bg-white shadow-lg w-1/2 p-10 text-center"
          >
            <div
              class="bg-secondary w-[64px] h-[64px] inline-flex items-center justify-center rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7.53497V17C22 17.7652 21.7077 18.5015 21.1827 19.0582C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7076 2.94174 19.1827C2.38499 18.6577 2.04989 17.9399 2.005 17.176L2 17V7.53497L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.53497Z"
                  fill="white"
                />
                <path
                  d="M19 4C20.08 4 21.027 4.57 21.555 5.427L12 11.797L2.44501 5.427C2.69574 5.01977 3.04022 4.6784 3.44971 4.43138C3.85921 4.18436 4.32184 4.03886 4.79901 4.007L5.00001 4H19Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3
              class="my-8 text-xl md:text-2xl font-bold font-heading text-[#171340]"
            >
              Verify your email
            </h3>
            <p class="text-black/75 text-[20px]">
              Once you sign up, we'll send a verification email to your inbox.
              Just click to verify, and you're all set!
            </p>
          </div>
          <div
            class="rounded-[24px] h-[439px] bg-white shadow-lg w-1/2 p-10 text-center"
          >
            <div
              class="bg-secondary w-[64px] h-[64px] inline-flex items-center justify-center rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.49799 5.793C10.918 3.889 13.053 3.333 15.017 3.868C17.137 4.445 19.001 6.266 19.62 8.802C19.652 8.932 19.68 9.062 19.703 9.192C18.8094 8.8738 17.8375 8.84928 16.929 9.122C15.642 8.17 14.048 8.01 12.631 8.532C10.856 9.187 9.46999 10.848 9.14899 12.938C8.73899 15.614 10.369 18.018 12.674 20.062L13.062 20.398C12.749 20.42 12.431 20.371 12.127 20.306C11.9707 20.2726 11.8154 20.2353 11.661 20.194L11.124 20.044C6.34999 18.701 3.15399 16.6 2.23699 13.46C1.50499 10.954 2.20899 8.445 3.75699 6.885C5.19099 5.44 7.31699 4.854 9.49799 5.793ZM11.126 13.241C11.554 10.449 14.783 9.073 16.441 11.469C16.4569 11.4913 16.4809 11.5064 16.5079 11.5111C16.5348 11.5157 16.5625 11.5096 16.585 11.494C18.962 9.81 21.525 12.207 20.972 14.977C20.652 16.583 19.162 17.917 16.502 18.977L16.067 19.147L15.804 19.255C15.577 19.344 15.337 19.415 15.12 19.377C14.904 19.339 14.703 19.189 14.52 19.029L14.21 18.749C11.897 16.758 10.869 14.922 11.126 13.241Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3
              class="my-8 text-xl md:text-2xl font-bold font-heading text-[#171340]"
            >
              Choose your genres
            </h3>
            <p class="text-black/75 text-[20px]">
              Choose your favorite genres from our list, so we can suggest great
              reads for you.
            </p>
          </div>
          <div class="absolute top-[90px] md:left-[320px] 2xl:left-[400px]">
            <svg
              width="91"
              height="112"
              viewBox="0 0 91 112"
              class="scale-x-125"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.9274 48.1386C85.0402 46.4489 80.9307 41.3638 79.7067 39.2389C78.8866 37.792 78.5774 37.387 78.2735 37.3615C76.8427 37.1638 77.9848 40.2619 80.814 44.3405L82.6211 46.9312L81.3494 46.1596C76.4199 43.1671 73.4969 42.3188 73.9041 44.0444C74.3236 45.8606 74.6072 46.1205 77.6003 47.6568C79.1469 48.4532 80.4644 49.1359 80.4925 49.1727C80.5206 49.2095 79.9522 49.3218 79.1959 49.4116C75.2836 49.8753 73.4871 51.583 75.6774 52.7384C76.4363 53.1362 78.7542 53.2293 81.7907 52.9968C83.0986 52.8845 85.3454 52.9215 86.778 53.047C91.2065 53.4086 91.241 52.0008 86.9274 48.1386ZM69.1399 40.2253C67.3219 39.2596 62.6414 37.9348 62.1697 38.2483C60.6209 39.3118 62.6066 41.7265 65.6753 42.5423C66.8426 42.8418 68.5992 43.3545 69.5916 43.6859C72.872 44.7417 72.5036 42.0235 69.1399 40.2253ZM57.7116 36.7303C55.6152 35.8843 50.5989 35.8331 50.0866 36.6151C49.2264 37.9846 51.1181 39.4938 53.5704 39.4276L57.2851 39.3385C58.4164 39.3301 59.3922 39.1553 59.4686 38.9946C59.6681 38.548 58.5302 37.0575 57.7116 36.7303ZM46.2597 37.1534C44.4627 36.5134 39.0371 40.1363 38.623 42.239C38.1077 44.9172 41.8734 43.9261 47.4834 39.8741C48.1914 39.3859 47.3523 37.5414 46.2597 37.1534ZM48.6779 44.3821C46.3006 42.572 45.7525 42.4502 45.8234 43.698C45.8873 44.6387 46.7856 45.8527 47.944 46.5132C49.6452 47.5121 52.4848 52.3495 53.1998 52.1684C54.6597 51.7708 51.6963 46.6595 48.6779 44.3821ZM53.6849 54.853C53.5233 54.9394 53.1332 55.4716 52.8432 56.0604C51.7027 58.2176 48.6763 60.4007 46.4813 60.6177C44.7948 60.793 44.6174 60.9331 44.9896 61.7188C46.5023 65.0788 52.2313 63.2691 54.4158 58.7537C55.1803 57.1472 54.6837 54.3358 53.6849 54.853ZM33.7041 38.8135C31.6473 37.535 24.0632 39.8951 24.4396 41.6922C24.7915 43.3081 26.3514 43.5631 30.3033 42.6669C31.9801 42.2927 33.7588 41.903 34.2683 41.8252C35.6807 41.5889 35.3473 39.811 33.7041 38.8135ZM36.6987 45.605C35.0835 45.2403 34.7505 49.9455 36.1155 54.0063C36.981 56.5558 40.8546 61.2201 41.7216 60.7538C42.4709 60.3568 42.1294 59.4997 40.2863 57.197C38.2886 54.6919 37.8275 53.3801 38.1206 50.8951C38.5253 47.4016 38.1269 45.9109 36.6987 45.605ZM19.3054 42.9025C17.7122 42.2313 10.8891 47.2649 11.0494 49.0025C11.3168 51.6999 13.2984 51.3151 17.2271 47.8178C20.8597 44.566 21.2288 43.7082 19.3054 42.9025ZM8.09488 52.3973C6.8618 51.8253 1.275 58.4784 1.52322 60.1821C1.99776 63.2999 3.90041 62.5881 7.06865 58.1692C9.96716 54.1048 10.1166 53.3319 8.09488 52.3973Z"
                fill="#A8A4CE"
              />
            </svg>
          </div>
          <div class="absolute top-[90px] md:right-[320px] 2xl:right-[400px]">
            <svg
              width="91"
              height="112"
              viewBox="0 0 91 112"
              class="scale-x-125"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.9274 48.1386C85.0402 46.4489 80.9307 41.3638 79.7067 39.2389C78.8866 37.792 78.5774 37.387 78.2735 37.3615C76.8427 37.1638 77.9848 40.2619 80.814 44.3405L82.6211 46.9312L81.3494 46.1596C76.4199 43.1671 73.4969 42.3188 73.9041 44.0444C74.3236 45.8606 74.6072 46.1205 77.6003 47.6568C79.1469 48.4532 80.4644 49.1359 80.4925 49.1727C80.5206 49.2095 79.9522 49.3218 79.1959 49.4116C75.2836 49.8753 73.4871 51.583 75.6774 52.7384C76.4363 53.1362 78.7542 53.2293 81.7907 52.9968C83.0986 52.8845 85.3454 52.9215 86.778 53.047C91.2065 53.4086 91.241 52.0008 86.9274 48.1386ZM69.1399 40.2253C67.3219 39.2596 62.6414 37.9348 62.1697 38.2483C60.6209 39.3118 62.6066 41.7265 65.6753 42.5423C66.8426 42.8418 68.5992 43.3545 69.5916 43.6859C72.872 44.7417 72.5036 42.0235 69.1399 40.2253ZM57.7116 36.7303C55.6152 35.8843 50.5989 35.8331 50.0866 36.6151C49.2264 37.9846 51.1181 39.4938 53.5704 39.4276L57.2851 39.3385C58.4164 39.3301 59.3922 39.1553 59.4686 38.9946C59.6681 38.548 58.5302 37.0575 57.7116 36.7303ZM46.2597 37.1534C44.4627 36.5134 39.0371 40.1363 38.623 42.239C38.1077 44.9172 41.8734 43.9261 47.4834 39.8741C48.1914 39.3859 47.3523 37.5414 46.2597 37.1534ZM48.6779 44.3821C46.3006 42.572 45.7525 42.4502 45.8234 43.698C45.8873 44.6387 46.7856 45.8527 47.944 46.5132C49.6452 47.5121 52.4848 52.3495 53.1998 52.1684C54.6597 51.7708 51.6963 46.6595 48.6779 44.3821ZM53.6849 54.853C53.5233 54.9394 53.1332 55.4716 52.8432 56.0604C51.7027 58.2176 48.6763 60.4007 46.4813 60.6177C44.7948 60.793 44.6174 60.9331 44.9896 61.7188C46.5023 65.0788 52.2313 63.2691 54.4158 58.7537C55.1803 57.1472 54.6837 54.3358 53.6849 54.853ZM33.7041 38.8135C31.6473 37.535 24.0632 39.8951 24.4396 41.6922C24.7915 43.3081 26.3514 43.5631 30.3033 42.6669C31.9801 42.2927 33.7588 41.903 34.2683 41.8252C35.6807 41.5889 35.3473 39.811 33.7041 38.8135ZM36.6987 45.605C35.0835 45.2403 34.7505 49.9455 36.1155 54.0063C36.981 56.5558 40.8546 61.2201 41.7216 60.7538C42.4709 60.3568 42.1294 59.4997 40.2863 57.197C38.2886 54.6919 37.8275 53.3801 38.1206 50.8951C38.5253 47.4016 38.1269 45.9109 36.6987 45.605ZM19.3054 42.9025C17.7122 42.2313 10.8891 47.2649 11.0494 49.0025C11.3168 51.6999 13.2984 51.3151 17.2271 47.8178C20.8597 44.566 21.2288 43.7082 19.3054 42.9025ZM8.09488 52.3973C6.8618 51.8253 1.275 58.4784 1.52322 60.1821C1.99776 63.2999 3.90041 62.5881 7.06865 58.1692C9.96716 54.1048 10.1166 53.3319 8.09488 52.3973Z"
                fill="#A8A4CE"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section class="relative pt-[150px] pb-[100px]">
      <div
        class="md:w-[1200px] 2xl:w-[1400px] mx-auto my-0 py-[16px] px-[20px] relative flex items-end gap-20"
      >
        <div class="w-1/3 pb-32">
          <h2
            class="text-2xl md:text-3xl font-bold font-heading text-[#171340]"
          >
            Trending Books
          </h2>
          <p class="text-[20px] text-black/75 mt-5">
            Interesting African books Orunlans are reading at the moment that
            you might want to try
          </p>
        </div>
        <div class="w-2/3">
          <div
            ref="books"
            class="overflow-x-auto py-5 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent flex flex-nowrap gap-10 scroll-smooth"
          >
            <BookCard v-for="(book, i) in books" :key="i" :data="book" />
          </div>
          <div class="flex justify-center gap-5">
            <button
              class="h-[56px] w-[56px] rounded-full shadow-md flex justify-center items-center"
              :class="{
                'bg-primary text-white': scroll === 'left',
                'bg-white text-primary': scroll === 'right',
              }"
              @click="changeScroll('left')"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              class="h-[56px] w-[56px] rounded-full shadow-md flex justify-center items-center"
              :class="{
                'bg-primary text-white': scroll === 'right',
                'bg-white text-primary': scroll === 'left',
              }"
              @click="changeScroll('right')"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 12C20 11.4477 19.5523 11 19 11H5C4.44771 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13H19C19.5523 13 20 12.5523 20 12Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L17.5858 12L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="relative mb-[200px]">
      <div class="absolute top-0 right-0">
        <svg
          width="422"
          height="819"
          viewBox="0 0 422 819"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_29_259)">
            <circle
              cx="429.5"
              cy="389.5"
              r="389.5"
              fill="url(#paint0_radial_29_259)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_29_259"
              x="0"
              y="-40"
              width="859"
              height="859"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_29_259"
              />
            </filter>
            <radialGradient
              id="paint0_radial_29_259"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(429.5 389.5) rotate(90) scale(389.5)"
            >
              <stop
                offset="0.325503"
                stop-color="#BEFFDA"
                stop-opacity="0.47"
              />
              <stop offset="1" stop-color="#B5E3C9" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div class="absolute top-0 left-0">
        <svg
          width="472"
          height="859"
          viewBox="0 0 472 859"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_40_9117)">
            <circle
              cx="42.5"
              cy="429.5"
              r="389.5"
              fill="url(#paint0_radial_40_9117)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_40_9117"
              x="-387"
              y="0"
              width="859"
              height="859"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_40_9117"
              />
            </filter>
            <radialGradient
              id="paint0_radial_40_9117"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(42.5 429.5) rotate(90) scale(389.5)"
            >
              <stop
                offset="0.325503"
                stop-color="#BEFFDA"
                stop-opacity="0.47"
              />
              <stop offset="1" stop-color="#B5E3C9" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        class="min-h-[80vh] md:w-[1200px] 2xl:w-[1400px] mx-auto my-0 py-[16px] px-[20px] relative flex items-center justify-end gap-20"
      >
        <div class="absolute top-0 -left-[650px]">
          <AppGlobe />
        </div>
        <div class="w-1/2">
          <h2
            class="text-2xl md:text-3xl font-bold font-heading text-[#171340] w-1/2"
          >
            Join book loving clubs or create yours
          </h2>
          <p class="text-[20px] text-black/75 mt-5 w-2/3">
            Become part of book loving communties where you can share book
            reviews, engage in book-related discussions, and participate in
            reading challenges.
          </p>
          <div class="mt-10" />
          <a href="" class="inline-block">
            <AppButton shadow>Explore Clubs</AppButton>
          </a>
        </div>
      </div>
    </section>
    <section class="pb-[100px]">
      <div
        class="md:w-[1200px] 2xl:w-[1400px] mx-auto my-0 py-[16px] px-[20px] relative"
      >
        <div class="bg-[#EEF9F3] rounded-[16px] py-32 text-center">
          <h3
            class="text-2xl md:text-3xl font-bold font-heading text-[#171340] relative inline-block"
          >
            Subscribe to our Newsletter
            <svg
              width="52"
              height="72"
              viewBox="0 0 52 72"
              class="absolute -top-10 md:-right-12"
            >
              <path
                d="M16.6077 60.0322C16.1074 61.438 19.4429 61.8972 30.8078 62.0328C42.8395 62.1689 45.5724 61.7826 45.5479 60.0991C45.4833 57.7891 17.4768 57.7685 16.6077 60.0322Z"
                fill="#CECCE4"
              />
              <path
                d="M20.8156 6.76521C16.3701 6.34194 15.593 7.03126 10.0626 16.2794C4.34066 25.8274 3.62529 27.7101 5.273 28.5878C8.26966 30.1665 10.5714 27.9685 18.2203 16.3988C23.8588 7.8607 24.0968 7.07761 20.8156 6.76521Z"
                fill="#CECCE4"
              />
              <path
                d="M41.4112 25.261C38.2618 24.9243 36.9413 25.42 32.2054 28.6721C18.1881 38.3636 7.52584 44.3638 13.6911 44.9007C16.203 45.1362 18.9658 43.5575 35.6806 32.6735C44.8969 26.6203 45.6169 25.7379 41.4112 25.261Z"
                fill="#CECCE4"
              />
            </svg>
          </h3>
          <div class="text-[20px] text-black/75 mt-5 mx-auto px-[20px] w-1/2">
            Become part of book loving communties where you can share book
            reviews, engage in book-related discussions, and participate in
            reading challenges.
            <p class="text-primary mt-1 text-md">
              Don't worry, we don't spam😉
            </p>
          </div>
          <form action="" class="mt-10" @sumbit.prevent="">
            <div
              class="group inline-flex items-center gap-5 border border-primary/50 focus-within:border-primary/75 bg-white my-0 mx-auto px-5 py-3 rounded-[8px]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="h-[30px] w-auto text-[#7F79B8] group-focus-within:text-primary"
              >
                <path
                  d="M14.6667 5.02344V11.3334C14.6667 11.8436 14.4718 12.3344 14.1218 12.7056C13.7718 13.0768 13.2933 13.3002 12.784 13.3301L12.6667 13.3334H3.33333C2.82319 13.3335 2.33232 13.1386 1.96115 12.7886C1.58999 12.4386 1.36659 11.96 1.33666 11.4508L1.33333 11.3334V5.02344L7.62999 9.22144L7.70733 9.26544C7.79847 9.30997 7.89856 9.33311 8 9.33311C8.10143 9.33311 8.20153 9.30997 8.29266 9.26544L8.37 9.22144L14.6667 5.02344Z"
                  fill="currentColor"
                />
                <path
                  d="M12.6667 2.66675C13.3867 2.66675 14.018 3.04675 14.37 3.61808L8.00001 7.86475L1.63 3.61808C1.79716 3.34659 2.02681 3.11902 2.29981 2.95434C2.57281 2.78966 2.88123 2.69265 3.19934 2.67141L3.33334 2.66675H12.6667Z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="email"
                class="w-[500px] bg-transparent outline-none hover:outline-none focus:outline-none placeholder:font-semibold placeholder:text-primary/50"
                placeholder="Your Email"
              />
              <AppButton>Submit</AppButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArrowOfGod from '~/assets/img/arrow-of-god.jpg'
import DeepWorks from '~/assets/img/deep-work-cover.jpg'
import Americanah from '~/assets/img/americanah.jpg'
import RDPD from '~/assets/img/rich-dad-poor-dad.jpg'

export default {
  name: 'IndexPage',
  data() {
    return {
      scroll: 'right',
      title: 'Discover the new way to read with friends on Orunla',
      description:
        'Reading made fun and rewarding. Level up your reading skills and unlock rewards as you progress.',
      books: [
        {
          img: ArrowOfGod,
          about: `Arrow of God, the second novel in Chinua Achebe's The African
              Trilogy, moves the historical narrative forward.`,
        },
        {
          img: DeepWorks,
          about: `Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. `,
        },
        {
          img: Americanah,
          about: `Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be Black for the first time.`,
        },
        {
          img: RDPD,
          about: `Rich Dad Poor Dad is Robert's story of growing up with two dads his real father and the father of his best friend, his rich dad and the ways in which both men shaped his thoughts about money and investing. `,
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    }
  },
  methods: {
    changeScroll(position) {
      if (position === 'right') {
        this.$refs.books.scrollLeft += 430
      } else {
        this.$refs.books.scrollLeft = 0
      }
      this.scroll = position
    },
  },
}
</script>
