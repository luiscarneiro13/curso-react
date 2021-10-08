import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            return
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            donde: false
        })

        reset()
    }

    return (
        <div className="col-5">
            <h4>Agregar Todo</h4>
            <hr />

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="aprender ..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                />

                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </div>
    )
}
