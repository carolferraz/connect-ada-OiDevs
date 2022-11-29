import User from "../../models/User.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import Alert from "../../components/Alert.js";
import database from "../../models/DataBase.class.mjs";
import Header from "../../components/Header.js";

database.initialization();

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "../Feed/feed.html");
header.addMenuLink("../../assets/search.svg", "../Explore/explore.html");
header.addMenuLink("../../assets/new.svg", "../NewPost/new-post.html");
header.addProfileDropdownLink("Ver perfil", "../Profile/profile.html");
header.addProfileDropdownLink("Editar Perfil", "./edit-profile.html", true);
header.addProfileDropdownLink("Seguindo", "../Following/following.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

/*renderizando os values do currentUserInSession*/

const currentName = (document.getElementById(
  "userName-edit"
).value = `${database.currentUserInSession.name}`);

const currentImage = (document.getElementById(
  "img-edit"
).value = `${database.currentUserInSession.image}`);

const currentRole = (document.getElementById("role-edit").value = `${
  database.currentUserInSession.role || ""
}`);

const currentEmail = (document.getElementById(
  "userEmail-edit"
).value = `${database.currentUserInSession.email}`);

/*Seleção Ids dos inputs*/

const btnSaveEdit = document.getElementById("save-edit-profile");

const newImg = document.getElementById("img-edit");

const newName = document.getElementById("userName-edit");

const newRole = document.getElementById("role-edit");

const newEmail = document.getElementById("userEmail-edit");

const currentPass = document.getElementById("old-password");

const newPass = document.getElementById("userPassword-edit");

const repeteNewPass = document.getElementById("userPassword-2-edit");

const btnDeleteAccount = document.getElementById("delete-account");

/*Eventos em botões*/

btnSaveEdit.addEventListener("click", function (e) {
  e.preventDefault();
  changeDataCurrentUser(database.currentUserInSession);
  window.location.href = "../Profile/profile.html";
});

btnDeleteAccount.addEventListener("click", function (e) {
  e.preventDefault();
  database.removeUser(database.currentUserInSession.id);
  database.currentUserInSession = "";
  window.location.href = "../SignUp/signup.html";
});

/*Funções*/

function changeDataCurrentUser(currentUserInSession) {
  const index = database.users.findIndex(
    (element) => element.id === currentUserInSession.id
  );

  //Modificando os dados da instância do currentUserInSession
  database.users[index].image = newImg.value;
  database.users[index].name = newName.value;
  database.users[index].role = newRole.value;
  database.users[index].email = newEmail.value;
  database.users[index].password =
    newPass.value || currentUserInSession.password;

  //Setando informações novas do currentUserInsession no localstorage
  database.currentUserInSession = database.users[index];
  //Setando informações novas do currentUserInsession na array Users do localstorage
  database.users = database.currentUserInSession;
}

//instânciando classe functions
const functions = new Functions();

//Validação de inputs
newImg.addEventListener("input", () => functions.isNameValidate(0));
newName.addEventListener("input", () => functions.isNameValidate(1));
newEmail.addEventListener("input", () => functions.isEmailValidate(3));
currentPass.addEventListener("input", () => functions.isOldPassValidate(4));
newPass.addEventListener("input", () => functions.isNewPassValidate(5));
repeteNewPass.addEventListener("input", () =>
  functions.repeteNewPassValidate(6)
);
//newPass.addEventListener("input", () => functions.isNewPassValidate(5));
