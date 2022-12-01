import User from "./User.class.mjs";
import database from "./DataBase.class.mjs";

class Manager extends User {
  #isAdm;
  constructor(name, password, email, isAdm = true) {
    super(name, password, email);
    this.#isAdm = isAdm;
    database.addManager(this.manageObject);
  }

  get isAdm() {
    return this.#isAdm;
  }

  get manageObject() {
    return {
      isAdm: this.#isAdm,
      id: super.idUser,
      password: super.password,
      email: super.email,
      image:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    };
  }

  removeOtherUser(idUser) {
    database.removeUser(idUser);
  }

  removeOtherPost(idPost) {
    database.removePost(idPost);
  }

  removeOtherComment(idComment) {
    database.removeComment(idComment);
  }
}

export default Manager;
