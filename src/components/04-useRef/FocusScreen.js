import React, { useRef } from 'react'
import './effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
       inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Nu Nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
