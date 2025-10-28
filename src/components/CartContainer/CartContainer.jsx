import { useContext } from "react"
import './CartContainer.css'
import cartContext from "../context/cartContext"



function CartContainer () {
    const {cart, removeItem} = useContext(cartContext)
    const total = cart.reduce((acc, productInCart) => acc + productInCart.price, 0)
    if(cart.length === 0){
        return(
            <div className="emptyCart">
                <img className='sadFace'src="../../../public/face.png"></img>
                <p>Tu carrito esta vacío</p>
            </div>
            
        )
    }
    return(
        <div className="cart_container">
            <h2 className="cart_Tittle">Carrito de Compras</h2>
            {cart.map (itemInCart =>
            <div className="cartItem_container">
                <div className="cartItem_card">
                    <h3 className='card-title idc-card__title'>{itemInCart.title}</h3>
                    <img className="card-img-top idc-card__img-top"src={itemInCart.img} alt="img-product" />
                    <p className='card-price idc-card__price'>Precio: ${itemInCart.price}</p>
                    <p className="card-description"> Descripción: {itemInCart.description}</p>
                    <p>Cantidad: {itemInCart.count}</p>
                    <p>Total: {itemInCart.count * itemInCart.price}</p>
                    <button className='cart-cartItem_button'onClick={() => removeItem(itemInCart.id)}>ELIMINAR</button>
                </div> 
                
            </div> )}
        </div> 
    )
}
export default CartContainer
