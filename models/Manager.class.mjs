import User from './User.class.mjs';
import database from './DataBase.class.mjs';

class Manager extends User {
  constructor(name, password, email) {
    super(name, password, email);
  }
}

export default Manager;

// database.users[1] = '';

console.log(database.comments);
