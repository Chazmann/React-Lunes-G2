import React from 'react'

const Buscador = () => {
    return (
        <div className="buscadorHeader">   
            <i className="fa fa-location-dot"></i>
            <input type="text" className="full" placeholder="Buscar..." />
            <button type='search' className=''>
                <i className='fa fa-magnifying-glass'></i>
            </button>
        </div>
    )
}

export default Buscador