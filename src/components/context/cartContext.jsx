import { createContext, useState } from "react"; 


const cartContext = createContext(null)

export function CartContextProvider (props) {
    const [cartItems, setCartItem] = useState([]) 

    function addToCart(newItem) {
        

        const newCart = structuredClone(cartItems)
        const inInCart = newCart.some(item => item.id === newItem.id)
        if (inInCart){
            const index = newCart.findIndex (item => item.id === newItem.id)
            const updateItem = newCart[index]
            updateItem.count++            
        }else{
            newItem.count = 1
            newCart.push(newItem)
            
        }
        setCartItem(newCart)
        
    }

    function countItems() {

        let quantity = 0;
        cartItems.forEach(item => quantity += item.count)
        return quantity
    }

    function removeItem(idDelete) {
        const newCart = structuredClone(cartItems)
        const newCartWhithDelete = newCart.filter(item => item.id !== idDelete)
        setCartItem(newCartWhithDelete)
    }

    function clearCart(){
        setCartItem([])
    }

    return <cartContext.Provider value={{cart: cartItems, addToCart, countItems, removeItem, clearCart}}>
        {props.children}
    </cartContext.Provider>    



}

export default cartContext