import database from "../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs";

class CommentCardView {
  constructor(comment, userName) {

    this.divOfComments = document.createElement("div");
    this.divOfComments.setAttribute("id", "comment-card");

    this.divOfComments.innerHTML = `
    <figure>
    <img class="img-post-card" src="../../assets/woman.jpg" alt="">
  </figure>
  <div>
    <div class="comment">
      <div class="comment-info">
        <p class="user-name">${userName}</p>
        <p class="comment-content">${comment.content}</p>
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
    
    document.getElementById(`post-card-${comment.idPost}`).append(this.divOfComments);
  }

}

export default CommentCardView ;