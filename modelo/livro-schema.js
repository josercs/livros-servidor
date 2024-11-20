const mongoose = require('./conexao'); // Importa a conexão com o MongoDB

// Define o schema do livro
const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    codEditora: { type: Number, required: true },
    resumo: { type: String },
    autores: [{ type: String }],
});

// Cria o modelo associado ao schema
const Livro = mongoose.model('livros', LivroSchema); // A coleção no MongoDB será 'livros'

// Exporta o modelo Livro
module.exports = Livro;
