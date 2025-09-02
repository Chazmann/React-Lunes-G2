import ItemCategoria from "./_itemCategoria";
import listadoCategorias from "./categorias.json";
import './categorias.css';

 const Categorias = () => {
return (
    <div className="contenedorCategorias">
       {listadoCategorias.map((item, index) => (
         <ItemCategoria
           key={index}
           iconoCat={item.icono}
           nombreCat={item.nombre}
         />
      ))}
     </div>
 );
 };

 export default Categorias;




