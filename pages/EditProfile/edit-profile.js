import User from "../../models/User.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import Alert from "../../components/Alert.js";
import database from "../../models/DataBase.class.mjs";
import Header from "../../components/Header.js";

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "./feed.html", true);
header.addMenuLink("../../assets/search.svg", "./explorer.html");
header.addMenuLink("../../assets/new.svg", "./new.html");
header.addProfileDropdownLink("Ver perfil", "./profile.html");
header.addProfileDropdownLink("Editar Perfil", "./edit-profile.html");
header.addProfileDropdownLink("Seguindo", "./following.html");
header.addProfileDropdownLink("Sair", "./login.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu("../../assets/woman.jpg");

//funções do Header
const menuDropDown = document.getElementById("dropdown");
const dropDownContent = document.getElementById("dropdown-links");
menuDropDown.addEventListener("click", () => {
  dropDownContent.classList.toggle("show");
});

database.initialization();

/*renderizando os values do currentUserInSession*/
// os valores default não estão sumindo quando clico nos inputs. irei modificar depois
//daqui até o currentemail tem que ficar dentro do evendo do botão de editar perfil
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

const confirmNewPass = document.getElementById("userPassword-2-edit");

/*Eventos em botões*/

btnSaveEdit.addEventListener("click", function (e) {
  e.preventDefault();
  //tenho que chamar aqui dentro a função de validação de dados
  //tenho que chamar aqui dentro a função de empurar o perfil editado para o database
  changeDataCurrentUser(database.currentUserInSession);
});

/*Funções*/

function changeDataCurrentUser(currentUserInSession) {
  const index = database.users.findIndex(
    (element) => element.id === currentUserInSession.id
  );

  database.users[index].image = newImg.value;
  database.users[index].name = newName.value;
  database.users[index].role = newRole.value;
  database.users[index].email = newEmail.value;
  database.users[index].password = newPass.value;

  Functions.setLocalStorage("currentUserInSession", database.users[index]);
}
