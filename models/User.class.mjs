import Functions from "./Functions.class.mjs";
import database from "./DataBase.class.mjs";

class User {
  #idUser;
  #name;
  image;
  #role;
  #password;
  #email;
  #followList;

  constructor(name, password, email, role = "") {
    this.#idUser = Functions.createRandomId();
    this.#name = name;
    this.image =
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
    this.#role = role;
    this.#password = password;
    this.#email = email.toLowerCase();
    this.#followList = [];
    database.addUser(this.userObject);
  }

  get userObject() {
    return {
      id: this.#idUser,
      name: this.#name,
      image: this.image,
      role: this.#role,
      password: this.#password,
      email: this.#email,
      followList: this.#followList,
    };
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

  get role() {
    return this.#role;
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

  set role(newRole) {
    this.#role = newRole;
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
