const User = require('./User.class');
const DataBase = require('./DataBase.class');

const database = new DataBase();

class Admin extends User {
  #admins;

  constructor(name, password, email) {
    super(name, password, email);
    this.#admins = [];
  }

  get admins() {
    return this.#admins;
  }

  set admins(newAdmin) {
    this.#admins = newAdmin;
  }

  addAdmin(name, password, email) {
    const adm = new Admin(name, password, email);
    this.#admins.push(adm);
  }

  removeUser(idUser) {
    const index = database.users.findIndex(
      element => element.idUser === idUser
    );
    database.users.splice(index, 1);
  }
}

module.exports = Admin;
