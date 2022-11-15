const User = require('./models/User.class');
const DataBase = require('./models/DataBase.class');
const Comment = require('./models/Comment.class');

//instanciando database
const database = new DataBase();

console.log(database);

//criando usuário
const user1 = new User('vitoria', '12346', 'vit@haha.com');
const user2 = new User('amanda', '12346', 'amanda@haha.com');

//adicionando usuario no database
database.addUser(user1)
database.addUser(user2)
console.log("Usuario antes de adicionar amigo");
console.log(database.users);

//adicionando post no database
database.addPost(user1.idUser, 'Titulo', 'Conteúdo do post');
database.addPost(user1.idUser, 'Post2', 'Vamo ver o que vai dá');
console.log(database.posts);


//removendo post do database
database.removePost(database.posts[1].idPost);
console.log(database.posts);

//criando comentário
const comment = new Comment(
  user1.idUser,
  database.posts[0].idPost,
  'Comentário teste'
);
const comment2 = new Comment(
  user1.idUser,
  database.posts[0].idPost,
  'Um novo comentário'
);
console.log(comment);

//adicionando comentário no database
database.addComment(user1.idUser, database.posts[0].idPost, 'Comentário teste');
database.addComment(user1.idUser, database.posts[0].idPost, 'Um novo comentário');
console.log(database.comments);

//removendo comentário do database
database.removeComment(database.comments[1].idComment);
console.log(database.comments);


//testando adicionar um seguidor
user1.addFollow(1234)
user1.addFollow(343435)
user1.addFollow(123533454)
user1.addFollow(787787)
console.log(user1.followList);
console.log("User depois de adicionar");
console.log(user1)
console.log("Como esta o database agora:")
console.log(database.users)

//testar remover seguidor
user1.removeFollow(343435);
console.log("User depois de remover");
console.log(user1);

database.updateUser(user1)
console.log("Como esta a lista de usuários depois do update:")
console.log(database.users)

console.log('Acabou');