import React, {useState} from 'react'
import { ReactComponent as IconAdd} from '../images/IconAdd.svg'
import { ReactComponent as IconMinus} from '../images/IconMinus.svg'
import { ReactComponent as IconDelete} from '../images/IconDelete.svg'


const ItemCount = ({stock,initial}) => {

    const [counter, setCounter] = useState(initial)

    const substractAmount = () => {
        if (counter > initial){
            setCounter(counter - 1)
        }
    }

    const addAmount = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    }

    const resetAmount = () => {
        setCounter(initial)
    }
    
    const onAdd = () => {
        console.log("Cantidad Seleccionada: " + counter)
    }       

    
    return(
        <div className="bg-green-500 rounded-xl sm:w-1/2 p-4 sm:m-2 m-4">
            
            <p>Disponibles: {stock}</p>

            {/* Permite agregar/restar el numero de productos teniendo en cuenta el stock  */}
            <div className="flex flex-row items-center mt-4">
                <button onClick={ substractAmount }>
                    <IconMinus className="w-8 h-8"/>
                </button>
                <span className="text-xl font-semibold leading-4 ml-2 mr-2">{counter}</span>
                <button onClick={ addAmount }>
                    <IconAdd className="w-8 h-8"/>  
                </button>
                <button onClick={resetAmount} className="ml-auto">
                    <IconDelete className="w-8 h-8"/>
                </button>
            </div>

            {/* Muestra diferentes botones dependiendo del stock */}
            {stock>0 
                ?   <button className="bg-white rounded font-bold p-2 mt-4 w-full" onClick={ onAdd }>Agregar a Carrito</button>
                :   <button className="bg-red-600 rounded font-bold p-2 mt-4 w-full pointer-events-none">Sin Stock</button>
            }
            
        </div>
    )
}

export default ItemCount;