import database from "../models/DataBase.class.mjs";

class CommentCard {
  userName;
  imgUser;
  contentComment;
  btnDeleteComment;
  likeOnComments;

  constructor(userName) {
    this.userName = userName
    this.sectionOfComments = document.createElement("section");
    this.sectionOfComments.setAttribute("id", "comment-card");

    // this.imgUser = document.createElement("img");
    // this.imgUser.setAttribute("class", "img-post-card");

    // this.divOfComment = document.createElement("div");

    // this.divComment = document.createElement("div");
    // this.divComment.setAttribute("class", "comment");

    // this.divComment = document.createElement("div");
    // this.divComment.setAttribute("class", "comment-info");

    // this.userName = document.createElement("p");
    // this.userName.setAttribute("class", "user-name");

    // this.contentComment = document.createElement("p");
    // this.contentComment.setAttribute("class", "comment-content");

    // this.divButtonDeleteComment = documento.createElement("div");
    // this.divButtonDeleteComment.setAttribute("class", "btn-delete");

    // this.button = document.createElement("button");
    // this.button.setAttribute("id", "btn-trash");

    // this.imgBtnDelete = document.createElement("img");
    // this.imgBtnDelete.setAttribute("src", "../../assets/trash.svg");

    // this.likeOnComments = document.createElement("p");
    // this.likeOnComments.setAttribute("class", "info-text reaction");
  }

  renderCommentCard() {
    this.sectionOfComments.innerHTML = `
    <img class="img-post-card" src="../../assets/woman.jpg" alt="">
    <div>
      <div class="comment">
        <div class="comment-info">
          <p class="user-name">${this.userName}</p>
          <p class="comment-content"></p>
        </div>
        <div class="btn-delete">
          <button id="btn-trash">
            <img src="../../assets/trash.svg"></img>
          </button>
        </div>
      </div>
      <p class="info-text reaction"></p>
    </div>
    `;
    document.querySelector('#all-comments').append(this.sectionOfComments)
  }

  //criar método para aprecer o comment-card com inner html
}

export default CommentCard;