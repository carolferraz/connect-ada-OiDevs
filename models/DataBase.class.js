const Post = require("./Post.class")

class DataBase {
  #users;
  #posts;
  #comments;

  constructor() {
    this.users = [];
    this.#posts = [];
    this.#comments = [];
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
}

module.exports = DataBase