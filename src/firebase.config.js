import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtMbChdT11-nStRVexo3CUNFCYCA9ZcdY",
  authDomain: "coffee-shop-b52e6.firebaseapp.com",
  projectId: "coffee-shop-b52e6",
  storageBucket: "coffee-shop-b52e6.firebasestorage.app",
  messagingSenderId: "583869381267",
  appId: "1:583869381267:web:840ec5dd06793e0401eb66",
  measurementId: "G-V6Z2M0C238"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;