import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

    const { loading, data } = useFetch(url)

    // console.log(loading)

    const { author, quote } = !!data && data[0]



    return (
        <div>
            <h1>Custom Hooks</h1>
            <hr />

            {
                <div className="row mb-5">
                    <div className="col-4">
                        {(counter > 1) &&
                            (
                                <button onClick={decrement} className="btn btn-warning">
                                    Anterior
                                </button>
                            )
                        }
                    </div>
                    <div className="col-4 text-center">
                        <button onClick={reset} className="btn btn-default">
                            Inicio
                        </button>
                    </div>
                    <div className="col-4 text-right">
                        <button onClick={increment} className="btn btn-primary">
                            Siguiente
                        </button>
                    </div>
                </div>
            }

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> {quote} </p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

        </div>
    )
}
