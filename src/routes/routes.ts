import { RequestHandler } from "express";
import Arquivo from "../controllers/Arquivo";
import Pilha from "../controllers/Pilha"; 
import Fila from "../controllers/Fila"; 

const stack = new Pilha();
const queue = new Fila();
const arquivo = new Arquivo();

export const rotaPush: RequestHandler = async (req, res) => {
  const { nome } = req.params;
  const { doador } = req.params;

  const isDoador = doador === "true"; 

  stack.push(nome, isDoador);

  try {
    const stackContents = stack.getStack().map((paciente) => JSON.stringify(paciente));
    await arquivo.escreverArquivo(stackContents);
    return res.status(200).json({ stackContents });
  } catch (error) {
    return res.status(500).send("Erro ao escrever no arquivo");
  }
};

export const rotaPop: RequestHandler = async (_req, res) => {
  if (stack.isEmpty()) {
    return res.status(404).send("Pilha vazia");
  }

  const removedFromStack = stack.pop();

  try {
    const stackContents = stack.getStack().map((paciente) => JSON.stringify(paciente));
    await arquivo.escreverArquivo(stackContents); 

    return res.status(200).json({ removedFromStack });
  } catch (error) {
    return res.status(500).send("Erro ao escrever no arquivo");
  }
};

export const rotaAppend: RequestHandler = async (req, res) => {
  const { nome } = req.params;
  const { doador } = req.params;

  const isDoador = doador === "true"; 

  queue.append(`nome: ${nome} doador: ${isDoador}`); 

  try {
    await arquivo.escreverArquivo(queue.getQueue()); 

    return res.status(200).json({ queueContents: queue.getQueue() });
  } catch (error) {
    return res.status(500).send("Erro ao escrever no arquivo");
  }
};

export const rotaRemove: RequestHandler = async (_req, res) => {
  if (queue.isEmpty()) {
    return res.status(404).send("Fila vazia");
  }

  const removedFromQueue = queue.remove();

  try {
    await arquivo.escreverArquivo(queue.getQueue()); 

    return res.status(200).json({ removedFromQueue });
  } catch (error) {
    return res.status(500).send("Erro ao escrever no arquivo");
  }
};
