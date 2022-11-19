import User from './User.class.mjs';
import database from './DataBase.class.mjs';

class Manager extends User {
  constructor(name, password, email) {
    super(name, password, email);
  }

  removeOtherUser(idUser) {
    database.removeAllPostsByAuthor(idUser);
    // database.removeAllCommentsByAuthor(idUser);
    database.removeUser(idUser);
  }
}

export default Manager;
