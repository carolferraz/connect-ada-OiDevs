import User from "./User.class.mjs";
import database from "./DataBase.class.mjs";

class Manager extends User {
  constructor(name, password, email) {
    super(name, password, email);
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
const maneger1 = new Manager("maneger1", 123456, "maneger1@gmail.com");

export default maneger1;
