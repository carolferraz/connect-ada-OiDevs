import Functions from "./Functions.class.mjs";
import database from "./DataBase.class.mjs";
import Post from "./Post.class.mjs";

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
    this.#email = email.toLowerCase();
    this.#followList = [];
    database.addUser(this.userObject);
  }

  get userObject() {
    return {
      id: this.#idUser,
      name: this.#name,
      password: this.#password,
      email: this.#email,
      followList: this.#followList
    }
  }

  get idUser() {
    return this.#idUser;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }

  get followList() {
    return this.#followList;
  }

  set name(newName) {
    this.#name = newName;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  addFollow(idFollow) {
    this.#followList.push(idFollow);
  }

  removeFollow(idFollow) {
    for (let i = 0; i < this.#followList.length; i++) {
      if (this.#followList[i] === idFollow) {
        this.#followList.splice(i, 1);
      }
    }
  }

  deleteSelfUser() {
    database.removeUser(this.idUser);
  }
}

export default User;
