import express from "express";
import dotenv from "dotenv";
import { rotaAppend, rotaPop, rotaPush, rotaRemove } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post("/pilha/push/:nome/:doador", rotaPush);

app.delete("/pilha/pop", rotaPop);

app.post("/fila/append/:nome/:doador", rotaAppend);

app.delete("/fila/remove", rotaRemove);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
