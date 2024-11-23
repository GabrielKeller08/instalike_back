import 'dotenv/config'
// Importar a função para conectar ao banco de dados MongoDB
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conectar ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts"
export async function getTodosPosts() {
    // Obter o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");

    // Obter a coleção "posts"
    const colecao = db.collection("posts");

    // Encontrar todos os documentos da coleção e retornar como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
        const db = conexao.db("imersao-instabytes");
        const colecao = db.collection("posts");
        return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost} );
}