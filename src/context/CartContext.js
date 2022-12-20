import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

function CartProvider({ children }) {
  //check for cart in localStorage
  const savedCart = () => {
    if (window.localStorage.getItem("SavedCart") != null) {
      return JSON.parse(localStorage.getItem("SavedCart"));
    } else {
      return [];
    }
  };

  const [cart, setCart] = useState(savedCart);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState();

  //handles cart
  useEffect(() => {
    let total = 0;
    const totalPrice = cart.map((Element) => Element.price * Element.amount);
    totalPrice.map((Element) => (total += Element));
    setTotal(total);

    const cartQuantity = cart.length;

    setQuantity(cartQuantity);

    localStorage.setItem("SavedCart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, counter) => {
    if (isInCart(item.id)) {
      const tempCart = cart.map((Element) => {
        if (Element.id === item.id) {
          Element.amount = counter;
        }
        return Element;
      });
      setCart(tempCart);
    } else {
      setCart([
        ...cart,
        {
          id: item.id,
          title: item.title,
          pictureUrl: item.pictureUrl,
          price: item.price,
          amount: counter,
        },
      ]);
    }
  };

  //Check that the product is not already in the cart
  const isInCart = (id) => {
    const value = cart.find((Element) => Element.id === id);
    return value ? true : false;
  };

  //Create a new array by filtering the id (deletes product)
  const removeItem = (id) => {
    const tempCart = cart.filter((Element) => Element.id !== id);
    setCart(tempCart);
  };

  const clearCart = () => {
    setCart([]);
    setQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        total,
        addItem,
        removeItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
