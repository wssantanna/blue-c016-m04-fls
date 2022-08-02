import Item from './Item';

export default function Lista(props) {
    const { titulo } = props;

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='h4 mb-4'>{titulo ?? 'Lista'}</h1>
                </div>
            </div>
            
            <div className='row'>
                <div classNam='div'>
                    <ul className="list-group">
                        <Item tarefa={
                                {
                                    id: 1,
                                    nome: "Abacaxi",
                                    emoji: "🍍"
                                }
                            } 
                        />
                        <Item tarefa={
                                {
                                    id: 2,
                                    nome: "Banana",
                                    emoji: "🍌"
                                }
                            } 
                        />
                        <Item tarefa={
                                {
                                    id: 3,
                                    nome: "Maçã",
                                    emoji: "🍎"
                                }
                            } 
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}