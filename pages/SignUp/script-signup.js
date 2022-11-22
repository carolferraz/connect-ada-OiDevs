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

// Alert

const successRegisterAlert = new Alert('Usuário registrado com sucesso', '../../assets/success.svg', '#00875F');

const alertCloseBtn = document.getElementById('alert-close-btn');

alertCloseBtn.addEventListener('click', () => successRegisterAlert.hideAlert());

// fim do alert

const users = Functions.getLocalStorage('users') === null ? [] : Functions.getLocalStorage('users');

const posts = Functions.getLocalStorage('posts') === null ? [] : Functions.getLocalStorage('posts');

const comments = Functions.getLocalStorage('comments') === null ? [] : Functions.getLocalStorage('comments');


Functions.setLocalStorage('users', users);
Functions.setLocalStorage('posts', posts);
Functions.setLocalStorage('comments', comments);

if(users && users.length > 0){
  users.forEach(user => {
    database.addUser(user)
  });
}

function errorInvalidInput(index) {
  inputs[index].style.border = '1px solid #F75A68';
  inputErrorMsgs[index].style.display = 'block';
}

function acceptedInput(index) {
  inputs[index].style.border = '1px solid #00875F';
  inputErrorMsgs[index].style.display = 'none';
}

function isNameValidate(index) {
  if (inputs[index].value.length < 3) {
    errorInvalidInput(index);
    return false;
  } else {
    acceptedInput(index);
    return true;
  }
}

function isEmailValidate(index) {
  if (emailRegexValidate.test(inputs[index].value)) {
    acceptedInput(index);
    return true;
  } else {
    errorInvalidInput(index);
    return false;
  }
}

function isPasswordValidate(index) {
  if (inputs[index].value.length < 6) {
    errorInvalidInput(index);
    return false;
  } else {
    acceptedInput(index);
    return true;
  }
}

function checkValidation() {
  if ((isNameValidate(0) === isEmailValidate(1)) === isPasswordValidate(2)) {
    return true;
  } else {
    return false;
  }
}

function registerUser(e) {
  e.preventDefault();
  if (checkValidation()) {
    new User(
      userName.value,
      userPassword.value,
      userEmail.value
    );
    console.log(database.users);
    Functions.setLocalStorage('users', database.users)
    successRegisterAlert.showAlert();
  }
}


userName.addEventListener('input', () => isNameValidate(0));
userEmail.addEventListener('input', () => isEmailValidate(1));
userPassword.addEventListener('input', () => isPasswordValidate(2));
signupBtn.addEventListener('click', registerUser);
