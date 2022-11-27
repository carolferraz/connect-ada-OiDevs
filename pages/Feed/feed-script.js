import Header from "../../components/Header.js"
import PostCard from "../../components/PostCard.js"
import database from "../../models/DataBase.class.mjs"

//renderizando header
const header = new Header()
header.addMenuLink('../../assets/home.svg', "./feed.html", true)
header.addMenuLink('../../assets/search.svg', "./explorer.html")
header.addMenuLink('../../assets/new.svg', "./new.html")
header.addProfileDropdownLink('Ver perfil', "./profile.html")
header.addProfileDropdownLink('Editar Perfil', "./edit-profile.html")
header.addProfileDropdownLink('Seguindo', "./following.html")
header.addProfileDropdownLink('Sair', "./login.html", false, true)
header.renderMenuLinks()
header.renderDropDownMenu('../../assets/woman.jpg')

database.initialization();

function renderPostCards(){
  database.posts.reverse.forEach(post => {
    // if(post.idAuthor === ){}
  });
}

// TESTE DA RENDERIZAÇÃO DE UM POSTCARD
const post = new PostCard({title: 'Título do Post', content: 'Conteúdo do post'}, 'Natasha');
const trashButton = document.getElementById('btn-delete-post');
trashButton.classList.add('hide');