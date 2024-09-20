// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, doc, getDoc, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ic_wOjx_HDcQRXXGfAjUQbc3uGx7aAU",
  authDomain: "hackathon-2617d.firebaseapp.com",
  projectId: "hackathon-2617d",
  storageBucket: "hackathon-2617d.appspot.com",
  messagingSenderId: "195798586968",
  appId: "1:195798586968:web:f848e97111b12831badc2d",
  measurementId: "G-744Z6FC50N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

window.loginUser = () => {
  let obj = {
    email: email.value,
    password: password.value,
  }
  console.log(obj);
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
      const id = res.user.uid;
      const refernce = doc(db, "users", id);
      const dt = await getDoc(refernce);
      if (dt.exists()) {
        alert("Document data:", dt.data());
      } else {

        alert("No such document!");
      }
    })
    .catch((err) => {
      alert(err.message)
    })

  // You can implement the logic to authenticate the user.
  // alert(`Logged in with:\nEmail: ${email}`);
}
