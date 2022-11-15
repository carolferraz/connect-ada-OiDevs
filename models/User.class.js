const Functions = require("./Functions.class");
const Post = require("./Post.class");

class User {
  #idUser;
  #name;
  #password;
  #email;
  #followList;

  constructor(name, password, email) {
    this.#idUser = Functions.createRandomId();
    this.#name = name;
    this.#password = password;
    this.#email = email;
    this.#followList = [];
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

  set email(newEmail) {
    return (this.#email = newEmail);
  }
}

module.exports = User;
