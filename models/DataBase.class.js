const Comment = require('./Comment.class');
const Post = require('./Post.class');
const User = require('./User.class');

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

  set users(newUser) {
    this.#users = newUser;
  }

  get posts() {
    return this.#posts;
  }

  get comments() {
    return this.#comments;
  }

  addUser(name, password, email) {
    const user = new User(name, password, email);
    this.#users.push(user);
  }

  addPost(idUser, title, content) {
    const post = new Post(idUser, title, content);
    this.#posts.push(post);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex(element => element.idPost === idPost);
    this.#posts.splice(index, 1);
  }

  addComment(idAuthor, idPost, content) {
    const comment = new Comment(idAuthor, idPost, content);
    this.#comments.push(comment);
  }

  removeComment(idComment) {
    const index = this.#comments.findIndex(
      element => element.idComment === idComment
    );
    this.#comments.splice(index, 1);
  }
}

module.exports = DataBase;
