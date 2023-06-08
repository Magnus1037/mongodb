const Livro = require('./livro-schema');

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    throw new Error('Erro ao obter livros do banco de dados.');
  }
};

const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    throw new Error('Erro ao incluir livro no banco de dados.');
  }
};

const excluir = async (codigo) => {
  try {
    await Livro.deleteOne({ _id: codigo });
  } catch (error) {
    throw new Error('Erro ao excluir livro do banco de dados.');
  }
};

module.exports = { obterLivros, incluir, excluir };