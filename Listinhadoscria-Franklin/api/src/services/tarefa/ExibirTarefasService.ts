import prismaClient from "../../prisma";

class ExibirTarefasService {
  async execute() {
    const tarefa = await prismaClient.tarefa.findMany({
      orderBy: {
        created_at: "desc",
      },
      select: {
        nome: true,
      },
    });

    return tarefa;
  }
}

export {ExibirTarefasService};
