import React from 'react';
import { ReactComponent as IconEmptyCart } from '../images/EmptyCart.svg';
import { Link } from "react-router-dom";


const CartEmptyState = () => {
    return(
        <div className="pt-16 h-screen">
            <div className="rounded-lg h-full bg-gray-100 flex flex-col items-center">
                <IconEmptyCart className="w-1/12 m-10"/>
                <p className="font-bold text-2xl">Empty Cart!</p>
                <Link to={`/`} className="bg-black text-white rounded font-bold p-2 m-10">Go to catalog</Link>
            </div>
        </div>
    )
}

export default CartEmptyState;