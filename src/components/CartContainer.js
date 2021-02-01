import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ReactComponent as IconDelete} from '../images/IconDelete.svg'


const CartContainer = () => {

    const {cart, total, clearCart} = useContext(CartContext)

    return(
        <div className="rounded-lg h-1/2 bg-green-500 m-5 p-5 flex flex-col items-center">
            <p className="font-bold text-2xl">Tu Carrito</p>
            {/* map en el array para crear cada fila */}
            {cart.map (element => <CartItem key={element.id} id={element.id} title={element.title} 
                pictureUrl={element.pictureUrl} price={element.price} amount={element.amount} /> )}
            <p className="text-2xl font-bold mt-5">Total : ${total}</p>
            <button onClick={clearCart}>
                <IconDelete className="w-8 h-8"/>
            </button>
            <Link to={`/checkout`}>
                <button className="font-bold bg-yellow-400 rounded p-2 m-5">Pagar</button>
            </Link>
        
        </div>
    )
}

export default CartContainer