import React from 'react'
import Article from './components/article/Article'
import Platos from './components/Platos/Platos'

const Principal = ( {contenido} ) => {
  return (
    <div>
     {contenido}
     <br />
<Platos NombrePlato="Empanadas"/>
<Platos NombrePlato="Hamburguesa"/>


     {/* <div className="articulos">
        <Article nombreArticulo="Remera" descripcionArticulo="Tela de algodón" precioArticulo="$4999,99" />
     </div> */}
    </div>
  )
}

export default Principal