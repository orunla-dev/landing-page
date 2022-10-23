import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import { onAuthStateChanged } from "firebase/auth"
// import { auth } from "../config/firebase"
// import { UID } from "../utils/constants"

Vue.use(VueRouter)

// function guard(to, from, next) {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       localStorage.setItem(UID, user.uid);
//       next()
//     } else {
//       next("/auth")
//     }
//   })
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: guard
  },
  {
    path: "/auth",
    name: "AuthPage",
    component: () => import("../views/Auth.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
