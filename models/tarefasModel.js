let tarefas = [
    { id: 1, descricao: 'Estudar Node.js', finalizada: false },
    { id: 2, descricao: 'Estudar React', finalizada: true },
    { id: 3, descricao: 'Estudar React Native', finalizada: false },
    { id: 4, descricao: 'Estudar Angular', finalizada: true },
    { id: 5, descricao: 'Estudar Vue.js', finalizada: false }
];

module.exports = {
    listar() {
        return tarefas;
    },
    adicionar(tarefa) {
        tarefa.id = tarefas.length + 1;
        tarefas.push(tarefa);
    },
    editar(id, dados) {
        const tarefa = tarefas.find((tarefa) => tarefa.id == id);
        if (tarefa) {
            tarefa.descricao = dados.descricao;
            tarefa.finalizada = dados.finalizada === 'on';
        }
    },
    excluir(id) {
        tarefas = tarefas.filter((tarefa) => tarefa.id != id);
    }
};