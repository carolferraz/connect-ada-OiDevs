import Header from "../../components/Header.js";
import database from "../../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs"

console.log(database.manager)

const currentImg = `${database.manager[0].image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "./adm-feed.html", true);
header.addMenuLink("../../assets/search.svg", "../AdmExplore/adm-explore.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);