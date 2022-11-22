import Functions from "./models/Functions.class.mjs";
import Alert from "./components/Alert.js";

//Alert

const userNotFoundAlert = new Alert('Email e/ou senha incorreta', '../../assets/warning.svg', '#F75A68');

const alertCloseBtn = document.getElementById('alert-close-btn');

alertCloseBtn.addEventListener('click', () => userNotFoundAlert.hideAlert());

//fim do alert

const loginBtn = document.getElementById('loginBtn')

function startSession(e) {
  e.preventDefault()
  userNotFoundAlert.showAlert()
}

loginBtn.addEventListener('click', startSession)

