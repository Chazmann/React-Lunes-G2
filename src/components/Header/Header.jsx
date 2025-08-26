import "./Header.css"
import Buscador from "./_buscador"
import Logo from "./_logo"
import PerfilUsuario from "./_perfilUsuario"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="d-flex justify-content-between align-items-center">
                    <Logo />
                    <PerfilUsuario />
                </div>
                
                <Buscador />
             
            </header>
        </>
    )
}

export default Header