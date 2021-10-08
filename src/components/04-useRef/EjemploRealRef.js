import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './effects.css'


export const EjemploRealRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Ejemplo Real de Ref</h1>
            
            <button className="btn btn-primary btn-sm mt-5" onClick={() => {
                setShow(!show)
            }}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>

            <hr />

            {show && <MultipleCustomHooks />}

            

        </div>
    )
}
