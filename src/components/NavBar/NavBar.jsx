import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'
import { Link } from 'react-router'

function NavBar(){
    return (
        <>
            <nav className="NavBar">
                <Link to="/">
                    <h1>Mango</h1>
                </Link>
                <ul>
                    <Link className='Navbar-link' to='/'>
                        <li className='Navbar-link'>Productos</li>
                    </Link>
                    <Link className='Navbar-link' to='/category/remeras'>
                        <li className='Navbar-link' >Remeras</li>
                    </Link>
                    <Link className='Navbar-link' to='/category/pantalones'> 
                        <li className='Navbar-link' >Pantalones</li>
                    </Link>
                    <Link className='Navbar-link' to='/category/calzado'>
                        <li className='Navbar-link'>Calzados</li>
                    </Link>
                    <Link className='Navbar-link' to='/category/camisas'>
                        <li className='Navbar-link'>Camisas</li>
                    </Link >
                    <Link className='Navbar-link' to='/category/bermudas'>
                        <li className='Navbar-link'>Bermudas</li>                                        
                    </Link>
                </ul>
                <CartWidget />
                
            </nav>        
        </>

    )
}


export default NavBar


