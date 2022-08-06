
function Item({ item }) {

    const { id, title } = item;

    return <li className="list-group-item">{id} - {title}</li>;
}

function Lista({ titulo, itens }) {

    return (
        <article>
            <h1 className="h3">{ titulo ?? "Minha lista" }</h1>
            <ul className="list-group">
                { itens.map((item, indice) => <Item key={indice} item={item} />) }
            </ul>
        </article>
    );
}

export { Item, Lista }