import Header from "../../components/Header.js";
import database from "../../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs"
import PostCard from "../../components/PostCard.js"

console.log(database.manager)

const currentImg = `${database.manager.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/post.svg", "./adm-feed.html", true);
header.addMenuLink("../../assets/user.svg", "../AdmExplore/adm-explore.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

database.initialization()

const section = document.getElementById('feed')

if(database.posts.length === 0) {
    section.innerHTML = `<h3>Nenhum post cadastrado</h3`
}

database.posts.forEach((post) => {
    const author = database.users.find(user => user.id === post.idAuthor);
    console.log(author);

    return new PostCard(post, author.name , author.image);
})