import React, { useContext } from 'react';
import { ReactComponent as IconEmptyCart } from '../images/EmptyCart.svg';
import { Link } from "react-router-dom";


const CartEmptyState = () => {

    return(
        <div className="rounded-lg h-1/2 bg-green-500 m-10 flex flex-col items-center">
            <IconEmptyCart className="w-1/12 m-10"/>
            <p className="font-bold text-2xl">Carrito Vacio!</p>
            <Link to={`/`} className="font-bold bg-yellow-400 rounded p-2 m-10">Ir a catalogo</Link>
        </div>
    )
}

export default CartEmptyState;