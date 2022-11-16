const User = require('./models/User.class');
const DataBase = require('./models/DataBase.class');
const Comment = require('./models/Comment.class');
const Admin = require('./models/Admin.class');

//instanciando database
const database = new DataBase();

//criando usuário
const user1 = new User('vitoria', '12346', 'vit@haha.com');

//adicionando usuario no database
database.addUser("vitoria", "12346", "vit@haha.com");
database.addUser("joao", "12346", "vit@haha.com");
console.log(database.users);

//instanciando e adicionando admin

const admin = new Admin('Joao', '12345', 'joao@joao.com');

admin.addAdmin('Joao', '12345', 'joao@joao.com');
console.log(admin.admins);

// removendo usuario (ainda nao funciona)

admin.removeUser(database.users[0].idUser);
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
database.addComment(
  user1.idUser,
  database.posts[0].idPost,
  'Um novo comentário'
);
console.log(database.comments);

//removendo comentário do database
database.removeComment(database.comments[1].idComment);
console.log(database.comments);

console.log('Acabou');
