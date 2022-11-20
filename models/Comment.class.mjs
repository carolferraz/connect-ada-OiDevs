import Functions from "./Functions.class.mjs";
import database from "./DataBase.class.mjs";

class Comment {
  #idComment;
  #idAuthor;
  #idPost;
  #content;

  constructor(idAuthor, idPost, content) {
    this.#idComment = Functions.createRandomId();
    this.#idAuthor = idAuthor;
    this.#idPost = idPost;
    this.#content = content;
    database.addComment(this);
  }

  get idComment() {
    return this.#idComment;
  }

  get idAuthor() {
    return this.#idAuthor;
  }

  get idPost() {
    return this.#idPost;
  }

  get content() {
    return this.#content;
  }

  set content(newContent) {
    this.#content = newContent;
  }

  //TODO:APAGAR ESSE MÉTODO, (dúvida tirada com gui) acredito que os métodos de classe devem alterar somente os atributos dela e não ela como um todo. Por isso faz sentido estar só em data base, pois vai alterar o atributo #comments de lá 
  // deleteComment(){
  //   database.removeComment(this.#idComment);
  // }
}

export default Comment;
