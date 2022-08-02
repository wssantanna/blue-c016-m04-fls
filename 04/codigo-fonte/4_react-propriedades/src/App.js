import Item from './componente/Item';

const Pessoas = [
  {
    id: 1,
    nome: "Willian"
  },
  {
    id: 2,
    nome: "Marcos"
  },
  {
    id: 3,
    nome: "Camila"
  }
]

function App() {
  return (
    <>
     { Pessoas.map(pessoa => <Item pessoa={pessoa} />) }
    </>
  );
}

export default App;
