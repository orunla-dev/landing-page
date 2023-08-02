<template>
  <div class="md:px-32 text-justify">
    <section
      class="py-10 px-5 md:py-20 md:px-10 2xl:px-28 bg-white min-h-screen"
    >
      <h1 class="text-2xl text-primary font-heading mb-5">Privacy Policy</h1>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Introduction</h2>
        <p>
          This Privacy Policy (the "Policy") governs the collection, use, and sharing of personal information by <nuxt-link to="/" class="text-secondary underline">Orunla Africa</nuxt-link>.
          <br />By using the Website, you agree to be bound by this Policy.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">What Personal Information is Collected</h2>
        <p>
          The Website collects the following personal information from users:
          <ul class="mt-1 list-disc list-inside">
            <li>Email address</li>
            <li>Name</li>
            <li>Picture</li>
            <li>Contact information</li>
          </ul>
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">How Personal Information is Collected</h2>
        <p class="">
          The Website collects personal information from users through the following methods:
          <ul class="mt-1 list-disc list-inside">
            <li>Website forms</li>
            <li>Account registration</li>
            <li>Cookies</li>
            <li>Other tracking technologies</li>
          </ul>
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">How Personal Information is Used</h2>
        <p>
          The Website uses personal information for the following purposes:
          <ul class="mt-1 list-disc list-inside">
            <li>To provide services to users</li>
            <li>To send marketing communications to users</li>
            <li>To improve the Website</li>
            <li>To comply with legal requirements of the Federal Republic of Nigeria</li>
          </ul>
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Who Has Access to Personal Information</h2>
        <p>
          The Website may share personal information with the following third parties:
          <ul class="mt-1 list-disc list-inside">
            <li>Supabase, which is the backend that the Website is built on</li>
            <li>Third party auth providers, such as Facebook, Twitter, and Google</li>
          </ul>
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">How Long Personal Information is Retained</h2>
        <p>
          The Website retains personal information for as long as necessary to provide services to users, send marketing communications, improve the Website, and comply with legal requirements of the Federal Republic of Nigeria.
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">How Users Can Control Their Personal Information</h2>
        <p>
          Users can control their personal information in the following ways:
          <ul class="mt-1 list-inside list-disc">
            <li>Opt out of marketing communications</li>
            <li>Delete their account</li>
          </ul>
        </p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">How Users Can Contact the Website</h2>
        <p>If you have any questions or concerns about this Policy, you can contact the Website at: <a href="mailto:hi@orunla.ng" class="text-secondary underline">hi@orunla.ng</a></p>
      </div>
      <div class="mb-5">
        <h2 class="text-xl font-heading">Changes to the Policy</h2>
        <p>
          The Website may change this Policy at any time. If we make any material changes to the Policy, we will notify you by email or by posting the changes on the Website. You are responsible for reviewing the Policy periodically to be aware of any changes. Your continued use of the Website after any changes to the Policy constitutes your acceptance of the new Policy.
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
          This Policy constitutes the entire agreement between you and us regarding the use of the Website. This Policy supersedes any prior or contemporaneous communications, representations, or agreements, whether oral or written.
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
        <p>Our failure to enforce any provision of this Policy will not constitute a waiver of such provision.</p>
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
  name: 'TermsPage',
  data() {
    return {
      title: 'Privacy Policy - Orunla',
      description: 'This Privacy Policy (the "Policy") governs the collection, use, and sharing of personal information by Orunla Africa. By using the Website, you agree to be bound by this Policy.'
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
