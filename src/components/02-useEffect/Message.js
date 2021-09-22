import React, { useState, useEffect } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const { x, y } = coords

    useEffect(() => {

        const mouseMove = (e) => {
            const coordenadas = { x: e.x, y: e.y }
            setCoords(coordenadas)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {

            window.removeEventListener('mousemove', mouseMove)
            console.log("Componente desmontado")

        }
    }, [])

    return (
        <div>
            <h3>Hola Luis</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
