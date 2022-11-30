import Header from "../../components/Header.js";
import PostCard from "../../components/PostCard.js";
import Functions from "../../models/Functions.class.mjs";
import database from "../../models/DataBase.class.mjs";
import CommentCardView from "../../components/CommentCard.js";
import Comment from "../../models/Comment.class.mjs";

database.initialization();

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "./feed.html", true);
header.addMenuLink("../../assets/search.svg", "../Explore/explore.html");
header.addMenuLink("../../assets/new.svg", "../NewPost/new-post.html");
header.addProfileDropdownLink("Ver perfil", "../Profile/profile.html");
header.addProfileDropdownLink(
  "Editar Perfil",
  "../EditProfile/edit-profile.html"
);
header.addProfileDropdownLink("Seguindo", "../Following/following.html");
header.addProfileDropdownLink("Sair", "../../index.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

function renderPostCards() {
  const followList = database.currentUserInSession.followList;

  database.posts.reverse().forEach((post) => {
    for (let i = 0; i < followList.length; i++) {
      if (post.idAuthor === followList[i]) {
        const author = database.users.find((user) => user.id === post.idAuthor);
        console.log(author);

        new PostCard(post, author.name, author.image);
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
            divNewComment.classList.toggle("hide");
          }
        );

        const btnShowComments = document.getElementById(
          `btn-show-comments-${post.idPost}`
        );

        btnShowComments.addEventListener("click", function () {
          const allComments = document.getElementById(
            `all-comments-${post.idPost}`
          );
          if (allComments.classList.contains("hide")) {
            allComments.classList.remove("hide");
            renderAllCommentsByIdPost(post.idPost);
          } else {
            allComments.classList.add("hide");
            allComments.innerText = "";
          }
        });

        const btnAddComment = document.getElementById(
          `comment-button-${post.idPost}`
        );

        btnAddComment.addEventListener("click", function () {
          const commentMessage = document.getElementById(
            `comment-text-${post.idPost}`
          ).value;
          console.log(commentMessage);
          const newComment = new Comment(
            database.currentUserInSession.id,
            post.idPost,
            commentMessage
          );

          if (
            document.getElementById(`comment-text-${post.idPost}`).value != ""
          ) {
            document.getElementById(`comment-text-${post.idPost}`).value = "";
          }

          Functions.setLocalStorage("comments", database.comments);

          const allComments = document.getElementById(
            `all-comments-${post.idPost}`
          );
          if (allComments.classList.contains("hide")) {
            allComments.classList.remove("hide");
            renderAllCommentsByIdPost(post.idPost);
          } else {
            allComments.innerText = "";
            renderAllCommentsByIdPost(post.idPost);
          }
        });
      }
    }
  });
}

function renderAllCommentsByIdPost(idPost) {
  database.comments.forEach((comment) => {
    if (comment.idPost === idPost) {
      const author = database.users.find(
        (user) => user.id === comment.idAuthor
      );
      new CommentCardView(comment, author.name, author.image);

      if (document.getElementById(`btn-trash-${comment.idComment}`)) {
        const btnDelComment = document.getElementById(
          `btn-trash-${comment.idComment}`
        );

        btnDelComment.addEventListener(
          "click",
          function delCommentByIdComment(event) {
            const numberId = event.currentTarget.id.split("-")[2];
            database.removeComment(numberId);
            const allComments = document.getElementById(
              `all-comments-${comment.idPost}`
            );
            allComments.innerText = "";
            renderAllCommentsByIdPost(comment.idPost);
          }
        );
      }
    }
  });
}

renderPostCards();
