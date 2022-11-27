import Header from "../../components/Header.js"
import PostCard from "../../components/PostCard.js";
import Manager from "../../models/Manager.class.mjs";
import User from '../../models/User.class.mjs';
import Post from "../../models/Post.class.mjs";
import Functions from '../../models/Functions.class.mjs';
import database from '../../models/DataBase.class.mjs';

//renderizando header
const header = new Header()
header.addMenuLink('../../assets/home.svg', "./feed.html", true)
header.addMenuLink('../../assets/search.svg', "../Explore/explore.html")
header.addMenuLink('../../assets/new.svg', "../NewPost/new-post.html")
header.addProfileDropdownLink('Ver perfil', "../Profile/profile.html")
header.addProfileDropdownLink('Editar Perfil', "../EditProfile/edit-profile.html")
header.addProfileDropdownLink('Seguindo', "../Following/following.html")
header.addProfileDropdownLink('Sair', "../../index.html", false, true)
header.renderMenuLinks()
header.renderDropDownMenu('../../assets/woman.jpg')

database.initialization();

const userNatasha = new User("Natasha", 2541, "natasha@natasha.gmail");
const userJunior = new User("Junior", 2541, "junior@junior.gmail");
const userIvina = new User("Ivina", 2541, "Ivina@Ivina.gmail");
const manager1 = new Manager("Vitoria", 1234, "vitoria@vitoria.gmail");

userNatasha.addFollow(userJunior.idUser);
userNatasha.addFollow(userIvina.idUser);

userIvina.addFollow(userNatasha.idUser);
userIvina.addFollow(userJunior.idUser)


console.log(database.users);

// console.log('teste de autenticação');
// database.authenticate('natasha@natasha.gmail', 2541);

console.log("CRIANDO POSTS");

const post1 = new Post(
  userNatasha.idUser,
  "Primeiro post de Natasha",
  "Esse post deve sumir quando Natasha for excluída"
);

const post2 = new Post(
  userNatasha.idUser,
  "Segundo post de Natasha",
  "Esse post deve sumir quando Natasha for excluída"
);

const post3 = new Post(
  userJunior.idUser,
  "Primeiro post de Junior",
  "Esse post também deverá ser excluido quando Junior for excluída"
);

const post4 = new Post(
  userIvina.idUser,
  "Primeiro post de Ivina",
  "Esse post deverá ser excluido quando Ivina for excluida"
);

const post5 = new Post(
  userNatasha.idUser,
  "Terceiro post de Natasha",
  "Esse post também deverá ser excluido quando Natasha for excluída"
);

const post6 = new Post(
  userNatasha.idUser,
  "Quarto post de Natasha",
  "Esse post também deverá ser excluido quando Natasha for excluída"
);

const post7 = new Post(
  userJunior.idUser,
  "Segundo post de Junior",
  "Esse post também deverá ser excluido quando Junior for excluída"
);

// database.currentUserInSession = userNatasha;


function renderPostCards(){
  // console.log(database.currentUserInSession);
  const followList = userIvina.followList;
  console.log(followList);
  console.log(typeof followList)
  const authorName = '';
  database.posts.reverse().forEach(post => {
    for(let i = 0; i < followList.length; i++){ 
      if(post.idAuthor === followList[i]){
        database.users.forEach(user => {
          if(user.idUser === post.idAuthor){
            authorName = user.name;
      }});
        new PostCard(post, authorName);
        const trashButton = document.getElementById('btn-delete-post');
        trashButton.classList.add('hide');
      }
    }
  });
}


renderPostCards();

// const btnOpenInputComment = document.getElementById('btn-create-comment');

// btnOpenInputComment.addEventListener('click', function openInputComment() {
//   const divNewComment = document.getElementById('new-comment');
//   divNewComment.classList.remove('hide');
// });








// TESTE DA RENDERIZAÇÃO DE UM POSTCARD
// const post = new PostCard({title: 'Título do Post', content: 'Conteúdo do post'}, 'Natasha');

