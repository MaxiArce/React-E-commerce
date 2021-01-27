import React, { useState, useEffect } from 'react'

// Declaro el context 
export const CartContext = React.createContext();

//Custom Provider
function CartProvider( { children }) {
    
    //useState para el array de productos, Cantidad de productos en el carrito(CartWidget), y total a pagar
    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()

    // UseEffect con depencia a cart
    useEffect(() => {

        //inicializa en 0 el total 
        let total = 0
        //por cada element en el carrito guarda en totalPrice el precio total (precio*cantidad)
        const totalPrice = cart.map( Element => Element.price * Element.amount )
        //suma todos los totales
        totalPrice.map( Element => total += Element)
        //guarda el total en el usState
        setTotal(total)

        //Obtiene la cantidad de items dentro del cart
        const cartQuantity = cart.length

        setQuantity(cartQuantity)

    }, [cart])

    
    const addItem = (item, counter) => {
        //si existe modifica la cantidad 
        if (isInCart(item.id)){
            //busca el producto y modifica la cantidad 
            const tempCart = cart.map(Element =>{
               if(Element.id === item.id){
                   Element.amount = counter
               }
               return Element; 
            })
            // hace un set con el nuevo cart
            setCart(tempCart)
        }else{
            setCart([...cart,{ id: item.id, title: item.title, pictureUrl: item.pictureUrl, price: item.price, amount: counter }])
        }
        console.log(cart)
    }

    //Verifica que el producto no este en el carrito
    const isInCart = (id) => {
        const value = cart.find(Element => Element.id === id)
        return value?true:false
    }

    //Creat un nuevo array filtrando el id
    const removeItem = (id) => {
        const tempCart = cart.filter(Element => Element.id !== id)
        setCart(tempCart)
    }

    const clearCart = () => {
        setCart([])
        setQuantity(0)
        console.log("Cart Cleared")
    }

   
    return (
            // Devuelve el custom provider para que cualquiera sea el children pueda acceder a la info
            <CartContext.Provider value ={{cart, quantity, total, addItem, removeItem, clearCart, isInCart}}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;
