import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconAdd} from '../images/IconAdd.svg'
import { ReactComponent as IconMinus} from '../images/IconMinus.svg'


const ItemCount = ({ item, substract, add, onAdd, counter, itemCountStatus }) => {

    return(
        <div className="w-full">
            <hr></hr>
                {/* Returns counter or checkout button depending on itemCountStatus */}
                {itemCountStatus
                ?(
                    <div className="">
                            {/* Allows to add/subtract the number of products taking into account the stock   */}
                            <div className="flex flex-row items-center m-2">
                                <button onClick={ substract }>
                                    <IconMinus className="w-8 h-8"/>
                                </button> 
                                    <span className="text-xl font-semibold leading-4 mx-2">{counter}</span>
                                <button onClick={ add }>
                                    <IconAdd className="w-8 h-8"/>  
                                </button>
                                <p className="text-xl leading-4 mx-4">${counter*item.price}</p>
                                {/* Displays different buttons depending on the stock */}
                                {item.stock >0 
                                    ?   <button className="bg-gray-200 rounded font-bold p-2 w-full" onClick={ () => onAdd(item,counter)}>Add to cart</button>
                                    :   <button className="bg-gray-900 text-white rounded font-bold p-2  w-full pointer-events-none">Out of stock</button>
                                }    
                            </div>
                    </div>
                )
                :(      
                    <div className="m-2">
                        <Link to="/cart">
                            <button className="bg-black text-white rounded font-bold p-2 w-full">Finish Purchase</button>
                        </Link>
                    </div>
                )}
            <hr></hr>
        </div>
    )
}
export default ItemCount;