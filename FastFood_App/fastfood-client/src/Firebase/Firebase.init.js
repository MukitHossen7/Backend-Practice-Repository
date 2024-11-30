import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// apiKey: "AIzaSyB4GNBeR6C_ZTFlyZEM9fhwr-ZrO4HOMTA",
// authDomain: "fast-food-4f99f.firebaseapp.com",
// projectId: "fast-food-4f99f",
// storageBucket: "fast-food-4f99f.firebasestorage.app",
// messagingSenderId: "873631579782",
// appId: "1:873631579782:web:6023f9ceb8723f5b549b07",
