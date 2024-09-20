// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
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
const db = getFirestore();
  
let cnic = document.getElementById("editCnic");
let firstName = document.getElementById("editFirstName");
let lastName = document.getElementById("editLastName");

window.editProfile = () => {
  let obj = {
    cnic:cnic.value,
    firstName:firstName.value,
    lastName:lastName.value,
  }
  console.log(obj);
  const refernce = doc(db, "student", "inform")
  setDoc(refernce,obj)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    alert(err.message)
  })

    // You can implement the logic to update the profile data.
    // alert(`Profile Updated:\nCNIC: ${cnic}\nName: ${firstName} ${lastName}`);
}


