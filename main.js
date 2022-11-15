const User = require("./models/User.class");

const user1 = new User("vitoria", "12346", "vit@haha.com");

console.log(user1.addPost(user1.idUser, "Titulo", "Conteúdo do post"));

console.log(user1.addPost(user1.idUser, "Post2", "Vamo ver o que vai dá"));

console.log(user1.addPost(user1.idUser, "Post3", "Será??"));
user1.removePost(user1.posts[1].idPost);
