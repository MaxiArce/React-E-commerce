import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconAdd} from '../images/IconAdd.svg'
import { ReactComponent as IconMinus} from '../images/IconMinus.svg'
import { ReactComponent as IconDelete} from '../images/IconDelete.svg'


const ItemCount = ({ item, substract, add, reset, onAdd, counter, itemCountStatus }) => {

    return(
        <div className="bg-green-500 rounded-xl sm:w-1/2 p-4 sm:m-2 m-4">
            {/* Retorna el contador o el boton de terminar compra dependiendo del itemCountStatus */}
            {itemCountStatus
            ?(
                <div>
                    <p>Disponibles: {item.stock}</p>
                    {/* Permite agregar/restar el numero de productos teniendo en cuenta el stock  */}
                    <div className="flex flex-row items-center mt-4">
                        <button onClick={ substract }>
                            <IconMinus className="w-8 h-8"/>
                        </button>
                        <span className="text-xl font-semibold leading-4 ml-2 mr-2">{counter}</span>
                        <button onClick={ add }>
                            <IconAdd className="w-8 h-8"/>  
                        </button>
                        <button onClick={reset} className="ml-auto">
                            <IconDelete className="w-8 h-8"/>
                        </button>
                    </div>

                    {/* Muestra diferentes botones dependiendo del stock */}
                    {item.stock >0 
                        ?   <button className="bg-white rounded font-bold p-2 mt-4 w-full" onClick={ () => onAdd(item,counter)}>Agregar a Carrito</button>
                        :   <button className="bg-red-600 rounded font-bold p-2 mt-4 w-full pointer-events-none">Sin Stock</button>
                    }    
                </div>
            )
            :(      
                <div>
                    <Link to="/cart">
                        <button className="bg-yellow-400 rounded font-bold p-2 w-full">Terminar Compra</button>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default ItemCount;