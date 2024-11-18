import {useState} from 'react';
export default function Counter(){
    const [num, setNum] = useState(0);
    function manageContador(suma){
        if (suma){
            setNum(n => n + 1);
        }else{
            setNum(n => n - 1);
        }
    }
    return <div>
        <button onClick={() => manageContador(false)}>-</button>
        <>{num}</>
        <button onClick={() => manageContador(true)}>+</button>
    </div>
}