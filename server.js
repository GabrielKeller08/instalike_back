import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Criar uma instância do servidor Express
const app = express();
app.use(express.static("uploads"))
routes(app)

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});

//function bucarPostPorID(id){
//    return posts.findIndex((post) => {
//        return post.id === Number(id)
//    })
//}

//app.get("/posts/:id", (req, res) => {
//    const index = bucarPostPorID(req.params.id)
//   res.status(200).json(posts[index]);
//});