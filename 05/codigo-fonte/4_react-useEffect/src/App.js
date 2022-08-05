import { useState, useEffect } from 'react';

import { requererTodos } from './servicos/Server';

import Item from './componentes/Item';

export default function App() {

  const [publicacoes, definirPublicacoes] = useState([]);

  useEffect(() => {
    definirPublicacoes( requererTodos() );
  }, []);

  return (
    <ul>
      { publicacoes.map(publicacao => <Item key={publicacao.id} publicacao={publicacao}/>) }
    </ul>
  );
}
