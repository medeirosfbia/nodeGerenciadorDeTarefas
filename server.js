const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const tarefasController = require('./controllers/tarefasController');

const app = express();
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', tarefasController.exibirLista);
app.get('/tarefas/adicionar', tarefasController.exibirAdicionarTarefa);
app.post('/tarefas', tarefasController.adicionarTarefa);
app.get('/tarefas/:id/editar', tarefasController.exibirEdicao);
app.post('/tarefas/:id/editar', tarefasController.editarTarefa);
app.get('/tarefas/:id/excluir', tarefasController.excluirTarefa);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});