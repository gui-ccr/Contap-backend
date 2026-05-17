import express, { type Response, type Request } from "express";

const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "🍕 Servidor da Pizzaria Contábil está Online e Respirando!",
  });
});

// aqui voces vao colocar as outras rotas como /contas /planoContasRoutes e etc

// o comando pra rodar o servidor é 'npx tsx server.ts' lembrando que voces tem que estar dentro da pasta src se estiverem fora vao ter que colocar o caminho ate o arquivo /src/server.ts

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}/ping`);
});
