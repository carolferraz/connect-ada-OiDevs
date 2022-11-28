import Header from "../../components/Header.js";
import database from "../../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import Post from "../../models/Post.class.mjs";
import Alert from "../../components/Alert.js";

const currentImg = `${database.currentUserInSession.image}`;
//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "../Feed/feed.html", true);
header.addMenuLink("../../assets/search.svg", "../Explore/explore.html");
header.addMenuLink("../../assets/new.svg", "../NewPost/new-post.html", true);
header.addProfileDropdownLink("Ver perfil", "../Profile/profile.html");
header.addProfileDropdownLink(
  "Editar Perfil",
  "../EditProfile/edit-profile.html"
);
header.addProfileDropdownLink("Seguindo", "../Following/following.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);
// Fim da header

const successPublishedPostAlert = new Alert(
  "Post publicado com sucesso",
  "../../assets/success.svg",
  "#00875F"
);

const functions = new Functions();

//inicializando database
database.initialization();

const inputs = document.querySelectorAll(".required");
const invalidMsg = document.querySelectorAll(".invalid-msg");
const cancelBtn = document.getElementById("cancel");
const publishPostBtn = document.getElementById("publish");
const postTitle = document.getElementById("post-title");
const postDescription = document.getElementById("post-description");

inputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    input.style.border = "1px solid #8D8D99";
    invalidMsg[index].style.display = "none";
  });
});

function validation() {
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value === "") {
      functions.errorInvalidInput(index);
      return false;
    }
  }
  return true;
}

function publishPost(e) {
  e.preventDefault();
  if (validation()) {
    new Post(
      database.currentUserInSession.id,
      postTitle.value,
      postDescription.value
    );
    Functions.setLocalStorage("posts", database.posts);
    functions.resetInputs();
    successPublishedPostAlert.showAlert();
  }
}

function backToOtherPage(e) {
  e.preventDefault();
  window.history.back();
}

publishPostBtn.addEventListener("click", publishPost);

cancelBtn.addEventListener("click", backToOtherPage);
