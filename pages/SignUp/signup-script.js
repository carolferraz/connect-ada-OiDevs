import User from '../../models/User.class.mjs';
import Functions from '../../models/Functions.class.mjs';
import Alert from '../../components/Alert.js';
import database from '../../models/DataBase.class.mjs';

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signupBtn = document.getElementById('signup');

const inputs = document.querySelectorAll('.required');
const inputErrorMsgs = document.querySelectorAll('.invalid-msg');

const emailRegexValidate = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Alerts
const successRegisterAlert = new Alert(
  'Usuário registrado com sucesso',
  '../../assets/success.svg',
  '#00875F'
);

const emailAlreadyExistsAlert = new Alert(
  'O e-mail já existe, tente um e-mail diferente ou faça o login',
  '../../assets/warning.svg',
  '#F75A68'
);

//inicializando database
database.initialization();

//funções específicas da página
const functions = new Functions();

function checkValidation() {
  if (
    functions.isNameValidate(0) &&
    functions.isEmailValidate(1) &&
    functions.isPasswordValidate(2)
  ) {
    return true;
  } else {
    return false;
  }
}

function emailNotExists(email) {
  for (let index = 0; index < database.users.length; index++) {
    const user = database.users[index];
    if (user.email === email) {
      return false;
    }
  }
  return true;
}

function registerUser(e) {
  e.preventDefault();
  if (checkValidation() && emailNotExists(userEmail.value)) {
    new User(userName.value, userPassword.value, userEmail.value);
    Functions.setLocalStorage('users', database.users);
    functions.resetInputs();
    successRegisterAlert.showAlert();
  }

  if (!emailNotExists(userEmail.value)) {
    emailAlreadyExistsAlert.showAlert();
  }
}

userName.addEventListener('input', () => functions.isNameValidate(0));
userEmail.addEventListener('input', () => functions.isEmailValidate(1));
userPassword.addEventListener('input', () => functions.isPasswordValidate(2));
signupBtn.addEventListener('click', registerUser);
