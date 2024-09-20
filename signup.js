// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore,doc,setDoc, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signUPuser = () => {
  var obj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      obj.id = res.user.uid;
      const refernce = doc(db, "users", obj.id);
      setDoc(refernce, obj)
        .then((res) => {
          alert(res.message)
        })
        .catch((err) => {
          alert(err.message);
        });
    })
    .catch((err) => {
      alert(err.message);
    });
};
