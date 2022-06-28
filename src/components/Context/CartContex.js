import { createContext, useState, } from "react";

// CartContex
const CartContext = createContext();

//Provider del Cart
const CartProvider = ({children}) => {

    const [cartItems, setcartItems] = useState ([])


 // Agregar un producto al Cart
 const addItem = (id, image, titulo, precio, quantity) => {
    if (isInCart(id)) {
        let index = cartItems.findIndex((index) => (index.id === id))
        let copiaCart = [...cartItems]
        copiaCart[index].quantity += quantity
        setcartItems(copiaCart)
    } else {
        const itemToAdd = {id, image, titulo, precio, quantity}
        setcartItems([...cartItems, itemToAdd])
    }
 }

 // Agrega cantidad al icono del Cart en NavBar
const addItemNavBar = () => {
    let quantity = 0
    cartItems.forEach((product) => {
        quantity = quantity + product.quantity
})
    return quantity
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
    <CartContext.Provider value={{cartItems, addItem, addItemNavBar, isInCart, removeItem, clear}}>
        {children}
    </CartContext.Provider>
)

}

export { CartContext, CartProvider }









