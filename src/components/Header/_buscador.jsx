import React from 'react'

const Buscador = () => {
    return (
        <>
            <i className="fa fa-location-dot"></i>
            <input type="text" className="" placeholder="Buscar..." />
            <button type='search' className=''>
                <i className='fa fa-magnifying-glass'></i>
                </button>
        </>
    )
}

export default Buscador