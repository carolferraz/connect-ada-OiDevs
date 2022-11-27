import database from "../models/DataBase.class.mjs";

class CommentCard {
  userName;
  imgUser;
  contentComment;
  btnDeleteComment;
  likeOnComments;

  constructor(userName) {
    this.userName = userName
    this.divOfComments = document.createElement("div");
    this.divOfComments.setAttribute("id", "comment-card");
  }

  renderCommentCard() {
    this.divOfComments.innerHTML = `
    <figure>
    <img class="img-post-card" src="../../assets/woman.jpg" alt="">
  </figure>
  <div>
    <div class="comment">
      <div class="comment-info">
        <p class="user-name"></p>
        <p class="info-text"></p>
        <p class="comment-content"></p>
      </div>
      <div class="btn-delete">
        <button id="btn-trash">
          <img src="../../assets/trash.svg"></img>
        </button>
      </div>
    </div>
    <p class="info-text reaction">Contar curtidas nessa bosta</p>
  </div>
</div>
    `;
    document.querySelector('post-card').append(this.divOfComments)
  }

  //criar método para aprecer o comment-card com inner html
}

export default CommentCard;