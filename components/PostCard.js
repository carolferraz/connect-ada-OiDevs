class PostCard {
  constructor(post, username, userimage) {
    // this.main = document.createElement('main');
    // this.main.id = 'feed';
    this.divCard = document.createElement("div");
    this.divCard.classList.add("post-card");
    this.divCard.id = `post-card-${post.idPost}`;
    this.divCard.innerHTML = `
      <div class="header-post-card">
        <div class="post-author-identify">
          <figure>
            <img class="img-post-card" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="">
          </figure>
          <p class="user-name">${username}</p>
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
      </div>
    `;
    const main = document.getElementById("feed");
    // main.innerHTML = ''
    main.append(this.divCard);
    // document.body.append(this.main);
    // this.divHeaderCard = document.createElement('div');
    // this.divIdentify = document.createElement('div');
    // this.figure = document.createElement('figure');
    // this.img = document.createElement('img');
    // this.pUsername = document.createElement('p');
    // this.divPostText = document.createElement('div');
  }
}

export default PostCard;
