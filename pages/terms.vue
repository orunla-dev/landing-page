<template>
  <div class="md:px-32 text-justify">
    <section class="py-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-white min-h-screen">
      <h1 class="text-2xl text-primary font-heading mb-5">Terms of Service</h1>
      <div class="mb-5">
        <h2 class="text-xl font-heading">1. Introduction</h2>
        <p>
          This Terms of Service (the "Terms") govern your use of the website located at <nuxt-link to="/" class="text-secondary underline">orunla.ng</nuxt-link>.
          <br />By using the Website, you agree to be bound by these Terms.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">2. User Responsibilities</h2>
        <p>
          In order to use the Website, you must provide us with accurate and current information, including your email address. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. You agree not to:
          <ul class="mt-1 list-disc list-inside">
            <li>Use the Website for any illegal or unauthorized purpose.</li>
            <li>Use the Website to harm or exploit others.</li>
            <li>Transmit any spam, unsolicited or bulk email, or any other form of unsolicited communication.</li>
            <li>Violate any applicable laws or regulations of Nigeria.</li>
          </ul>
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">3. Website Owner Responsibilities</h2>
        <p>
          We will use your email address to send you promotional content about our products and services. We will not share your email address with third parties.
          We will take reasonable steps to protect the security of your information. However, we cannot guarantee the security of your information and you agree that we will not be liable for any unauthorized access to your information.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">4. Changes to the Terms</h2>
        <p>We may change these Terms at any time. If we make any material changes to the Terms, we will notify you by email or by posting the changes on the Website. You are responsible for reviewing the Terms periodically to be aware of any changes. Your continued use of the Website after any changes to the Terms constitutes your acceptance of the new Terms.</p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">5. Termination</h2>
        <p>We may terminate your access to the Website at any time for any reason. If we terminate your access, you will no longer be able to use the Website.</p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">6. Governing Law</h2>
        <p>These Terms will be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or relating to these Terms will be subject to the exclusive jurisdiction of the courts of the Federal Republic of Nigeria.</p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">7. Entire Agreement</h2>
        <p>These Terms constitute the entire agreement between you and us regarding the use of the Website. These Terms supersede any prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">8. Severability</h2>
        <p>If any provision of these Terms is held to be invalid or unenforceable, such provision will be struck from these Terms and the remaining provisions will remain in full force and effect.</p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">9. Waiver</h2>
        <p>Our failure to enforce any provision of these Terms will not constitute a waiver of such provision.</p>
      </div>
      <div class="mb-3">
        <h2 class="text-xl font-heading">10. Notices</h2>
        <p>
          All notices and other communications under these Terms will be in writing and will be deemed to have been duly given when delivered in person, upon the first business day following deposit in the mail, postage prepaid, certified or registered, return receipt requested, addressed as follows:
          <br /><br />
          <b>ORUNLA Books Store Africa</b><br />
          No. 6, Behind LEA Primary School,<br />Ruga-Auta - Mararaba, Karu,<br />Nasarawa State, Nigeria.
          <br /><br />
          or to such other address as either party may designate in writing from time to time.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">11. Acceptance of Changes</h2>
        <p>By using the Website after any changes to the Terms have been made, you agree to be bound by the new Terms.</p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">12. Governing Language</h2>
        <p>These Terms are written in English and will be interpreted in accordance with the laws of the Federal Republic of Nigeria.</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'TermsPage',
  data() {
    return {
      title: 'Terms of Service - Orunla',
      description: 'This Terms of Service (the "Terms") govern your use of the website located at orunla.ng. By using the Website, you agree to be bound by these Terms.'
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