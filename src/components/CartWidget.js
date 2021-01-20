import React, {useContext} from 'react';
import { ReactComponent as IconCart } from '../images/IconCart.svg';
import {CartContext} from '../context/CartContext'

const CartWidget = () => {

    const {quantity} = useContext(CartContext);

    return(
        <button className="bg-white-800 flex flex-row p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <IconCart className="h-6 w-6" />
            <span className="ml-2">{quantity}</span>
        </button>
    )
}

export default CartWidget