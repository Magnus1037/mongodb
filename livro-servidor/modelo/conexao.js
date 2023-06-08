const banco = require('mongoose');
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

banco.connect('mongodb+srv://livro:livro@livraria.8q37vby.mongodb.net/?retryWrites=true&w=majority', options)
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida.');
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

module.exports = banco;
