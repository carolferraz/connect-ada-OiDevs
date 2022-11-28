import database from "../models/DataBase.class.mjs";

class ProfilePost {
  constructor(post, username) {
    this.divCard = document.createElement("div");
    this.divCard.classList.add("post-card-profile");
    this.divCard.id = `post-card-${post.idPost}`;
    this.divCard.innerHTML = `
      <div class="header-post-card">
        <div class="post-author-identify">
          <figure>
            <img class="img-post-card" src="${database.currentUserInSession.image}">
          </figure>
          <div><p class="user-name">${username}</p>
          <p class="user-prof">${database.currentUserInSession.role}</p></div>
        </div>
    
        <button class="" href="" id="btn-delete-post-${post.idPost}">
          <img src="../../assets/trash.svg" alt="">
        </button>
      </div>
    
      <div class="post-text">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-content">${post.content}</p>
      </div>
      
      <nav>
        <button href="" id="btn-show-comments-${post.idPost}">Comentários</button>
        <button href="" id="btn-create-comment-${post.idPost}">Deixe seu comentário</button>
      </nav>

      <div id="new-comment-${post.idPost}" class="comment-input hide">
        <textarea id="comment-text-${post.idPost}" name="" rows="5" placeholder="Escreva um comentário..."></textarea>
        <button id="comment-button-${post.idPost}">Comentar</button>
      </div>

      <div id="all-comments-${post.idPost}" class="hide">
    `;
    const main = document.querySelector("main");
    main.append(this.divCard);
  }
}

export default ProfilePost;
