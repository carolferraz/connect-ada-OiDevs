const Comment = require("./Comment.class");
const Post = require("./Post.class")

class DataBase {
  #users;
  #posts;
  #comments;

  constructor() {
    this.#users = [];
    this.#posts = [];
    this.#comments = [];
  }

  get users() {
    return this.#users;
  }

  get posts() {
    return this.#posts;
  }
  
  get comments() {
  return this.#comments
  }

  addPost(idUser, title, content) {
    const post = new Post(idUser, title, content);
    this.#posts.push(post);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex((element) => element.idPost === idPost);
    this.#posts.splice(index, 1);
  }

  addComment(idAuthor, idPost, content) {
    const comment = new Comment(idAuthor, idPost, content)
    this.#comments.push(comment)
  }

  removeComment(idComment) {
    const index = this.#comments.findIndex((element) => element.idComment === idComment);
    this.#comments.splice(index, 1);
  }
}

module.exports = DataBase