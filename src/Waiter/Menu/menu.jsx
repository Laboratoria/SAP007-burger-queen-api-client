import React, { useState } from 'react'
import Operator from '../../Components/operator'

function Item (){
    
    const [counter, setCounter] = useState(0)

    function increment(){
        console.log('aumenta')
        setCounter(counter + 1)
    } 
    function decrement(){
        console.log('diminui')
        setCounter(counter - 1)
    }
    return(
        <>
            <Operator clickFunction={increment} calculator='+'/>
            <Operator clickFunction={decrement} calculator='-'/>
            <p>Total: {counter}</p>
        </>
    )
}

export default Item