import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        // console.log("Cuando cambia el componente la primera vez");
    }, [])

    //Solo cuando algo del formulario cambia 
    useEffect(() => {
        // console.log("Form cambió");
    }, [formState])

    //Solo cuando el email cambia
    useEffect(() => {
        // console.log("El Email cambió");
    }, [email])

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value,
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="carneiroluis2@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message />}

        </>
    )
}
