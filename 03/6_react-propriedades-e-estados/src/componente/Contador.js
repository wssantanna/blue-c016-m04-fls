import { useState, useEffect } from 'react';

export default function Contador() {

    // Capturar um valor ou definir um novo valor...
    const [contador, definirContador] = useState(0);

    const [mensagem, definirMensagem] = useState("");

    // Observar se aconteceu alguma alteração...
    useEffect(()=> {
        definirMensagem(`Parabéns, você adicionou ${contador}`);
        console.log(mensagem);
    }, [contador]);

    useEffect(() => {}, []);

    function adicionarMaisUm() {
        definirContador(contador + 1);
    }

    return (
        <>
            <button 
                 className="btn btn-sm btn-success"
                 onClick={adicionarMaisUm}
            >
                + {contador}
            </button>
        </>
    );
}