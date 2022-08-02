import Contador from './Contador';

export default function Item(props) 
{
    let { id, nome, emoji } = props.tarefa;

    return (
        <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between py-3">
            <div>
                #{id} {emoji} <strong>{nome}</strong>
            </div>
            <Contador />
        </li>
    );
}