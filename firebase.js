import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDbyc8VdyZWsT7v0Y77W3-fosv0vpgBwrk",
  authDomain: "react-mde-notes-1b004.firebaseapp.com",
  projectId: "react-mde-notes-1b004",
  storageBucket: "react-mde-notes-1b004.appspot.com",
  messagingSenderId: "798632642568",
  appId: "1:798632642568:web:c80876f50229ab9f8e69bd"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
