import '../CartWidget'
import '../NavBar/NavBar.css'
import CartWidget from '../CartWidget'

function NavBar(){
    return (
        <>
            <nav className="NavBar">
                <h1>Mango</h1>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Ofertas!</li>
                    <li>Quienes somos</li>
                    <li>Contacto</li>
                                        
                </ul>
                <CartWidget />
                
            </nav>        
        </>

    )
}

export default NavBar


