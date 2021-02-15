import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import { ReactComponent as IconDelete} from '../images/IconDelete.svg'


const CartItem = ({id, title, pictureUrl, price , amount}) => {

    const {removeItem} = useContext(CartContext)

    return(
        <div className="mt-8 sm:mx-5">
            <hr></hr>
            <div className="grid grid-cols-12 gap-0 content-center align-middle">
                <div className="col-start-1 col-span-2 relative">
                    <div className="bg-black w-8 h-8  absolute top-0 right-0 sm:-mt-2 rounded-full">
                        <p className="text-white font-bold text-center m-auto">{amount}</p>
                    </div>
                    <img src={pictureUrl} className="h-24 w-24 object-cover"></img>
                </div>
                <p className="font-bold text-2xl col-start-3 col-span-4 self-center">{title}</p>
                <p className="col-start-7 col-span-2 text-center self-center ">${price}</p>
                <p className="col-start-10 col-span-2 text-center self-center">${price*amount}</p>
                <IconDelete onClick={ () => removeItem(id)} className="col-start-12 col-span-1 w-8 m-auto"/>
            </div>
            <hr></hr>
        </div>
    )
}

export default CartItem;