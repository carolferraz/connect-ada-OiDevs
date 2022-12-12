import Functions from "./models/Functions.class.mjs";
import Alert from "./components/Alert.js";
import database from "./models/DataBase.class.mjs";
import Manager from "./models/Manager.class.mjs";

//Alert

const userNotFoundAlert = new Alert(
  "Email e/ou senha incorreta",
  "../../assets/warning.svg",
  "#F75A68"
);

//fim do alert

database.initialization();
createAdm();

const loginBtn = document.getElementById("loginBtn");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const isAdmInput = document.getElementById("is-adm");

function createAdm() {
  new Manager("Manager", "123456", "manager@connectada.com");
}

function userExists(email, password) {
  for (let i = 0; i < database.users.length; i++) {
    if (
      email === database.users[i].email &&
      password === database.users[i].password &&
      email !== database.manager.email
    ) {
      Functions.setLocalStorage("currentUserInSession", database.users[i]);
      return true;
    }
  }
}

function authenticateUser() {
  if (userExists(userEmail.value, userPassword.value)) {
    return (window.location.href = "./pages/Feed/feed.html");
  } else {
    return userNotFoundAlert.showAlert();
  }
}

function authenticateAdm(email, password) {
  if (
    email === database.manager.email &&
    password === database.manager.password
  ) {
    Functions.setLocalStorage("currentUserInSession", database.manager);
    window.location.href = "./pages/AdmFeed/adm-feed.html";
  } else {
    userNotFoundAlert.showAlert();
  }
}

function startSession(e) {
  e.preventDefault();
  if (isAdmInput.checked) {
    authenticateAdm(userEmail.value, userPassword.value);
  } else {
    authenticateUser();
  }
}

loginBtn.addEventListener("click", startSession);

export default loginBtn;
