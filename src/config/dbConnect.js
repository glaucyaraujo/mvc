import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:soulinda1*@cluster0.krj118u.mongodb.net/senac2");
// a função connect guarda a string de conexão dentro dos parenteses.

let db = mongoose.connection;
//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o MongoDB.

export default db;
