import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconAdd} from '../images/IconAdd.svg'
import { ReactComponent as IconMinus} from '../images/IconMinus.svg'


const ItemCount = ({ item, substract, add, onAdd, counter, itemCountStatus }) => {

    return(
        <div className="w-full">
            <hr></hr>
                {/* Retorna el contador o el boton de terminar compra dependiendo del itemCountStatus */}
                {itemCountStatus
                ?(
                    <div className="">
                            {/* Permite agregar/restar el numero de productos teniendo en cuenta el stock  */}
                            <div className="flex flex-row items-center m-2">
                                <button onClick={ substract }>
                                    <IconMinus className="w-8 h-8"/>
                                </button>
                                    <span className="text-xl font-semibold leading-4 mx-2">{counter}</span>
                                <button onClick={ add }>
                                    <IconAdd className="w-8 h-8"/>  
                                </button>
                                <p className="text-xl leading-4 mx-4">${counter*item.price}</p>
                                {/* Muestra diferentes botones dependiendo del stock */}
                                {item.stock >0 
                                    ?   <button className="bg-gray-200 rounded font-bold p-2 w-full" onClick={ () => onAdd(item,counter)}>Agregar a Carrito</button>
                                    :   <button className="bg-gray-900 text-white rounded font-bold p-2  w-full pointer-events-none">Sin Stock</button>
                                }    
                            </div>
                    </div>
                )
                :(      
                    <div className="m-2">
                        <Link to="/cart">
                            <button className="bg-black text-white rounded font-bold p-2 w-full">Terminar Compra</button>
                        </Link>
                    </div>
                )}
            <hr></hr>
        </div>
    )
}
export default ItemCount;