import {Request, Response} from 'express';
import {CriarTarefaService} from '../../services/tarefa/CriarTarefaService';

class CriarTarefaController {
  async handle(req: Request, res: Response) {
    const {nome} = req.body;

    const criarTarefaService = new CriarTarefaService();

      const tarefa = await criarTarefaService.execute({
          nome
    });

    return res.json(tarefa);
    }
  }

export {CriarTarefaController}