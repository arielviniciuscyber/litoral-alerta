import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { prisma } from "./lib/prisma.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  const { username, email, senha } = req.body;

  if (!username || !email || !senha) {
    return res.status(400).json({ erro: "username, email e senha são obrigatórios" });
  }

  const existe = await prisma.usuario.findUnique({ where: { username } });
  if (existe) {
    return res.status(409).json({ erro: "Username já está em uso" });
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const usuario = await prisma.usuario.create({
    data: { username, email, senha: senhaHash },
    select: { id: true, username: true, email: true, data_cadastro: true },
  });

  return res.status(201).json(usuario);
});

app.get("/noticias", async (req, res) => {
  const noticias = await prisma.publicacao.findMany({
    where: { tipo: "noticia" },
    orderBy: { data_publicacao: "desc" },
    select: {
      id: true,
      resumo: true,
      slug: true,
      foto_capa: true,
      acessos: true,
      data_publicacao: true,
      usuario: {
        select: { username: true, nome: true },
      },
    },
  });

  return res.json(noticias);
});

// middleware de erro
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));