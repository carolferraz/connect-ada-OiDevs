import Functions from './models/Functions.class.mjs';
import Alert from './components/Alert.js';

//Alert

const userNotFoundAlert = new Alert(
  'Email e/ou senha incorreta',
  '../../assets/warning.svg',
  '#F75A68'
);

const alertCloseBtn = document.getElementById('alert-close-btn');

alertCloseBtn.addEventListener('click', () => userNotFoundAlert.hideAlert());

//fim do alert

const loginBtn = document.getElementById('loginBtn');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const users = Functions.getLocalStorage('users')

function isUserCorrect(email, password) {
  for (let index = 0; index < users.length; index++) {
    if(users[index].email === email && users[index].password === password) {
      return true
    }
  }
}

function startSession(e) {
  e.preventDefault();
  if(isUserCorrect(userEmail.value, userPassword.value)) {
    console.log('usuário logado')
  } else {
    userNotFoundAlert.showAlert();
  }
}

loginBtn.addEventListener('click', startSession);
