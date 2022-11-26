import Header from "../../components/Header.js";
import User from "../../models/User.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import database from "../../models/DataBase.class.mjs";

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

//comentários

const newComment = document.getElementById("")

const btnDeleteComment = document.getElementById("btn-trash");
const btnOpenComment = document.getElementById("open-comments");
const btnAddComment = document.getElementById("add-comment");



// btnDeleteComment.addEventListener('click' function() {
//     //essa função pega o id do comentário relacionando a aquele idpost e deletar
// })

// btnAddComment.addEventListener('click', function () {
    
// })

// btnOpenComment.addEventListener('click', function () {
    
// })