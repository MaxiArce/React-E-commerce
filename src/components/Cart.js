import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import CartEmptyState from './CartEmptyState';
import CartContainer from './CartContainer';

const Cart = () => {

//use the CartContext to fetch necessary functions and variables
    const {cart} = useContext(CartContext)

    return(
        <div className="w-screen">
            {cart.length > 0 
            ?(<CartContainer/>)
            :(<CartEmptyState/>)
            }
        </div>
    )
}

export default Cart