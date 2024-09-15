import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence  } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyB7_FDSt0gUrgpQImVnSYj56GBG_MTs35A",
  authDomain: "vehiqr-spott.firebaseapp.com",
  projectId: "vehiqr-spott",
  storageBucket: "vehiqr-spott.appspot.com",
  messagingSenderId: "760283279034",
  appId: "1:760283279034:web:319c6f7a4c22ca0b299c83"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage) // Ensure persistence is set up
});

export { auth };
