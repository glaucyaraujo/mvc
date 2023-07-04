import mongoose from "mongoose";

mongoose.connect();
// a função connect guarda a string de conexão dentro dos parenteses.

let db = mongoose.connection;
//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o MongoDB.

module.exports = db;