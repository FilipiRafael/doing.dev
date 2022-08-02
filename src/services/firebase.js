import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB36UUjsUO7cMcyVahg9P-fL5-_s8Q1DJ8',
  authDomain: 'doingdev.firebaseapp.com',
  projectId: 'doingdev',
  storageBucket: 'doingdev.appspot.com',
  messagingSenderId: '1021206380765',
  appId: '1:1021206380765:web:1ef75bc95ebce783bfdb34'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);