import Comment from "./Comment.class.mjs";
import Post from "./Post.class.mjs";
import User from "./User.class.mjs";

class DataBase {
  #users;
  #posts;
  #comments;
  #managers;

  constructor() {
    this.#users = [];
    this.#posts = [];
    this.#comments = [];
  }

  get users() {
    return this.#users;
  }

  get managers() {
    return this.#managers;
  }

  get posts() {
    return this.#posts;
  }

  get comments() {
    return this.#comments;
  }

  addUser(user) {
    //const user = new User(name, password, email);
    // new User(user.name, user.password, user.email)
    // const user = {
    //   idUser: user.idUser,
    //   name: user.name,
    //   password: user.password,
    //   email: user.email,
    //   followList: user.followList
    // };
    this.#users.push(user);
    //return user;
  }

  removeUser(idUser) {
    const index = this.#users.findIndex(element => element.idUser === idUser);
    this.#users.splice(index, 1);
  }

  addPost(post) {
    //const post = new Post(idUser, title, content);
    this.#posts.push(post);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex((element) => element.idPost === idPost);
    this.#posts.splice(index, 1);
  }

  addComment(idAuthor, idPost, content) {
    const comment = new Comment(idAuthor, idPost, content);
    this.#comments.push(comment);
  }

  removeComment(idComment) {
    const index = this.#comments.findIndex(
      (element) => element.idComment === idComment
    );
    this.#comments.splice(index, 1);
  }

  //editando e update o usuário

  updateUserOnDatabase(user) {
    const index = this.#users.findIndex((element) => element.idUser === user.idUser);

    try {
      const updatedFollowlist = database.#users[index].followList;
      console.log(updatedFollowlist);
    } catch (TypeError) {
      console.log(
        'O usuario não existe na database ao invocar o metodo update'
      );
    }

    console.log(database.users);
  }
}

/*==========================TODO=====================
Como passar parâmetros

/*=====================FEITO==============================
olhar no banco de dados do usuário o mesmo idUser que estou alterando
retorna um índice (posição) do obejto que estou buscando no array do objeto
me retornando o índice identificar no meu array qual objeto esse indice se refere
ao achar esse objeto alterá-lo e continuará na mesma posição*/

//o problema dessa função é que os atributos estão ficando públicos, não estamos excluindo o usuario anterior e não estamos criando um novo a partir da classe User
//updateUser precisa trazer o qlqr atributo atualizado

const database = new DataBase();
export default database;
