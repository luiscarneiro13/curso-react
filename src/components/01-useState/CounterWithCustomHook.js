import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement,reset } = useCounter(100)

    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />
            <button onClick={()=>{decrement(1)}} className="btn btn-danger mr-2"> - 1 </button>
            <button onClick={()=>{reset()}} className="btn mr-2 ml-2"> reset </button>
            <button onClick={()=>{increment(10)}} className="btn btn-primary ml-2"> + 1 </button>
        </>
    )
}
