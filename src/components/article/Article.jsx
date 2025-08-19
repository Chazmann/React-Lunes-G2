const Article = ({ nombreArticulo, descripcionArticulo, precioArticulo }) => {
    return (

        <article className="articulo">
            
            <span>{nombreArticulo}</span>
            <span>{descripcionArticulo}</span>
            <hr />
            <span><h2>{precioArticulo}</h2></span>
            
        </article>
    )
}

export default Article