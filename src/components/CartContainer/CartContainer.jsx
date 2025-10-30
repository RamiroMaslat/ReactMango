import { useContext } from "react"
import './CartContainer.css'
import Form from "../Form/Form"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../../data/firestore"
import Swal from 'sweetalert2';



function CartContainer () {
    const {cart,clearCart, removeItem} = useContext(cartContext)
    
    async function handleCheckOut(formData){

        const total = cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);

        const buyOrder = {
            buyer: formData,
            cart: cart,
            date: new Date(),
            total: total
        }

        const orderDocument = await createBuyOrder(buyOrder)
        
        clearCart();
        console.log(orderDocument)

        Swal.fire({
            title: "¡Compra Exitosa! 🎉",
            html: `
                <p><strong>Nombre:</strong> ${formData.username}</p>
                <p><strong>Mail:</strong> ${formData.mail}</p>
                <p><strong>Teléfono:</strong> ${formData.phone}</p>
                <hr/>
                <p><strong>Total:</strong> $${total.toLocaleString()}</p>
                <p><strong>ID de orden:</strong> ${orderDocument.id}</p>
            `,
            icon: "success",
            confirmButtonText: "Aceptar",
            draggable: true
        });
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
                    <p>Total: {itemInCart.price * itemInCart.count}</p>                  
                    <button className='cart-cartItem_button'onClick={() => removeItem(itemInCart.id)}>ELIMINAR</button>
                </div>  
                             
            </div> )}
            <p className="totalBuy">Total de la Compra: ${cart.reduce((acc, prod) => acc + prod.price * prod.count, 0) }</p>
            <Form handleCheckOut={handleCheckOut}/>
        </div> 
    )
}
export default CartContainer
