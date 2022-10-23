<template>
  <div class="h-screen bg-secondary bg-opacity-75 overflow-hidden px-5 pt-8">
    <logo-icon :width="20" :height="20" />
    <div class="mt-20 overflow-hidden">
      <div class="w-10/12">
        <h1 class="font-bold text-3xl mb-5">Get access to unlimited supply of books with Orunla</h1>
        <p class="text-lg">We have made signing up on Orunla simple and fast with a click.</p>
      </div>
      <div @click="signIn()" class="bg-white text-primary w-4/6 flex gap-2 items-center font-bold rounded p-0 mt-10 shadow-md hover:shadow-none transition-shadow">
        <google-icon />
        Continue with Google
      </div>
      <img
        alt="Image of an iPhone showing the Orunla application"
        src="https://res.cloudinary.com/iwe-ng/image/upload/v1666485098/Orunla/book-categories.png"
        class="fixed bottom-0 right-0 left-0 mx-auto my-0"
      />
    </div>
  </div>
</template>

<script>
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import { auth } from "@/config/firebase"

export default {
  name: "AuthView",
  components: {
    LogoIcon: () => import("@/assets/icons/Logo.vue"),
    GoogleIcon: () => import("@/assets/icons/Google.vue"),
  },
  methods: {
    signIn() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log(credentials)
        const user = result.user
        console.log(user)
      }).catch((error) => {
        console.log(error);
        this.$message.error(error);
      })
    }
  }
};
</script>