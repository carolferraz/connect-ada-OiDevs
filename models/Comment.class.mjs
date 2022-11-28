import Functions from "./Functions.class.mjs";
import database from "./DataBase.class.mjs";

class Comment {
  #idComment;
  #idAuthor;
  #idPost;
  #content;
  #userImg;

  constructor(idAuthor, idPost, content, userImg) {
    this.#idComment = Functions.createRandomId();
    this.#idAuthor = idAuthor;
    this.#idPost = idPost;
    this.#content = content;
    this.#userImg = userImg;
    database.addComment(this.commentObject);
  }

  get commentObject() {
    return {
      idComment: this.#idComment,
      idAuthor: this.#idAuthor,
      idPost: this.#idPost,
      content: this.#content,
      userImg: this.#userImg,
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

  get userImg() {
    return this.#userImg;
  }

  set content(newContent) {
    this.#content = newContent;
  }

  deleteComment() {
    database.removeComment(this.#idComment);
  }
}

export default Comment;
