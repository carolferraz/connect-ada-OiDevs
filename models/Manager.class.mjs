import User from './User.class.mjs';
import database from './DataBase.class.mjs';

class Manager extends User {
  constructor(name, password, email) {
    super(name, password, email);
    // database.addManager(this.manageObject)
  }

  // get manageObject() {
  //   return {
  //     id: super.idUser,
  //     password: super.password,
  //     email: super.email
  //   };
  // }

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

const manager = new Manager('Manager', 123456, 'manager@connectada.com');
// console.log(manager)

export default Manager;
