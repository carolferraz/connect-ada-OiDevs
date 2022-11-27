import database from "../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs";
class CommentCard {
  userName;
  imgUser;
  contentComment;
  
  constructor(userName, imgUser) {
    this.userName = userName;
    this.imgUser = imgUser;

    this.divOfComments = document.createElement("div");
    this.divOfComments.setAttribute("id", "comment-card");

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
    document.getElementById(`post-card-${post.idPost}`).append(this.divOfComments)

  }


  // createNewComment(idPost) {
  //   let commentMessage = document.getElementById("comment-text").value;
  //   const newComment = new Comment(database.currentUserInSession.id, 12345);
  //   database.addComment(idPost);
  // }
  //criar método para aprecer o comment-card com inner html
}

export default CommentCard;
