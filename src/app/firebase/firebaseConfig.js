import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzwlQD53bn80BDDIiTpP_OnZfH5up7wSs",
  authDomain: "kalamanacopydb.firebaseapp.com",
  databaseURL: "https://kalamanacopydb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kalamanacopydb",
  storageBucket: "kalamanacopydb.firebasestorage.app",
  messagingSenderId: "444364295916",
  appId: "1:444364295916:web:668f0ddd0b3297f3efdfc9",
  measurementId: "G-HCZYY0Z32Q",
  cookieOptions: {
    secure: true,
    sameSite: "strict",
  },
};
const app = initializeApp(firebaseConfig);
const myDatabase = getDatabase(app);

export { myDatabase, ref, get, set, update, remove };
