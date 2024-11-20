const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
    .then(() => console.log('Conexão com MongoDB realizada com sucesso!'))
    .catch(err => console.error('Erro na conexão com MongoDB:', err));

module.exports = mongoose;
