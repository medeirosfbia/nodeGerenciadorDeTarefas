const tarefasModel = require('../models/tarefasModel');

module.exports = {
    exibirLista(req, res) {
        const tarefas = tarefasModel.listar();
        res.render('listarTarefas', { tarefas });
    },
    exibirAdicionarTarefa(req, res) {
        res.render('adicionarTarefa');
    },
    adicionarTarefa(req, res) {
        const novaTarefa = {
            descricao: req.body.descricao,
            finalizada: false
        };
        tarefasModel.adicionar(novaTarefa);
        res.redirect('/');
    },
    exibirEdicao(req, res) {
        const { id } = req.params;
        const tarefa = tarefasModel.listar().find((tarefa) => tarefa.id == id);
        if (!tarefa) {
            res.status(404).send('Tarefa não encontrada');
            return;
        }
        res.render('editarTarefa', { tarefa });
    },
    editarTarefa(req, res) {
        const { id } = req.params;
        tarefasModel.editar(id, req.body);
        res.redirect('/');
    },
    excluirTarefa(req, res) {
        const { id } = req.params;
        tarefasModel.excluir(id);
        res.redirect('/');
    }
};