import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`
    }, [count]);// Apenas re-execute o efeito quando o count mudar

    return (
        <div>
            <p>
                <button onClick={() => setCount(count + 1)}>Clique aqui</button>
                <label>Você clicou {count} vezes</label> 
            </p>
        </div>
    );
}

export default Counter