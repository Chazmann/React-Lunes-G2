import React from 'react'
import logo2 from '../../assets/img/logoDell2.jpeg'

const Logo = () => {
  return (
    <>
        <img src="./logo-dell.png" alt="" className='logo'/>
    </>
  )
}

export default Logo



// Tu componente está en: src/components/Header/_logo.jsx

// La imagen está en: public/logo-dell.png

// Entonces NO debes usar import para traer la imagen desde public. En su lugar, simplemente referencia la imagen por su ruta pública.