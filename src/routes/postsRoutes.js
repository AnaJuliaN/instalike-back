import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsControllers.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads" , storage})
// linux ou mac 
//const upload = multer({ dest: "./uploads"})

const routes = (app) => {
  app.use(express.json());
  //rota para buscar todos os posts
  app.get("/posts", listarPosts);
  //rota para criar um post
  app.post("/posts", postarNovoPost)
  app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
