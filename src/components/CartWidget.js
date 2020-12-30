import React from 'react';
import { ReactComponent as CartIcon } from '../images/cart.svg';


const CartWidget = () => {
    return(
        <button className="bg-white-800 flex flex-row p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <CartIcon className="h-6 w-6" />
            <span className="ml-2">0</span>
        </button>
    )
}

export default CartWidget