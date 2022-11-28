import Header from "../../components/Header.js";
import database from "../../models/DataBase.class.mjs";

// database.initialization();

const currentImage = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "../Feed/feed.html");
header.addMenuLink("../../assets/search.svg", "../Explore/explore.html");
header.addMenuLink("../../assets/new.svg", "../NewPost/new-post.html");
header.addProfileDropdownLink("Ver perfil", "./profile.html", true);
header.addProfileDropdownLink(
  "Editar Perfil",
  "../EditProfile/edit-profile.html"
);
header.addProfileDropdownLink("Seguindo", "../Following/following.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImage);
