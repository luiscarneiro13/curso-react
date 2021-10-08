import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    const num=1;
    console.log('Se generó de nuevo');

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    increment(num);
                }}
            >
                Incrementar
            </button>
        </div>
    )
})
