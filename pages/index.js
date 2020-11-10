import { useState } from 'react';

function Home() {
    return (
        < div >
            <h1>Home2</h1>
            <Contador />
        </div >
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adiconarContador() {
        setContador(contador + 1);
    }

    return (
        < div >
            <div>{contador}</div>
            <button onClick={adiconarContador}>Adicionar</button>
        </div >
    )
}

export default Home