import ProfilePost from "../../components/ProfilePost.js";
// import Manager from "../../models/Manager.class.mjs";
import User from "../../models/User.class.mjs";
// import Post from "../../models/Post.class.mjs";
// import Functions from "../../models/Functions.class.mjs";
import database from "../../models/DataBase.class.mjs";

function renderPostCards() {
  database.posts.forEach((post) => {
    if (post.idAuthor === database.currentUserInSession.id) {
      new ProfilePost(post, database.currentUserInSession.name);
      const trashButton = document.getElementById(
        `btn-delete-post-${post.idPost}`
      );

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
        //chamar a função renderizar comentários
      });
    }
  });
}

renderPostCards();
