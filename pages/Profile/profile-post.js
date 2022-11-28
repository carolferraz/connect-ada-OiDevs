import ProfilePost from "../../components/ProfilePost.js";
import Manager from "../../models/Manager.class.mjs";
import User from "../../models/User.class.mjs";
import Post from "../../models/Post.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import database from "../../models/DataBase.class.mjs";
import Comment from "../../models/Comment.class.mjs";
import CommentCardView from "../../components/CommentCard.js";

function renderPostCards() {
  database.posts.forEach((post) => {
    if (post.idAuthor === database.currentUserInSession.id) {
      new ProfilePost(post, database.currentUserInSession.name);
      const trashButton = document.getElementById(
        `btn-delete-post-${post.idPost}`
      );

      trashButton.addEventListener("click", function () {
        const idpost = `${post.idPost}`;
        console.log(idpost);
        database.removePost(idpost);
        window.location.href = "./profile.html";
      });

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
        Functions.setLocalStorage("comments", database.comments);
        if (
          document.getElementById(`comment-text-${post.idPost}`).value != ""
        ) {
          document.getElementById(`comment-text-${post.idPost}`).value = "";
        }

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
  });
}

renderPostCards();

/*Oi*/
