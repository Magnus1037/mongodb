import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Livro } from '@/models/modelo/Livro';
import { Menu } from '@/componentes/Menu';
import { LinhaLivro } from '@/componentes/LinhaLivro';
import { ControleLivros } from '@/models/controle/ControleLivros';

const controleLivros = new ControleLivros();

const LivroLista: React.FC = () => {
  

  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivros.obterLivros().then((data) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => setCarregado(false));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />

      <main className='container'>
        <h1 className={styles.title}>Lista de Livros</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro: Livro,index) => (
              <LinhaLivro
                key={index}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
