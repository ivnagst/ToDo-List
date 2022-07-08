const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose // Mongoose é uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.
    .connect(
        "mongodb+srv://root:admin@todolist.du7so.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,      //para evitar erro de URL
            useUnifiedTopology: true,  //para eviter erro de topologia
        }
    )
    .then(() => console.log("Conectamos no MongoDB Atlas :D")) //se conseguir realizar a conexão, ele retorna esta mensagem
    .catch((err) => console.log(err))
}
    module
    .exports = connectToDb


    //