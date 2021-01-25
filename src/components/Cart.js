import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import CartEmptyState from './CartEmptyState';
import CartContainer from './CartContainer';

const Cart = () => {

    //uso el CartContext para traer funciones y variables necesarias
    const {cart} = useContext(CartContext)

    return(
        <div>
            {cart.length > 0 
            ?(<CartContainer/>)
            :(<CartEmptyState/>)
            }
        </div>
    )
}

export default Cart