const Platos = ( {NombrePlato} ) => {
  return (
    <article className="plato">
        <div className="img-plato"></div>

        <h4>{NombrePlato}</h4>

        <div className="fila">
            <span>tiempoPreparación</span>
            <span>ValoracionPlato</span>
        </div>

        <h3>precioPlato</h3>

    </article>
  )
}

export default Platos