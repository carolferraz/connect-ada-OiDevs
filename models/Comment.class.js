const Functions = require("./Functions.class")
class Comment {
  #idComment;
  #idAuthor;
  #idPost;
  #content;

  constructor(idAuthor, idPost, content) {
    this.#idComment = Functions.createRandomId()
    this.#idAuthor = idAuthor;
    this.#idPost = idPost;
    this.#content = content;
  }

  get idComment() {
    return this.#idComment
  }

  get idAuthor() {
    return this.#idAuthor
  }

  get idPost() {
    return this.#idPost
  }

  get content() {
    return this.#content
  }
}

module.exports = Comment