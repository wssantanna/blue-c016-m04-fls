
/*

  Implementação do componente Item
  que irá receber objeto de publicação.
*/
export default function Item({ publicacao }) {
  
  // Separei as propriedades que desejo do objeto publicação.
  const { id, title, body } = publicacao;
  
  // Retorno o componente.
  return (
    <li>
      <strong>#{id} {title} - {body}</strong>
    </li>
  );
}