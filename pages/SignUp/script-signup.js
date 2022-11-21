import User from '../../models/User.class.mjs';
import Functions from '../../models/Functions.class.mjs';
import Alert from '../../components/Alert.js';
import database from '../../models/DataBase.class.mjs';

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signupBtn = document.getElementById('signup');

const successRegisterAlert = new Alert('Usuário registrado com sucesso');

const alertCloseBtn = document.getElementById('alert-close-btn');

alertCloseBtn.addEventListener('click', () => successRegisterAlert.hideAlert());

function registerUser(e) {
  e.preventDefault();
  if (
    userName.value === '' ||
    userPassword.value === '' ||
    userEmail.value === ''
  ) {
    alert('Preencha todos os campos');
    return;
  }

  try {
    const newUser = new User(
      userName.value,
      userPassword.value,
      userEmail.value
    );
    successRegisterAlert.showAlert();
    Functions.setLocalStorage('users', newUser);
  } catch (error) {
    console.log(error.message);
  }
}

signupBtn.addEventListener('click', registerUser);
