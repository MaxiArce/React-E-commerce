import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ReactComponent as IconDelete } from '../images/IconDelete.svg'


const CartContainer = () => {

    const { cart, total, clearCart } = useContext(CartContext)

    return (
        <div className="flex flex-col items-center sm:mt-20 mt-24 sm:grid sm:grid-cols-3  space-y-4">
            {/* Items */}
            <div className="sm:col-span-2 w-full">
                <p className="font-bold text-2xl ml-4">Orden</p>
                <div className="grid grid-cols-12 mx-5 mt-5 gap-0 content-center align-middle">
                    <p className="text-sm col-start-1 col-span-6">Cantidad de producto</p>
                    <p className="text-sm col-start-7 col-span-2 text-center self-center ">Precio/Unidad</p>
                    <p className="text-sm col-start-10 col-span-2 text-center self-center">Subtotal</p>
                </div>

                {/* map en el array para crear cada fila */}
                {cart.map(element => <CartItem key={element.id} id={element.id} title={element.title}
                    pictureUrl={element.pictureUrl} price={element.price} amount={element.amount} />)}
            </div>

            {/* Summary */}
            <div className="sm:col-span-1  w-full h-full p-2 sm:mt-0 ">
                <p className="font-bold text-2xl ">Detalles del Carrito</p>
                <p className="text-xl font-bold mt-5">Total : ${total}</p>
                <button className="w-full border-black border-2 rounded p-1 my-2 " onClick={clearCart}>
                    <IconDelete className="w-8 h-8 self-center mx-auto" />
                </button>
                <Link to={`/checkout`}>
                    <button className="text-white font-bold w-full bg-black self-center rounded p-4">Pagar</button>
                </Link>
            </div>

        </div>
    )
}

export default CartContainer