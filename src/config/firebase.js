import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_API_KEY,
  projectId: process.env.VUE_APP_API_KEY,
  storageBucket: process.env.VUE_APP_API_KEY,
  messagingSenderId: process.env.VUE_APP_API_KEY,
  appId: process.env.VUE_APP_API_KEY,
  measurementId: process.env.VUE_APP_API_KEY
}

const app = initializeApp(config);
const auth = getAuth(app);

export { app, auth }; 