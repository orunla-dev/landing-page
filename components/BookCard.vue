<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div
    href="http://app.orunla.ng"
    class="group flex-shrink-0 w-[270px] p-5 bg-secondary/20 hover:bg-secondary/25 rounded-[16px] hover:shadow-md opacity-75 hover:opacity-100 relative"
  >
    <div
      class="bg-cover rounded-[8px]"
      :style="`background-image: url(${data.img})`"
    >
      <div
        class="bg-contain bg-no-repeat bg-center py-32 px-20 backdrop-blur-xl rounded-[8px]"
        :style="`background-image: url(${data.img})`"
      ></div>
    </div>
    <p class="mt-7 mb-2 line-clamp-3 cursor-default">
      {{ data.about }}
    </p>
    <div
      class="absolute top-[250px] right-7 transition-opacity ease-in-out opacity-0 group-hover:opacity-100"
    >
      <div
        class="rounded-full h-[56px] w-[56px] bg-primary shadow-xl flex items-center justify-center cursor-pointer text-white hover:text-white/75"
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
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
