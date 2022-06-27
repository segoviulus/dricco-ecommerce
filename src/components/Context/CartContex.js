import { createContext, useState, } from "react";

// CartContex
const CartContext = createContext();

//Provider del Cart
const CartProvider = ({children}) => {

    const [cartItems, setcartItems] = useState ([])


 // Agregar un producto al Cart
 const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
        let index = cartItems.findIndex((index) => (index.id === item.id))
        let copiaCart = [...cartItems]
        copiaCart[index].quantity += quantity
        setcartItems(copiaCart)
    } else {
        const itemToAdd = {...item, quantity}
        setcartItems([...cartItems, itemToAdd])
    }
 }

// Verifica si el producto ya fue agrgado al Cart
const isInCart = (id) => {
    return cartItems.some((item) => (item.id === id))
}

//Quitar prducto del Cart
const removeItem = (id) => {
    setcartItems(cartItems.filter((item) => (item.id !== id)))
}

//Vaciar Cart
const clear = () => {
    setcartItems ([])
}

return (
    <CartContext.Provider value={{cartItems, addItem, isInCart, removeItem, clear, }}>
        {children}
    </CartContext.Provider>
)

}

export { CartContext, CartProvider }









