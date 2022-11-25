
class PostCard {
  constructor(post, username) {
    this.main = document.createElement('main');
    this.main.id = 'feed';
    this.divCard = document.createElement('div');
    this.divCard.classList.add("post-card");
    this.divCard.innerHTML = `<div class="header-post-card">
    <div class="post-author-identify">
      <figure>
        <img class="img-post-card" src="../../assets/tarso-brant.png" alt="">
      </figure>
      <p class="user-name">${username}</p>
    </div>
    
    <button href="">
      <img src="../../assets/trash.svg" alt="">
    </button>
  </div>

  <div class="post-text">
    <h3 class="post-title">${post.title}</h3>
    <p class="post-content">${post.content}</p>
  </div>

  <nav>
    <button href="" id="btn-show-comments" onclick="">Comentários</button>
    <button href="" id="btn-create-comment" onclick="">Deixe seu comentário</button>
  </nav>
    `;

    this.main.append(this.divCard);
    document.body.append(this.main);
    // this.divHeaderCard = document.createElement('div');
    // this.divIdentify = document.createElement('div');
    // this.figure = document.createElement('figure');
    // this.img = document.createElement('img');
    // this.pUsername = document.createElement('p');
    // this.divPostText = document.createElement('div');
  }
}

export default PostCard;