import {
  getStorage as e,
  ref as t,
  uploadBytes as a,
  getDownloadURL as l,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {
  push as n,
  getDatabase as i,
  ref as s,
  set as o,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { initializeApp as d } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
let firebaseConfig = {
    apiKey: "AIzaSyCBG_ROmIHuhqFTINymRfk8hAa-ovwBch4",
    authDomain: "hsrp-3bdc8.firebaseapp.com",
    projectId: "hsrp-3bdc8",
    storageBucket: "hsrp-3bdc8.appspot.com",
    messagingSenderId: "256720707376",
    appId: "1:256720707376:web:8a082da4b3b27161e3f2f5",
  },
  app = d(firebaseConfig),
  database = i(app);
function btn2Fun() {
  let e = document.getElementById("txtEmail").value,
    t = document.getElementById("txtPhoneNo").value,
    a = document.getElementById("txtName").value;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    if (/^\d{10}$/.test(t)) {
      if ("" == a) alert("Please enter a valid name");
      else {
        let l = document.getElementById("ddlVehicleRegState").value,
          n = document.getElementById("txtRegNo").value,
          i = document.getElementById("txtChasisNo").value,
          d = document.getElementById("txtEngineNo").value,
          r = document.getElementById("progressBar2");
        o(s(database, "details/" + n), {
          name: a,
          email: e,
          phone: t,
          state: l,
          vehicleRegNo: n,
          chasisNo: i,
          engineNo: d,
        }),
          (r.parentElement.style.display = "block");
        let c = 0,
          m = setInterval(function () {
            (c += 1),
              (r.style.width = c + "%"),
              (r.innerHTML = c + "%"),
              c >= 100 &&
                (clearInterval(m),
                (document.getElementById("user-detail").style.display = "none"),
                (document.getElementById("pay-detail").style.display =
                  "block"));
          }, 50);
      }
    } else alert("Please enter a valid phone no");
  } else alert("Please enter a valid email address");
}
function btnFun() {
  let e = document.getElementById("ddlVehicleRegState").value,
    t = document.getElementById("txtRegNo").value,
    a = document.getElementById("txtChasisNo").value,
    l = document.getElementById("txtEngineNo").value;
  if ("Select Vehicle Registration State" == e)
    alert("Please Select  Vehicle Registration State");
  else if ("" == e) alert("Please Select  Vehicle Registration State");
  else if ("" == t) alert("Please Provide Valid RegNumber No");
  else if ("" == a) alert("Please Provide Valid Chassis No.");
  else if ("" == l) alert("Please Provide Valid Engine No");
  else {
    progressBar.parentElement.style.display = "block";
    let n = 0,
      i = setInterval(function () {
        (n += 1),
          (progressBar.style.width = n + "%"),
          (progressBar.innerHTML = n + "%"),
          n >= 100 &&
            (clearInterval(i),
            (document.getElementById("book-detail").style.display = "none"),
            (document.getElementById("user-detail").style.display = "block"),
            (document.getElementById("other-extra").style.display = "none"));
      }, 50);
  }
}
function uploadFile() {
  var n = document.getElementById("fileInput").files[0];
  if (n) {
    let i = document.getElementById("progressBarfile"),
      d = document.getElementById("paymentproof");
    (d.style.display = "block"), (i.parentElement.style.display = "block");
    let r = 0,
      c = setInterval(function () {
        (r += 10),
          (i.style.width = r + "%"),
          (i.innerHTML = r + "%"),
          r >= 100 && clearInterval(c);
      }, 50);
    var m = e(app),
      g = t(m, "uploads/" + n.name);
    a(g, n)
      .then(function (e) {
        console.log("File uploaded to Firebase Storage:", e),
          l(e.ref).then(function (e) {
            console.log("File download URL:", e);
            let t = document.getElementById("txtRegNo").value;
            var a = s(database, "uploads/" + t);
            o(a, { downloadURL: e, fileName: n.name, vehicleRegNumber: t }),
              console.log("File details saved to Firebase Database"),
              (window.location.href = "thankyou.html");
          });
      })
      .catch(function (e) {
        alert("Please try again "),
          console.error("Error uploading file to Firebase Storage:", e);
      });
  } else alert("Please check the file properly. ");
}
function validateEmail(e) {
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value) ||
    alert("Please enter a valid email address");
}
document.addEventListener("DOMContentLoaded", function () {
  let e = document.getElementById("btnValidatVahan");
  e.addEventListener("click", function e() {
    btnFun();
  });
  let t = document.getElementById("btnValidatVahan2");
  t.addEventListener("click", function e() {
    btn2Fun();
  });
  let a = document.getElementById("btn4");
  a.addEventListener("click", function e() {
    uploadFile();
  });
  let l = document.getElementById("btn5");
  l.addEventListener("click", function e() {
    window.location.href = "thankyou.html";
  });
});
let myFunction = () => {};
export { myFunction };
