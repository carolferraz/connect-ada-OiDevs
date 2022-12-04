import Header from '../../components/Header.js';
import database from '../../models/DataBase.class.mjs';
import Functions from '../../models/Functions.class.mjs';
import PostCard from '../../components/PostCard.js';
import CommentCardView from '../../components/CommentCard.js';

// console.log(database.manager);

const currentImg = `${database.manager.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/post.svg', './adm-feed.html', true);
header.addMenuLink('../../assets/user.svg', '../AdmExplore/adm-explore.html');
header.addProfileDropdownLink('Sair', '../../index.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

database.initialization();

const section = document.getElementById('feed');

if (database.posts.length === 0) {
  section.innerHTML = `<h3>Nenhum post cadastrado</h3`;
}

function renderPostCards() {
  const allUsers = database.users;

  database.posts.reverse().forEach(post => {
    for (let i = 0; i < allUsers.length; i++) {
      if (post.idAuthor === allUsers[i].id) {
        const author = database.users.find(user => user.id === post.idAuthor);
        // console.log(author);

        new PostCard(post, author.name, author.image);
        const trashButton = document.getElementById(
          `btn-delete-post-${post.idPost}`
        );

        trashButton.addEventListener("click", function () {
          const idpost = `${post.idPost}`;
          console.log(idpost);
          database.removePost(idpost);
          window.location.href = "./adm-feed.html";
        });

        const btnOpenInputComment = document.getElementById(
          `btn-create-comment-${post.idPost}`
        );

        btnOpenInputComment.addEventListener(
          'click',
          function openInputComment() {
            const divNewComment = document.getElementById(
              `new-comment-${post.idPost}`
            );
            if (database.currentUserInSession.id !== database.manager.id) {
              divNewComment.classList.toggle('hide');
              
            }
          }
        );

        const btnShowComments = document.getElementById(
          `btn-show-comments-${post.idPost}`
        )

        btnShowComments.addEventListener('click', function () {
          const allComments = document.getElementById(
            `all-comments-${post.idPost}`
          );
          if (allComments.classList.contains('hide')) {
            allComments.classList.remove('hide');
            renderAllCommentsByIdPost(post.idPost)
          } else {
            allComments.classList.add('hide');
            allComments.innerText = '';
          }
        });

        const btnAddComment = document.getElementById(
          `comment-button-${post.idPost}`
        );

        btnAddComment.addEventListener('click', function () {
          const commentMessage = document.getElementById(
            `comment-text-${post.idPost}`
          ).value;
          const newComment = new Comment(
            database.currentUserInSession.id,
            post.idPost,
            commentMessage
          );

          if (
            document.getElementById(`comment-text-${post.idPost}`).value != ''
          ) {
            document.getElementById(`comment-text-${post.idPost}`).value = '';
          }

          Functions.setLocalStorage('comments', database.comments);

          const allComments = document.getElementById(
            `all-comments-${post.idPost}`
          );
          if (allComments.classList.contains('hide')) {
            allComments.classList.remove('hide');
            renderAllCommentsByIdPost(post.idPost);
          } else {
            allComments.innerText = '';
            renderAllCommentsByIdPost(post.idPost);
          }
        });
      }
    }
  });
};


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

      // if (comment.idAuthor !== database.currentUserInSession.id ) {
      //   btnDelComment.classList.add("hide");
      // }

      if (comment.idAuthor === database.currentUserInSession.id || database.manager.id === database.currentUserInSession.id) {
        btnDelComment.removeAttribute("hidden");
      }

      btnDelComment.addEventListener(
        "click",
        function delCommentByIdComment(event) {
          const numberId = event.currentTarget.id.split("-")[2];
          // console.log(numberId);
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