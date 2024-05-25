// server.js

// Importando módulos
const express = require('express');
const mongoose = require('mongoose');
const { Pool } = require('pg');

// Criando instância do aplicativo Express
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost/meu_banco_de_dados', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão com o MongoDB estabelecida'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definição do Schema e Modelo para Mangá
const mangaSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    genero: String
});
const Manga = mongoose.model('Manga', mangaSchema);

// Conexão com o PostgreSQL
const pool = new Pool({
    user: 'usuario',
    host: 'localhost',
    database: 'meu_banco_de_dados',
    password: 'senha',
    port: 5432,
});
pool.connect()
    .then(() => console.log('Conexão com o PostgreSQL estabelecida'))
    .catch(err => console.error('Erro ao conectar ao PostgreSQL:', err));

// Funções
function carregarComentarios() {
    // Lógica para carregar os comentários do servidor
    // Preencher a lista de comentários com os dados recebidos
}

function atualizarEstrelas(avaliacao) {
    // Lógica para preencher visualmente as estrelas de acordo com a avaliação
}

// Rotas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Interatividade do Usuário
document.addEventListener('DOMContentLoaded', () => {
    carregarComentarios();
});

document.getElementById('carregar-mais').addEventListener('click', () => {
    // Lógica para carregar mais mangás ou manhwas
});

$('form').submit((event) => {
    // Validação do formulário
});

document.getElementById('formulario-comentario').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Capturar dados do formulário
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Enviar os dados do comentário para o servidor (pode ser feito via AJAX)

    // Limpar o formulário após o envio
    document.getElementById('nome').value = '';
    document.getElementById('comentario').value = '';
});

document.getElementById('estrelas').addEventListener('click', (event) => {
    if (event.target.matches('.estrela')) {
        const avaliacao = event.target.dataset.avaliacao;
        // Enviar avaliação para o servidor (pode ser feito via AJAX)
        // Atualizar visualmente as estrelas
        atualizarEstrelas(avaliacao);
        // Exibir mensagem de confirmação
        document.getElementById('mensagem-avaliacao').textContent = 'Avaliação enviada com sucesso!';
    }
});
