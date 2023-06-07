import {Request, Response} from "express";
import {ExibirTarefasService} from "../../services/tarefa/ExibirTarefasService";

class ExibirTarefasController {
  async handle(req: Request, res: Response) {
    const listByCategory = new ExibirTarefasService();

    const tarefa = await listByCategory.execute();

    return res.json(tarefa);
  }
}

export {ExibirTarefasController};
