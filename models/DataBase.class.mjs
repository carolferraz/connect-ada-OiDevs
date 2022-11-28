import Functions from "./Functions.class.mjs";

class DataBase {
  #currentUserInSession;
  #users;
  #posts;
  #comments;

  constructor() {
    this.#users = [];
    this.#posts = [];
    this.#comments = [];
  }

  initialization() {
    this.getUsers =
      Functions.getLocalStorage("users") === null
        ? []
        : Functions.getLocalStorage("users");

    this.getPosts =
      Functions.getLocalStorage("posts") === null
        ? []
        : Functions.getLocalStorage("posts");

    this.getComments =
      Functions.getLocalStorage("comments") === null
        ? []
        : Functions.getLocalStorage("comments");

    Functions.setLocalStorage("users", this.getUsers);
    Functions.setLocalStorage("posts", this.getPosts);
    Functions.setLocalStorage("comments", this.getComments);

    if (this.getUsers && this.getUsers.length > 0) {
      this.getUsers.forEach((user) => {
        this.addUser(user);
      });
    }

    if (this.getPosts && this.getPosts.length > 0) {
      this.getPosts.forEach((post) => {
        this.addPost(post);
      });
    }

    if (this.getComments && this.getComments.length > 0) {
      this.getComments.forEach((comment) => {
        this.addComment(comment);
      });
    }
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

  get currentUserInSession() {
    return Functions.getLocalStorage("currentUserInSession");
  }

  set currentUserInSession(changeDataCurrentUser) {
    this.#currentUserInSession = changeDataCurrentUser;
    Functions.setLocalStorage("currentUserInSession", changeDataCurrentUser);
  }

  addUser(user) {
    this.#users.push(user);
  }

  set users(newDataOfUsers) {
    const index = this.#users.findIndex(
      (element) => element.id === newDataOfUsers.id
    );
    this.#users[index] = newDataOfUsers;
    Functions.setLocalStorage("users", this.#users);
  }

  addPost(post) {
    this.#posts.push(post);
  }

  addComment(comment) {
    this.#comments.push(comment);
  }

  // removeUser(idUser) {
  //   const index = this.#users.findIndex(element => element.idUser === idUser);
  //   this.#users.splice(index, 1);
  //   this.removeAllPostsByAuthor(idUser);
  //   this.removeAllCommentsByAuthor(idUser);}

  removeUser(idUser) {
    const index = this.#users.findIndex((element) => element.id === idUser);
    console.log(index);
    this.#users.splice(index, 1);
    this.removeAllPostsByAuthor(idUser);
    this.removeAllCommentsByAuthor(idUser);
    Functions.setLocalStorage("users", this.#users);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex((element) => element.idPost === idPost);
    this.#posts.splice(index, 1);
    this.removeAllCommentsByPost(idPost);
    Functions.setLocalStorage("posts", this.#posts);
  }

  removeComment(idComment) {
    const index = this.#comments.findIndex(
      (element) => element.idComment === idComment
    );

    this.#comments.splice(index, 1);
    Functions.setLocalStorage("comments", this.getComments);
    console.log(this.#comments);
  }

  //remove todos os posts de um mesmo autor
  removeAllPostsByAuthor(idAuthor) {
    this.#posts.forEach((post) => {
      if (post.idAuthor === idAuthor) {
        this.removeAllCommentsByPost(post.idPost);
      }
    });
    const newListOfPosts = this.#posts.filter(
      (posts) => posts.idAuthor !== idAuthor
    );
    this.#posts = newListOfPosts;
  }

  //remove todos os comentários de um mesmo autor e me retorna o que é diferente do que eu quero excluir
  removeAllCommentsByAuthor(idAuthor) {
    const newListOfComments = this.#comments.filter(
      (coment) => coment.idAuthor !== idAuthor
    );
    this.#comments = newListOfComments;
  }

  removeAllCommentsByPost(idPost) {
    const newListOfComments = this.#comments.filter(
      (comment) => comment.idPost !== idPost
    );
    this.#comments = newListOfComments;
  }
  //PRECISAMOS MUDAR ISSO, PQ ESTAMOS CHAMANDO DATABASE.USERS DENTRO DA CLASSE DATABASE
  authenticate(email, password) {
    for (let i = 0; i < database.users.length; i++) {
      if (
        email === database.users[i].email &&
        password === database.users[i].password
      ) {
        Functions.setLocalStorage("currentUserInSession", database.users[i]);
        return true;
      }
    }
  }
}

const database = new DataBase();
export default database;
