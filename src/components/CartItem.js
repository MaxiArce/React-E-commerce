import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import { ReactComponent as IconDelete} from '../images/IconDelete.svg'


const CartItem = ({id, title, pictureUrl, price , amount}) => {

    const {removeItem} = useContext(CartContext)

    return(
        <div className="bg-green-200 rounded-xl mt-5 p-10 w-full">
            <div className="grid grid-cols-12 gap-0 content-center align-middle max-h-24">
                <div className="col-start-1 col-span-2 ">
                    <div className="bg-black w-8 h-8 rounded-full">
                        <p className="text-white font-bold text-center m-auto">{amount}</p>
                    </div>
                    <img src={pictureUrl} className="max-h-24"></img>
                </div>
                <p className="font-bold text-2xl col-start-3 col-span-4 self-center">{title}</p>
                <p className="col-start-7 col-span-2 text-center self-center ">${price}</p>
                <p className="col-start-10 col-span-2 text-center self-center">${price*amount}</p>
                <IconDelete onClick={ () => removeItem(id)} className="col-start-12 col-span-1 w-8 m-auto"/>
            </div>
        </div>
    )
}

export default CartItem;