import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROYECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
initializeApp(firebaseConfig);

export const saveAwnser = async (data) => {
  try {
    const awnserSaved = await addDoc(collection(database, "awnsers"), {
      ...data,
    });
    sessionStorage.setItem("userID", awnserSaved.id.toString());
  } catch (err) {
    console.error("Can't save your anwser: ", err);
  }
};

export const checkEmail = async () => {
  try {
    const awnsers = await getDocs(collection(database, "awnsers"));
    const registerUsers = awnsers?.docs?.map((item) => item.data());
    return registerUsers;
  } catch (err) {
    console.error("something was wrong: ", err);
  }
};

export const updateUserAwnser = async (data) => {
  try {
    const awnsers = await getDocs(collection(database, "awnsers"));
    const awnserWithSameEmail = awnsers?.docs?.find((awnser) => awnser.data().email === data.email);
    sessionStorage.setItem("userID", awnserWithSameEmail.id.toString());
    await setDoc(
      doc(database, "awnsers", awnserWithSameEmail.id),
      { ...data },
      { merge: true }
    );
  } catch (err) {
    console.error("Can't load user awnser: ", err);
  }
};
