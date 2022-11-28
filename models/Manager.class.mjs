import User from './User.class.mjs';
import database from './DataBase.class.mjs';

class Manager extends User {
  constructor(name, password, email) {
    super(name, password, email);
    database.addManager(this.manageObject)
  }

  get manageObject() {
    return {
      id: super.idUser,
      password: super.password,
      email: super.email,
      image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
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
const maneger1 = new Manager("maneger1", 123456, "maneger1@gmail.com");

// const manager = new Manager('Manager', 123456, 'manager@connectada.com');


export default Manager;
