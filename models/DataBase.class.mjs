import Comment from "./Comment.class.mjs";
import Post from "./Post.class.mjs";
import User from "./User.class.mjs";

class DataBase {
  #users;
  #posts;
  #comments;

  constructor() {
    this.#users = [];
    this.#posts = [];
    this.#comments = [];
  }

  get users() {
    return this.#users;
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

  addPost(post) {
    //const post = new Post(idUser, title, content);
    this.#posts.push(post);
  }

  addComment(comment) {
    this.#comments.push(comment);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex((element) => element.idPost === idPost);
    this.#posts.splice(index, 1);
  }
  
  removeUser(idUser) {
    const index = this.#users.findIndex((element) => element.idUser === idUser);
    this.#users.splice(index, 1);
  }
  
  removeComment(idComment) {
    const index = this.#comments.findIndex(
      (element) => element.idComment === idComment
      );
      this.#comments.splice(index, 1);
    }
    
    removeAllPostsByAuthor(idAuthor){
      this.#posts.forEach((post) => {
        this.removeAllCommentsByIdPost(post.idPost)
        if (post.idAuthor === idAuthor){
          this.removePost(post.idPost)
        }
    })
  }

  removeAllCommentsByAuthor(){

  }

  removeAllCommentsByIdPost(idPost){
    this.#comments.forEach((comment) => {
      if (comment.idPost === idPost){
        this.removeComment(comment.idComment)
      }
    })
  }

  authenticate(email, password) {
    for (let i = 0; i < database.users.length; i++) {
      if (email === database.users[i].email && password === database.users[i].password) {
        return true;
      }
      throw Error("Login ou senha incorretos.");
    }
  }

  //editando e update o usuário
  //função não é necessária porque o database já atualiza automaticamente quando a gente atualiza os atributos na class

  // updateUserOnDatabase(user) {
  //   const index = this.#users.findIndex((element) => element.idUser === user.idUser);
  //   this.#users[index] = user;
  //   // const updatedFollowlist = database.#users[index].followList;
  //   // console.log(updatedFollowlist);
  //   // console.log(database.users);
  // }

  // updatePostOnDatabase(post) {
  //   const index = this.#posts.findIndex((element) => element.idPost === post.idPost);
  // }
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
