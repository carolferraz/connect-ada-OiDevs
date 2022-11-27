import Header from '../../components/Header.js';
import PostCard from '../../components/PostCard.js';
import Manager from '../../models/Manager.class.mjs';
import User from '../../models/User.class.mjs';
import Post from '../../models/Post.class.mjs';
import Functions from '../../models/Functions.class.mjs';
import database from '../../models/DataBase.class.mjs';

database.initialization();

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', '../Feed/feed.html', true);
header.addMenuLink('../../assets/search.svg', '../Explore/explore.html', true);
header.addMenuLink('../../assets/new.svg', './new.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink(
  'Editar Perfil',
  '../EditProfile/edit-profile.html'
);
header.addProfileDropdownLink('Seguindo', '../Following/following.html');
header.addProfileDropdownLink('Sair', '../../index.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

database.initialization();

const userNatasha = new User('Natasha', 2541, 'natasha@natasha.gmail');
const userJunior = new User('Junior', 2541, 'junior@junior.gmail');
const userIvina = new User('Ivina', 2541, 'Ivina@Ivina.gmail');
const manager1 = new Manager('Vitoria', 1234, 'vitoria@vitoria.gmail');

userNatasha.addFollow(userJunior.idUser);
userNatasha.addFollow(userIvina.idUser);

userIvina.addFollow(userNatasha.idUser);
userIvina.addFollow(userJunior.idUser);

console.log(database.users);

// console.log('teste de autenticação');
// database.authenticate('natasha@natasha.gmail', 2541);

console.log('CRIANDO POSTS');

const post1 = new Post(
  userNatasha.idUser,
  'Primeiro post de Natasha',
  'Esse post deve sumir quando Natasha for excluída'
);

const post2 = new Post(
  userNatasha.idUser,
  'Segundo post de Natasha',
  'Esse post deve sumir quando Natasha for excluída'
);

const post3 = new Post(
  userJunior.idUser,
  'Primeiro post de Junior',
  'Esse post também deverá ser excluido quando Junior for excluída'
);

const post4 = new Post(
  userIvina.idUser,
  'Primeiro post de Ivina',
  'Esse post deverá ser excluido quando Ivina for excluida'
);

const post5 = new Post(
  userNatasha.idUser,
  'Terceiro post de Natasha',
  'Esse post também deverá ser excluido quando Natasha for excluída'
);

const post6 = new Post(
  userNatasha.idUser,
  'Quarto post de Natasha',
  'Esse post também deverá ser excluido quando Natasha for excluída'
);

const post7 = new Post(
  userJunior.idUser,
  'Segundo post de Junior',
  'Esse post também deverá ser excluido quando Junior for excluída'
);

const post8 = new Post(
  userIvina.idUser,
  'Segundo post de Ivina',
  'Esse post deverá ser excluido quando Ivina for excluida'
);

function renderPostCards() {
  const followList = userNatasha.followList;
  console.log(followList);

  database.posts.reverse().forEach(post => {
    for (let i = 0; i < followList.length; i++) {
      if (post.idAuthor === followList[i]) {
        const author = database.users.find(
          user => user.idUser === post.idAuthor
        );

        new PostCard(post, 'Natasha');
        const trashButton = document.getElementById(
          `btn-delete-post-${post.idPost}`
        );
        trashButton.classList.add('hide');

        const btnOpenInputComment = document.getElementById(
          `btn-create-comment-${post.idPost}`
        );

        btnOpenInputComment.addEventListener(
          'click',
          function openInputComment() {
            const divNewComment = document.getElementById(
              `new-comment-${post.idPost}`
            );
            divNewComment.classList.remove('hide');
          }
        );

        const btnShowComments = document.getElementById(
          `btn-show-comments-${post.idPost}`
        );

        btnShowComments.addEventListener('click', function () {
          //chamar a função renderizar comentários
        });

        // const btnAddComment = document.getElementById(`comment-button-${post.idPost}`);

        // btnAddComment.addEventListener("click", function () {
        //   let commentMessage = document.getElementById(`comment-text-${post.idPost}`).value;
        //   const newComment = new Comment(
        //     database.currentUserInSession.id
        //     , 12345, commentMessage
        //   );
        // });
      }
    }
  });
}

renderPostCards();
