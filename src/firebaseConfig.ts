import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrXuv0GOoZhswqtrqPbTh_ECn0kmEf_Mc",
  authDomain: "backend-starwars.firebaseapp.com",
  projectId: "backend-starwars",
  storageBucket: "backend-starwars.firebasestorage.app",
  messagingSenderId: "640244939173",
  appId: "1:640244939173:web:428e5adcf5bd86e93cd04c",
  measurementId: "G-FSG40M81DX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// export { app, auth };