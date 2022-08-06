import { useState, useEffect } from 'react';

import { Lista } from './Componentes';

  const API_LOCAL = {}
  
  API_LOCAL.Produtos = [
    {
      id: 1,
      title: 'banana'
    },
    {
      id: 2,
      title: 'pêra'
    },
    {
      id: 3,
      title: 'maçã'
    },
  ];

/*

// Mesma coisa que...

API_LOCAL = {
  Produtos: [
    {
      id: 1,
      nome: 'banana'
    },
    {
      id: 2,
      nome: 'pêra'
    },
    {
      id: 3,
      nome: 'maçã'
    }
  ]
}
*/

function App() {

  // Get, Set
  const [ publicacoes, definirPublicacoes ] = useState([]);

  // Observable
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resposta => resposta.json())
      .then(json => definirPublicacoes(json));

  }, []);

  // JSX - JavaScript XML
  return (
    <div className="container">
      <div className="row my-5">  
        <div className="col">
          <Lista 
            titulo="Lista local" 
            itens={API_LOCAL.Produtos} 
          />
        </div>      
      </div>  
      <div className="row my-5">  
        <div className="col">
          <Lista 
            titulo="Lista remota" 
            itens={publicacoes} 
          />
        </div>      
      </div> 
    </div>
  );
}

export default App;
