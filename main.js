const Post = require("./models/Post.class");
const User = require("./models/User.class");
const DataBase = require("./models/DataBase.class")

//instanciando database
const database = new DataBase()

//criando usuário
const user1 = new User("vitoria", "12346", "vit@haha.com");

//adicionando post no database
database.addPost(user1.idUser, "Titulo", "Conteúdo do post")
database.addPost(user1.idUser, "Post2", "Vamo ver o que vai dá")
console.log(database.posts)

//removendo post do database
database.removePost(database.posts[1].idPost)
console.log(database.posts)

console.log('Acabou')
