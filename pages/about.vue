<template>
  <div class="min-h-screen">
    <section
      class="py-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-primary bg-opacity-5 md:text-center md:h-[70vh] relative overflow-hidden"
    >
      <div class="mt-10 mb-20 md:mt-0 md:w-2/3 inline-block">
        <h1
          class="mb-1 mx-5 md:mx-0 text-[40px] leading-[40px] md:text-[45px] 2xl:text-[62px] md:leading-[70px] text-[#171340] font-extrabold font-heading"
        >
          Driving the
          <span class="text-secondary/75">passion for reading</span>; Telling
          the African story through written, audio and digital literature.
        </h1>
        <h2 class="text-2xl mt-2 text-slate-800 font-bold">- Orunla Africa</h2>
      </div>
      <div class="absolute -bottom-40 right-0 left-0 flex justify-center">
        <img src="~/static/Orunla.png" class="opacity-75 grayscale" alt="Orunla Africa's Logo" />
      </div>
    </section>
    <section
      class="w-full md:w-[1200px] 2xl:w-[1400px] mx-auto my-0 py-[100px] px-[20px]"
    >
      <div class="flex flex-col gap-10 justify-between md:flex-row">
        <div class="md:w-1/2">
          <h2
            class="text-2xl md:text-3xl font-bold font-heading text-[#171340]"
          >
            Our 'Why?'
          </h2>
          <p class="mt-3 text-justify">
            Most book shelves in Africa are filled with books from outside the continent, including those about the continent. And these Western books are too pricey for
            young adults and teens. Young Africans are forced to rely on prirated or free ebooks available online to get extra curricular knowledge.
            <br /><br />
            This among other challenges facing the African literacy space is our motivation for Orunla. The continent rates the lowest in comparison to other continents' literacy score. No wonder the massive underdevelopment and poverty experienced in the continent.
            According to Nelson Mandela: "Reading is the key that opens doors to many good things in life. Reading shaped my dreams and more reading helped me make my dreams come true". Orunla is on a mission to help young Africans shape and make their dreams come through. 
            <br /><br />
            By providing cheap access to books for the young African, we believe this would pave way for Africans to tell their own story; through written, audio and digital literature.
          </p>
        </div>
        <div class="md:w-1/2">
          <div
            class="md:ml-20 flex flex-col justify-end items-end gap-5 pl-2 relative"
          >
            <div class="rounded-[24px] bg-white shadow-lg p-10">
              <h3
                class="my-8 text-xl md:text-2xl font-bold font-heading text-[#171340]"
              >
                Mission
              </h3>
              <p class="mt-3">
                To drive the passion for reading in African youths; and tell the
                African story through written, audio and digital literature.
              </p>
            </div>
            <div class="rounded-[24px] bg-white shadow-lg p-10">
              <h3
                class="my-8 text-xl md:text-2xl font-bold font-heading text-[#171340]"
              >
                Vision
              </h3>
              <p class="mt-3">
                We at Orunla seek to provide every individual with the most
                affordable opportunity to read and become leaders of themselves
                and the society around them.
              </p>
            </div>
          </div>
          <div class="md:ml-20 mt-16">
            <h2
              class="text-2xl md:text-3xl font-bold font-heading text-[#171340]"
            >
              Our Mailing Address
            </h2>
            <h3 class="font-heading font-bold text-primary mt-3">
              ORUNLA Books Store Africa
            </h3>
            No. 6, Behind LEA Primary School,<br />Ruga-Auta - Mararaba,
            Karu,<br />Nasarawa State, Nigeria.
            <div class="flex gap-2 my-4">
              <div class="w-1/4 pt-1 bg-primary rounded" />
              <div class="w-[10px] pt-1 bg-[#171340] rounded" />
              <div class="w-[20px] pt-1 bg-secondary rounded" />
            </div>
            No. 105, Okporo Rd., <br />
            Rumuodara, Port-Harcourt,<br />
            Rivers State, Nigeria.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      title: 'About - Orunla',
      description:
        'Driving the passion for reading; Telling the African story through written, audio and digital literature.',
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
}
</script>
