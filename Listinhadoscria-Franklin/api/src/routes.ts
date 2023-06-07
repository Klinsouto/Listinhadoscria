import {Router} from 'express';

import {CriarTarefaController} from './controllers/tarefa/CriarTarefaController';
import {ExibirTarefasController} from './controllers/tarefa/ExibirTarefasController';

const router = Router();

router.post('/tarefa/criar', new CriarTarefaController().handle);
router.get('/tarefas', new ExibirTarefasController().handle);

export {router};