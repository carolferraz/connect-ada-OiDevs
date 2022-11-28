import Header from "../../components/Header.js";
import database from "../../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs"
import FollowerCard from "../../components/FollowerCard.js"

console.log(database.manager)

const currentImg = `${database.manager.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/post.svg", "../AdmFeed/adm-feed.html");
header.addMenuLink("../../assets/user.svg", "./adm-explore.html", true);
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

database.initialization()

function renderCards() {
  database.users.forEach(user => {
    return new FollowerCard(user);
  });
}

renderCards()