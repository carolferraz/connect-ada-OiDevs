import User from "./models/User.class.mjs";
import Comment from "./models/Comment.class.mjs";
import database from "./models/DataBase.class.mjs";
import Post from "./models/Post.class.mjs";

//instanciando database

//criando usuário
const userNatasha = new User("Natasha", 2541, "natasha@natasha.gmail");
const post1 = new Post(
  userNatasha.idUser,
  "Guilherme é o melhor",
  "Guilherme acha larica interessante"
);
console.log(database.users);
console.log(database.posts);
//const user1 = new User('vitoria', '777777', 'vit@haha.com');
// const user2 = new User('amanda', '12346', 'amanda@haha.com');
/*
//criando e adicionando usuario no database
const user1 = database.addUser("vitoria", "12387", "vit@haha.com");
const user2 = database.addUser("amanda", "12346", "amanda@haha.com");
console.log(user1);

console.log("PAROUUUUUUUUUUUUUU");

//adicionando post no database
database.addPost(user1.idUser, "Titulo", "Conteúdo do post");
database.addPost(user1.idUser, "Post2", "Vamo ver o que vai dá");
console.log(database.posts);

//removendo post do database
database.removePost(database.posts[1].idPost);
console.log(database.posts);

//criando comentário
const comment = new Comment(
  user1.idUser,
  database.posts[0].idPost,
  "Comentário teste"
);
const comment2 = new Comment(
  user1.idUser,
  database.posts[0].idPost,
  "Um novo comentário"
);
console.log(comment);

//adicionando comentário no database
database.addComment(user1.idUser, database.posts[0].idPost, "Comentário teste");
database.addComment(
  user1.idUser,
  database.posts[0].idPost,
  "Um novo comentário"
);
console.log(database.comments);

//removendo comentário do database
database.removeComment(database.comments[1].idComment);
console.log(database.comments);

//testando adicionar um seguidor
user1.addFollow(1234);
user1.addFollow(343435);
user1.addFollow(123533454);
user1.addFollow(787787);
console.log(user1.followList);
console.log("User depois de adicionar");
console.log(user1);
console.log("Como esta o database agora:");
console.log(database.users);

//testar remover seguidor
user1.removeFollow(343435);
console.log("User depois de remover");
console.log(user1);

database.updateUser(user1);
console.log("Como esta a lista de usuários depois do update:");
console.log(database.users);

console.log("Acabou");
*/
