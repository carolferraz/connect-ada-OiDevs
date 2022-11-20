import User from "./models/User.class.mjs";
import Comment from "./models/Comment.class.mjs";
import database from "./models/DataBase.class.mjs";
import Post from "./models/Post.class.mjs";
import Manager from "./models/Manager.class.mjs";

//instanciando database

//criando usuário
console.log("CRIANDO USUÁRIOS");

const userNatasha = new User("Natasha", 2541, "natasha@natasha.gmail");
const userJunior = new User("Junior", 2541, "junior@junior.gmail");
const userIvina = new User("Ivina", 2541, "Ivina@Ivina.gmail");
const manager1 = new Manager("Vitoria", 1234, "vitoria@vitoria.gmail");
// const userAmanda = new User('Amanda', 2541, 'Amanda@Amanda.gmail');
// const userCarol = new User('Carol', 2541, 'Carol@Carol.gmail');
// const userPerola = new User('Perola', 2541, 'perola@perola.gmail');

console.log(database.users);

// console.log('teste de autenticação');
// database.authenticate('natasha@natasha.gmail', 2541);

console.log("CRIANDO POSTS");

const post1 = new Post(
  userNatasha.idUser,
  "Primeiro post de Natasha",
  "Esse post deve sumir quando Natasha for excluída"
);

const post2 = new Post(
  userNatasha.idUser,
  "Segundo post de Natasha",
  "Esse post deve sumir quando Natasha for excluída"
);

const post3 = new Post(
  userJunior.idUser,
  "Primeiro post de Junior",
  "Esse post também deverá ser excluido quando Junior for excluída"
);

const post4 = new Post(
  userIvina.idUser,
  "Primeiro post de Ivina",
  "Esse post deverá ser excluido quando Ivina for excluida"
);

const post5 = new Post(
  userNatasha.idUser,
  "Terceiro post de Natasha",
  "Esse post também deverá ser excluido quando Natasha for excluída"
);

const post6 = new Post(
  userNatasha.idUser,
  "Quarto post de Natasha",
  "Esse post também deverá ser excluido quando Natasha for excluída"
);

const post7 = new Post(
  userJunior.idUser,
  "Segundo post de Junior",
  "Esse post também deverá ser excluido quando Junior for excluída"
);

// post3.title = 'Este título está melhor';

console.log(database.posts);

//criando comentário
// console.log('CRIANDO COMENTÁRIOS');

const comment1 = new Comment(
  userIvina.idUser,
  database.posts[0].idPost,
  "Primeiro comentário de Ivina no post de Natasha"
);

const comment2 = new Comment(
  userNatasha.idUser,
  database.posts[0].idPost,
  "Segundo comentário de Natasha no post de Natasha"
);

const comment3 = new Comment(
  userJunior.idUser,
  database.posts[0].idPost,
  "Primeiro comentário de Junior no post de Natasha"
);

const comment4 = new Comment(
  userJunior.idUser,
  database.posts[2].idPost,
  "Primeiro comentário de Junior no post de Ivina"
);

const comment5 = new Comment(
  userJunior.idUser,
  database.posts[2].idPost,
  "Segundo comentário de Junior no post de Ivina"
);

const comment6 = new Comment(
  userJunior.idUser,
  database.posts[5].idPost,
  "Segundo comentário de Junior no post de Ivina"
);

console.log("Imprimindo comentários antes de qlqr alteração");
console.log(database.comments);

console.log("Imprimindo posts antes de qlqr alteração");
console.log(database.posts);

//======================TESTES VITÓRIA==========================

// // removendo um unico comentario
// comment4.deleteComment();
// console.log("deletando comment4");
// console.log(database.comments);

// console.log("Após remover comment1");
// console.log(database.comments);

// //Removendo todos os comentários pelo idPost diferente do que é passado

// database.removeAllCommentsByPost(post1.idPost);

// console.log("Após remover todos os coments por post");
// console.log(database.comments);

// // removendo único post
// // database.removePost(post1.idPost)

// post1.deletePost()
// console.log("Após remover o post1");
// console.log(database.posts);
// console.log(database.comments);

//removendo todos os posts de um mesmo autor

// database.removeAllPostsByAuthor(userJunior.idUser);
// console.log(database.users);
// console.log(database.posts);
// console.log(database.comments);

// console.log("Após remover todos os posts de um msm autor");
// console.log(database.posts);

// // //removendo todos os comentários de um mesmo autor

// database.removeAllCommentsByAuthor(comment3.idAuthor)

// console.log("Após remover todos os comentários de um mesmo autor");
// console.log(database.comments);

// // romovendo um usuário juntamente com seus posts e comentários
// console.log('REMOVENDO USUÁRIO Junior');
// userJunior.deleteSelfUser();

// // manager remove algum usuário
// console.log('Manager remove usuário Junior');
// manager1.removeOtherUser(userJunior.idUser);

// //manager remove post improprios
// console.log('Manager remove post inadequado');
// manager1.removeOtherPost(post1.idPost);

// //manager remove comentarios improprios
// console.log('Manager remove comment inadequado');
// manager1.removeOtherComment(comment4.idComment);

//==============FIM DOS TESTES VITÓRIA================

// post1.deletePost()

//Removendo usuários e com isso seu post e comentários do post
// console.log('REMOVENDO USUÁRIA NATASHA');
// // manager1.removeOtherUser(userNatasha.idUser);
// userNatasha.deleteSelfUser();

// userNatasha.deleteSelfUser();

console.log(database.users);
console.log(database.posts);
console.log(database.comments);

// console.log('deletando posts')
// post1.deletePost();
// console.log(database.posts);

//Alterando atributos do objeto e fazendo update no banco de dados
// userAmanda.email = "amanha"
// userAmanda.addFollow(userIvina.idUser)
// userAmanda.addFollow(userNatasha.idUser)
// userAmanda.addFollow(userJunior.idUser)

// userAmanda.removeFollow(userNatasha.idUser)

// //const user1 = new User('vitoria', '777777', 'vit@haha.com');
// // const user2 = new User('amanda', '12346', 'amanda@haha.com');

// //criando e adicionando usuario no database
// const user1 = database.addUser("vitoria", "12387", "vit@haha.com");
// const user2 = database.addUser("amanda", "12346", "amanda@haha.com");
// console.log(user1);

// console.log("PAROUUUUUUUUUUUUUU");

// //adicionando post no database
// database.addPost(user1.idUser, "Titulo", "Conteúdo do post");
// database.addPost(user1.idUser, "Post2", "Vamo ver o que vai dá");
// console.log(database.posts);

// //removendo post do database
// database.removePost(database.posts[1].idPost);
// console.log(database.posts);

// //criando comentário
// const comment = new Comment(
//   user1.idUser,
//   database.posts[0].idPost,
//   "Comentário teste"
// );
// const comment2 = new Comment(
//   user1.idUser,
//   database.posts[0].idPost,
//   "Um novo comentário"
// );
// console.log(comment);

// //adicionando comentário no database
// database.addComment(user1.idUser, database.posts[0].idPost, "Comentário teste");
// database.addComment(
//   user1.idUser,
//   database.posts[0].idPost,
//   "Um novo comentário"
// );
// console.log(database.comments);

// //removendo comentário do database
// database.removeComment(database.comments[1].idComment);
// console.log(database.comments);

// console.log("Acabou");
