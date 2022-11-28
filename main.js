import Functions from "./models/Functions.class.mjs";
import Alert from "./components/Alert.js";
import database from "./models/DataBase.class.mjs";

//Alert

const userNotFoundAlert = new Alert(
  "Email e/ou senha incorreta",
  "../../assets/warning.svg",
  "#F75A68"
);

//fim do alert

database.initialization();

const loginBtn = document.getElementById("loginBtn");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const isAdmInput = document.getElementById('is-adm')

function authenticate(email, password) {
  for (let i = 0; i < database.users.length; i++) {
    if (
      email === database.users[i].email &&
      password === database.users[i].password
    ) {
      Functions.setLocalStorage('currentUserInSession', database.users[i]);
      return true;
    }
  }
}

function authenticateAdm(email, password) {
  const manager = Functions.getLocalStorage('manager')
     if (email === manager.email && password === manager.password) {
      return true;
    }
    // if (email === database.manager.email && password === database.manager.password) {
    //   Functions.setLocalStorage('manager', database.manager);
    //   return true;
    // }
}


function startSession(e) {
  e.preventDefault();
  if(isAdmInput.checked) {
    if(authenticateAdm(userEmail.value, userPassword.value)) {
      window.location.href = "./pages/AdmFeed/adm-feed.html"
    } else {
      userNotFoundAlert.showAlert();
    }
  } else {
    if (authenticate(userEmail.value, userPassword.value)) {
        window.location.href = "./pages/Feed/feed.html";
    } else {
      userNotFoundAlert.showAlert();
    }
  }
}

loginBtn.addEventListener("click", startSession);

export default loginBtn;
