import ReactDOM from 'react-dom/client'
import App from "@/app/ui/App.tsx";

import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import '@/assets/styles/index.scss'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
  </Provider>
)

