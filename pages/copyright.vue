<template>
  <div class="md:px-32 text-justify">
    <section
      class="py-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-white min-h-screen"
    >
      <h1 class="text-2xl text-primary font-heading mb-5">Copyright Policy</h1>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Introduction</h2>
        <p>
          This Copyright Policy (the "Policy") governs the ownership and use of copyrights on the Website located at <nuxt-link to="/" class="text-secondary underline">the "Website"</nuxt-link>.
          <br />By using the Website, you agree to be bound by this Policy.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Copyright Ownership</h2>
        <p>
          The Website respects the copyrights of others and expects its users to do the same. All content on the Website is the property of the Website owner or its content contributors. You may not copy, distribute, modify, or reproduce any content on the Website without the express written permission of the Website owner or the content contributor.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Copyright Infringement</h2>
        <p>
          If you believe that your copyright has been infringed on the Website, you may submit a written notice to the Website owner at <a href="mailto:hi@orunla.ng" class="text-secondary underline">hi@orunla.ng</a>. Your notice must include the following information:
          <ul class="my-1 list-disc list-inside">
            <li>Your name, address, and telephone number</li>
            <li>The copyrighted work that you believe has been infringed</li>
            <li>The location on the Website where the infringing material is located</li>
            <li>A statement that you have a good faith belief that the use of the copyrighted material is not authorized by the copyright owner, its agent, or the law</li>
            <li>A statement that you will suffer irreparable harm if the infringing material is not removed</li>
            <li>A request that the infringing material be removed</li>
          </ul>
          The Website owner will review your notice and take appropriate action. If the Website owner determines that your copyright has been infringed, the infringing material will be removed from the Website.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Limitation of Liability</h2>
        <p>
          The Website owner is not liable for any damages resulting from copyright infringement on the Website. The Website owner has no obligation to monitor the Website for infringing material. However, if the Website owner becomes aware of infringing material, the Website owner will remove it from the Website.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Changes to the Policy</h2>
        <p>
          The Website owner may change this Policy at any time. If the Website owner makes any material changes to the Policy, the Website owner will notify you by email or by posting the changes on the Website. You are responsible for reviewing the Policy periodically to be aware of any changes. Your continued use of the Website after any changes to the Policy constitutes your acceptance of the new Policy.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Governing Law</h2>
        <p>
          This Policy will be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or relating to this Policy will be subject to the exclusive jurisdiction of the courts of the Federal Republic of Nigeria.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Entire Agreement</h2>
        <p>
          This Policy constitutes the entire agreement between you and the Website owner regarding the use of the Website. This Policy supersedes any prior or contemporaneous communications, representations, or agreements, whether oral or written.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Severability</h2>
        <p>
          If any provision of this Policy is held to be invalid or unenforceable, such provision will be struck from this Policy and the remaining provisions will remain in full force and effect.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Waiver</h2>
        <p>
          The Website owner's failure to enforce any provision of this Policy will not constitute a waiver of such provision.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Notices</h2>
        <p>
          All notices and other communications under this Policy will be in writing and will be deemed to have been duly given when delivered in person, upon the first business day following deposit in the mail, postage prepaid, certified or registered, return receipt requested, addressed as follows:
          <br /><br />
          <b>ORUNLA Books Store Africa</b><br />
          No. 6, Behind LEA Primary School,<br />Ruga-Auta - Mararaba, Karu,<br />Nasarawa State, Nigeria.
          <br /><br />
          or to such other address as either party may designate in writing from time to time.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CopyrightPage',
  data() {
    return {
      title: 'Copyright Policy - Orunla',
      description: 'This Copyright Policy (the "Policy") governs the ownership and use of copyrights on the Website located at the "Website". By using the Website, you agree to be bound by this Policy.'
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
