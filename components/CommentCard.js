import database from "../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs";

class CommentCardView {
  constructor(comment, userName, userImg) {
    this.divOfComment = document.createElement("div");
    this.divOfComment.setAttribute("id", `comment-card-${comment.idComment}`);
    this.divOfComment.setAttribute("class", `comment-card`);

    this.divOfComment.innerHTML = `
    <figure>
    <img class="img-post-card" src=${userImg} alt="">
  </figure>
    <div class="comment" id="id-user-${comment.idComment}">
      <div class="comment-info">
        <p class="user-name">${userName}</p>
        <p class="comment-content">${comment.content}</p>
      </div>
      <div class="btn-delete">
        <button id="btn-trash-${comment.idComment}" hidden>
          <img src="../../assets/trash.svg"></img>
        </button>
      </div>
    </div>
        `;
        

        
        // const allComments = document.getElementById(`all-comments-${comment.idPost}`);
        document.getElementById(`all-comments-${comment.idPost}`).append(this.divOfComment);
        
          // this.createBtnDel(comment)
      
  }
// MANAGER - 
// renderAllComments = comparação do comment.idComment != idAuthor add hide no botão
  //essa fç tem que sair daqui pq isso atrapalha no manager. = resolvido



  //atualmente, depois do código abaixo, estou tendo problema em renderizar todos os comentários, só aparece os dos currentuser = RESOLVIDO

// createBtnDel(comment){
//     this.divSuper = document.getElementById(`id-user-${comment.idComment}`);
    
//   if (comment.idAuthor === database.currentUserInSession.id){
//     this.divBtn = document.createElement("div");
//     this.divBtn.setAttribute("class", "btn-delete");
//     this.divSuper.append(this.divBtn);
    
//     this.btn = document.createElement("button");
//     this.btn.setAttribute("id", `btn-trash-${comment.idComment}`);
//     this.divBtn.append(this.btn);

//     this.img = document.createElement("img");
//     this.img.setAttribute("src", "../../assets/trash.svg");
//     this.btn.append(this.img);
// } 
// }

}

export default CommentCardView;
