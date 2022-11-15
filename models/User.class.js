const Functions = require("./functions");
const Post = require("./Post.class");

class User {
  #idUser;
  #name;
  #password;
  #email;
  #friends;
  #posts;

  constructor(name, password, email) {
    this.#idUser = Functions.createRandomId();
    this.#name = name;
    this.#password = password;
    this.#email = email;
    this.#friends = [];
    this.#posts = [];
  }

  get idUser() {
    return this.#idUser;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  get email() {
    return this.#email;
  }

  get posts() {
    return this.#posts;
  }

  set email(newEmail) {
    return (this.#email = newEmail);
  }
  
  authenticate() {
    if (
      passwordInput.value === this.#password &&
      nameInput.value === this.#name
    ) {
      return true;
    }
    throw Error("Login ou senha incorretos.");
  }

  addFriend(idFriend) {
    return this.#friends.push(idFriend);
  }

  removeFriend(idFriend) {
    for (let i = 0; i < this.#friends.length; i++) {
      if (this.#friends[i] === idFriend) {
        this.#friends.splice(i, 1);
      }
    }
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

module.exports = User;
