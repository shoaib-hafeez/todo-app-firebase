 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import {  getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAvz1yld-VwX9lIa3UndpLL1Uv_8dtAULk",
   authDomain: "todoapp-with-database-72dd1.firebaseapp.com",
   projectId: "todoapp-with-database-72dd1",
   storageBucket: "todoapp-with-database-72dd1.appspot.com",
   messagingSenderId: "519269223964",
   appId: "1:519269223964:web:4adfc5d4a7f191b90f99d9",
   measurementId: "G-87DBGR3F0H"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase()

 


 var inp = document.getElementById("input")
 var ul = document.getElementById("list");
 
 window.add = function () {
   // console.log(inp.value)
 
   var idRef = ref(database, "todos");
   var id = push(idRef).key;
   // console.log(id)
 
   var obj = {
     todos: inp.value,
     id: id,
   }
   var refrence = ref(database, `todos/${id}/`);
   set(refrence, obj);
 }
 
 function getTodo() {
   var refrence = ref(database, "todos");
   onValue(refrence, function (data) {
     // console.log(data)
     var dataObj = data.val();
     var list = Object.values(dataObj || {});
     render(list);
   })
 }
 getTodo();
 
 function render(data) {
   ul.innerHTML = ""
   for (var i = 0; i < data.length; i++) {
     ul.innerHTML += `<li>
         ${data[i].todos}<button onclick = "del('${data[i].id}')">Delete</button> <button onclick = "edit('${data[i].id}')">Edit</button>
         </li>`
   }
 }
 
 window.del = function (id) {
   var refrence = ref(database, `/todos/${id}`)
   remove(refrence,);
 
 }
 
 window.edit = function (id) {
   var text = prompt('Enter new text');
   console.log(update)
   var refrence = ref(database, `/todos/${id}`)
   var obj = {
     todos: text
   }
   update(refrence, obj)
 }