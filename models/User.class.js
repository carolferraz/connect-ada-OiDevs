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

  get followList() {
    return this.#followList;
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

  addFollow(idFollow) {
    return this.#followList.push(idFollow);
  }

  removeFollow(idFollow) {
    for (let i = 0; i < this.#followList.length; i++) {
      if (this.#followList[i] === idFollow) {
        this.#followList.splice(i, 1);
      }
    }
  }

  //acredito que seja necessário buscar em um banco de dados comparando os valores e não na criação de usuário
  authenticate() {
    if (
      emailInput.value === this.#email && passwordInput.value === this.#password
      
    ) {
      return true;
    }
    throw Error("Login ou senha incorretos.");
  }
  
}

module.exports = User;
