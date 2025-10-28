import carritoImg from '../CartWidget/imgCarrito.png'
import './CartWidget.css'
import { Link } from 'react-router'
import { useContext } from 'react'
import cartContext from '../context/cartContext'

function CartWidget() {  
    
    const {countItems} = useContext(cartContext)
    return (
      <div className='cartWidget-container' >
        <Link className='cartLink' to={`/cart`}>
          <img className='cart' src={carritoImg} alt="Logo Carrito"></img>
        </Link>        
        <p>{countItems()}</p>
      </div>  
   
    )
  }
  
  export default CartWidget