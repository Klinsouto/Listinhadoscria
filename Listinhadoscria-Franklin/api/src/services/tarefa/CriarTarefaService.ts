import prismaClient from "../../prisma";

interface DadosTarefa {
  nome: string;
}

class CriarTarefaService {
  async execute({nome}: DadosTarefa) {
    const tarefa = await prismaClient.tarefa.create({
      data: {
        nome: nome,
      },
    });

    return tarefa;
  }
}

export {CriarTarefaService};
