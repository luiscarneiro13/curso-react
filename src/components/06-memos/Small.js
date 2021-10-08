import React from 'react'


export const Small = React.memo(
    ({ value }) => {

        console.log("Se cargó el componente");

        return (
            <small>{value}</small>
        )
    }
)
