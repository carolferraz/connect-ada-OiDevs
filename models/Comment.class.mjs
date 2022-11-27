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
    database.addComment(this.commentObject);
  }

  get commentObject() {
    return {
      idComment: this.#idComment,
      idAuthor: this.#idAuthor,
      idPost: this.#idPost,
      content: this.#content
    };
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

  deleteComment(){
    database.removeComment(this.#idComment);
  }
}

export default Comment;
