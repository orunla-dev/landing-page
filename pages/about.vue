<template>
  <div class="min-h-screen">
    <section
      class="py-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-primary bg-opacity-5 md:text-center md:h-[70vh] relative overflow-hidden"
    >
      <div class="mt-10 mb-20 md:mt-20 md:w-2/3 inline-block">
        <h1 class="text-3xl md:text-4xl font-heading text-primary font-bold">
          Driving the passion for reading; Telling the African story through
          written, audio and digital literature.
        </h1>
        <h2 class="text-2xl mt-2 text-slate-800 font-bold">- Orunla Africa</h2>
      </div>
      <div class="absolute -bottom-40 right-0 left-0 flex justify-center">
        <img src="~/static/Orunla.png" class="opacity-75 grayscale" />
      </div>
    </section>
    <section class="py-10 px-5 md:py-20 md:px-10 2xl:px-28">
      <div class="flex flex-col gap-10 md:flex-row">
        <div class="md:w-1/2">
          <h2 class="font-heading text-2xl text-primary">Our Story</h2>
          <p class="mt-3 text-justify">
            In hac habitasse platea dictumst. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur at sem et nisi ornare fringilla at nec mi. Nunc sit amet
            nunc ante. Pellentesque a purus mauris. Pellentesque maximus
            eleifend enim, nec lobortis leo ultrices vel. Nunc diam nisl,
            iaculis quis urna volutpat, consectetur tincidunt massa. Sed vitae
            magna tellus.
            <br /><br />
            Duis ex elit, aliquam a sagittis ut, imperdiet eu
            purus. Etiam sollicitudin lorem felis, quis pharetra quam sagittis
            sed. Nam eleifend nisi nec neque ultricies eleifend. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus aliquet lacinia magna suscipit elementum.
            Nullam non suscipit orci. Pellentesque elit quam, commodo in
            pellentesque in, ornare non dui. Ut ornare fringilla consequat.
            Morbi vestibulum efficitur ipsum vel feugiat. Pellentesque gravida
            volutpat ante, vel imperdiet orci convallis ac. Suspendisse sed orci
            lacinia, gravida urna et, pretium libero. Sed porta velit diam, nec
            gravida diam scelerisque a. Duis sed dapibus elit, quis elementum
            ligula. Vestibulum convallis rutrum tortor in elementum.
            <br /><br />
            Phasellus
            molestie lectus vitae felis dignissim cursus. Morbi id augue nec
            tortor facilisis imperdiet nec a leo. Praesent tempor feugiat est a
            vestibulum. Vestibulum dapibus quam at convallis finibus. In nec
            vestibulum mi. In non lectus non sem rutrum molestie sed vitae mi.
            Vestibulum accumsan pretium blandit. Fusce faucibus quam vitae augue
            ultricies, ac congue justo efficitur. Praesent viverra ultricies
            erat sed interdum. Donec nec sodales est, pharetra luctus enim. In
            tincidunt leo eget feugiat euismod. Maecenas non luctus magna, non
            imperdiet neque. Vestibulum pretium scelerisque sem. Etiam sit amet
            turpis neque.
          </p>
        </div>
        <div class="md:w-1/2">
          <div class="md:ml-20 flex flex-col gap-5 pl-2 relative">
            <div class="absolute top-10 bottom-44 left-0">
              <div class="bg-slate-300 p-2 rounded-full" />
              <div class="h-full w-1 bg-slate-200 my-0 mx-auto" />
              <div class="bg-slate-300 p-2 rounded-full" />
            </div>
            <div class="bg-primary bg-opacity-5 border-4 rounded-xl p-5 md:w-2/3">
              <h3 class="text-xl font-heading text-primary">Mission</h3>
              <p class="mt-3">
                To drive the passion for reading in African youths; and tell the African story through written, audio and digital literature.
              </p>
            </div>
            <div class="bg-primary bg-opacity-5 border-4 rounded-xl p-5 md:w-2/3">
              <h3 class="text-xl font-heading text-primary">Vision</h3>
              <p class="mt-3">
                We at Orunla seek to provide every individual wwith the most affordable opportunity to read and become leaders of themselves and the society around them.
              </p>
            </div>
          </div>
          <div class="md:ml-20 mt-16">
            <h2 class="font-heading text-2xl text-primary">Our Mailing Address</h2>
            <h3 class="font-heading font-bold text-primary mt-3">ORUNLA Books Store Africa</h3>
            No. 6, Behind LEA Primary School,<br />Ruga-Auta - Mararaba, Karu,<br />Nasarawa State, Nigeria.
            <br /><br />
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
      description: 'Driving the passion for reading; Telling the African story through written, audio and digital literature.'
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
