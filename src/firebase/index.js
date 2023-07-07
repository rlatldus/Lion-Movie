import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyAETufK72MSllV8jqp2AsQUtJLdRh0hPDk",
  authDomain: "movie-33ea4.firebaseapp.com",
  databaseURL: "https://movie-33ea4-default-rtdb.firebaseio.com",
  projectId: "movie-33ea4",
  storageBucket: "movie-33ea4.appspot.com",
  messagingSenderId: "785708981878",
  appId: "1:785708981878:web:9f34e3a6b329bed9580957",
  measurementId: "G-5DJ03P9ZKV",
};

const app = initializeApp(config);

const auth = getAuth(app);
const db = getFirestore(app);
//Google 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth,provider,db };
