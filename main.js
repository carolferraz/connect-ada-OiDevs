const User = require("./models/user.class")

const user1  = new User('vitoria','12346', 'vit@haha.com')

console.log(user1.addPost(user1.idUser, 'Titulo', 'Conteúdo do post'));

console.log(user1);