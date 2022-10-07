import {useState} from 'react';

const Counter = ()=>{
    const [count, setCount] = useState(0);

    return (
        <div>   
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>Incrementar una unidad</button>
            <button onClick={()=>{setCount(0)}}>Regresar cuenta a 0</button>
        
        </div>
    )
};
export default Counter;