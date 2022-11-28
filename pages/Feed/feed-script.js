import Header from "../../components/Header.js";
import PostCard from "../../components/PostCard.js";
import Manager from "../../models/Manager.class.mjs";
import User from "../../models/User.class.mjs";
import Post from "../../models/Post.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import database from "../../models/DataBase.class.mjs";
import CommentCardView from "../../components/CommentCard.js";
import Comment from "../../models/Comment.class.mjs";

database.initialization();

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "./feed.html", true);
header.addMenuLink("../../assets/search.svg", "./explorer.html");
header.addMenuLink("../../assets/new.svg", "./new.html");
header.addProfileDropdownLink("Ver perfil", "../Profile/profile.html");
header.addProfileDropdownLink(
  "Editar Perfil",
  "../EditProfile/edit-profile.html"
);
header.addProfileDropdownLink("Seguindo", "../Following/following.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
// header.renderDropDownMenu(currentImg);

const userNatasha = new User("Natasha", 2541, "natasha@natasha.gmail");
const userJunior = new User("Junior", 2541, "junior@junior.gmail");
const userIvina = new User("Ivina", 2541, "Ivina@Ivina.gmail");
const manager1 = new Manager("Vitoria", 1234, "vitoria@vitoria.gmail");

userNatasha.addFollow(userJunior.idUser);
userNatasha.addFollow(userIvina.idUser);

userIvina.addFollow(userNatasha.idUser);
userIvina.addFollow(userJunior.idUser);

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

const post8 = new Post(
  userIvina.idUser,
  "Segundo post de Ivina",
  "Esse post deverá ser excluido quando Ivina for excluida"
);

console.log(post8.idPost);

function renderPostCards() {
  const followList = userNatasha.followList;
  console.log(followList);

  database.posts.reverse().forEach((post) => {
    for (let i = 0; i < followList.length; i++) {
      if (post.idAuthor === followList[i]) {
        const author = database.users.find(
          (user) => user.idUser === post.idAuthor
        );

        new PostCard(post, "Natasha");
        const trashButton = document.getElementById(
          `btn-delete-post-${post.idPost}`
        );
        trashButton.classList.add("hide");

        const btnOpenInputComment = document.getElementById(
          `btn-create-comment-${post.idPost}`
        );

        btnOpenInputComment.addEventListener(
          "click",
          function openInputComment() {
            const divNewComment = document.getElementById(
              `new-comment-${post.idPost}`
            );
            divNewComment.classList.remove("hide");
          }
        );

        const btnShowComments = document.getElementById(
          `btn-show-comments-${post.idPost}`
        );

        btnShowComments.addEventListener("click", function () {
          renderAllCommentsByIdPost(post.idPost);
        });

        const btnAddComment = document.getElementById(`comment-button-${post.idPost}`);

        btnAddComment.addEventListener("click", function () {
          const commentMessage = document.getElementById(`comment-text-${post.idPost}`).value;
          const newComment = new Comment(database.currentUserInSession.id, post.idPost, commentMessage);
          renderAllCommentsByIdPost(post.idPost);
          Functions.setLocalStorage('comments', database.comments);
        });
      }
    }
  });
}

renderPostCards();

// const comment1 = new Comment(
//   userIvina.idUser,
//   post8.idPost,
//   "1 comentario",
//   "açskdçalçk"
// );
// const comment2 = new Comment(
//   userNatasha.idUser,
//   post8.idPost,
//   "2 comentario",
//   "açskdçalçk"
// );
// const comment3 = new Comment(
//   userJunior.idUser,
//   post8.idPost,
//   "3 comentario",
//   "açskdçalçk"
// );
// const comment4 = new Comment(
//   userIvina.idUser,
//   post8.idPost,
//   "4 comentario",
//   "açskdçalçk"
// );
// const comment5 = new Comment(
//   userIvina.idUser,
//   post8.idPost,
//   "5 comentario",
//   "açskdçalçk"
// );
// const comment6 = new Comment(
//   userIvina.idUser,
//   post8.idPost,
//   "6 comentario",
//   "açskdçalçk"
// );

// function adicionarLocalStorage(comment) {

//   Functions.setLocalStorage('comments',database.comments);
// }

// new CommentCardView(comment1, userIvina.name);

function renderAllCommentsByIdPost(idPost) {
  database.comments.forEach((comment) => {
    if (comment.idPost === idPost) {
      const author = database.users.find(
        (user) => user.id === comment.idAuthor
      );
      new CommentCardView(comment, author.name, database.currentUserInSession.image);
      Functions.setLocalStorage('comments', database.comments);
    }
  });
}



// const author = database.users.find((user) => {
//   console.log("autor");
//   console.log(user.id);
//   console.log(comment5.idAuthor);
//   console.log(user.id === comment5.idAuthor);
//   console.log("-------");
//   return user.idUser === comment5.idAuthor;
// });

// console.log(database.users);
// console.log(author);
// console.log(comment5);

// renderAllCommentsByIdPost(post8.idPost);

// console.log("merda");
// console.log(database.users);
// database.removeUser(database.currentUserInSession.id);

// console.log(database.users);
// console.log('akjslkaj');

