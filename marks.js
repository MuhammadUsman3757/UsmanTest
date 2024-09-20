// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
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

function uploadMarks() {
    let course = document.getElementById("course").value;
    let studentId = document.getElementById("studentId").value;
    let marks = document.getElementById("marks").value;
    let totalMarks = document.getElementById("totalMarks").value;
    let grade = document.getElementById("grade").value;

    // You can implement the logic to send this data to the server.
    alert(`Marks Uploaded for Student ID: ${studentId}\nCourse: ${course}\nMarks: ${marks}/${totalMarks}\nGrade: ${grade}`);
}
