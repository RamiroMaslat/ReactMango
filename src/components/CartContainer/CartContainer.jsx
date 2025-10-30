import { useContext } from "react"
import './CartContainer.css'
import Form from "../Form/Form"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../../data/firestore"



function CartContainer () {
    const {cart,clearCart, removeItem} = useContext(cartContext)
    
    async function handleCheckOut(formData){
        const buyOrder = {
            buyer: formData,
            cart: cart,
            date: new Date(),
            total: 9999
        }

        const orderDocument = await createBuyOrder(buyOrder)
        
        clearCart();
        alert(`Felicitaciones has hecho tu compra ${orderDocument.id}`)
    }

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
            <div key={itemInCart.id} className="cartItem_container">
                <div className="cartItem_card">
                    <h3 className='card-title idc-card__title'>{itemInCart.title}</h3>
                    <img className="card-img-top idc-card__img-top"src={itemInCart.img} alt="img-product" />
                    <p className='card-price idc-card__price'>Precio: ${itemInCart.price}</p>
                    <p className="card-description"> Descripción: {itemInCart.description}</p>
                    <p>Cantidad: {itemInCart.count}</p>
                    <p>Total: {itemInCart.count * itemInCart.price}</p>
                    <button className='cart-cartItem_button'onClick={() => removeItem(itemInCart.id)}>ELIMINAR</button>
                </div> 
                <Form handleCheckOut={handleCheckOut}/>
    
                
            </div> )}
        </div> 
    )
}
export default CartContainer
