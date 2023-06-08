const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter livros.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const novoLivro = await incluir(req.body);
    res.json({ message: 'Livro incluído com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao incluir livro.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir livro.' });
  }
});

module.exports = router;