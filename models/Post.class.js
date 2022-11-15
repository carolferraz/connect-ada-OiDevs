const Functions = require('./functions')

class Post {
  #idPost;
  #idAuthor;
  #title;
  #content;
  #comments;

  constructor(idAuthor, title, content){
    this.#idPost = Functions.createRandomId;
    this.#idAuthor = idAuthor;
    this.#title = title;
    this.#content = content;
  }

  get idPost() {
    return this.#idPost;
  }
}